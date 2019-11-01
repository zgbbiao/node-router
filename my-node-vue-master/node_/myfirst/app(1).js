const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const jwt = require('jsonwebtoken');  
const util = require('util');
const jwtKoa = require('koa-jwt');
const {SECRET} = require('./config/config');
const verify = util.promisify(jwt.verify) //解密；


// CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
// 下面以koa2-cors为例，
const cors = require('koa2-cors');


const index = require('./routes/index')
const users = require('./routes/users')
const login = require("./routes/login/login");
const userinfo = require('./routes/info/userinfo');
const logout = require('./routes/login/logout');
const register = require('./routes/login/register');
const merberList = require('./routes/merber/list');
const merberAdd = require('./routes/merber/add');
const merberRemove = require('./routes/merber/remove');
const merberEdit= require('./routes/merber/edit');
const merberInfo = require('./routes/merber/info');
const merberAvatar = require('./routes/merber/avatar');
const booksAdd = require('./routes/books/add');
const booksGet = require('./routes/books/get');
const bookGetID = require('./routes/books/getID');
const bookDelete = require('./routes/books/delete');
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
//实现跨域
app.use(cors({
  origin: function(ctx) {
    if (ctx.url === '/test') {
      return false;
    }
    // return '*';
    // return "http://116.196.97.115/";
    return "http://localhost:9001"
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

// 认证中间件；
// 添加passthrough: true: 当没有找到认证头， 保证书中传递到下一个中间件； , passthrough: true
// app.use(jwtKoa({secret: SECRET}).unless({
//   path: [/^\/login/, /^\/register/]  //数组中的路径不需要通过jwt验证；
// }));



app.use(views(__dirname + '/views', {
  extension: 'html'
}))



// 

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`) 
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(login.routes(), login.allowedMethods())
app.use(userinfo.routes(), userinfo.allowedMethods());
app.use(logout.routes(), logout.allowedMethods());
app.use(register.routes(), register.allowedMethods());
app.use(merberList.routes(), merberList.allowedMethods());
app.use(merberAdd.routes(), merberAdd.allowedMethods());
app.use(merberRemove.routes(), merberRemove.allowedMethods());
app.use(merberEdit.routes(), merberEdit.allowedMethods());
app.use(merberInfo.routes(), merberInfo.allowedMethods());
app.use(merberAvatar.routes(), merberAvatar.allowedMethods());
app.use(booksAdd.routes(), booksAdd.allowedMethods());
app.use(booksGet.routes(), booksGet.allowedMethods());
app.use(bookGetID.routes(), bookGetID.allowedMethods());
app.use(bookDelete.routes(), bookDelete.allowedMethods());
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
//认证错误；
app.use((ctx, next) => {
  return next().catch( err => {
    if(402 == err.status) {
      ctx.status = 401;
      ctx.body= {
        status: 401,
        message: "认证信息错误"
      }
    } else {
      throw err;
    }
  } );
})

module.exports = app
