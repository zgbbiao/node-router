const  { insert, update, find, count } = require ('../../tools/dbtools');
const router = require('koa-router')()
const config = require('../../config/config');
const jwt = require('jsonwebtoken'); // 不记名token认证；
const { auth, setToken } = require('../../tools/authTools');

router.get('/login', async (ctx, next) => {
    console.log( ctx.query.username + "登录到login");
    var username = ctx.query.username ;
    var password = ctx.query.password;

    if( username === "admin@wz.com" && password === "123456" ) {
        ctx = {
            status: 201,
            message: "登录成功",
            username
        }
    }
    else {
        ctx.body = {
            status: 0,
            message: "登录失败",
        }
    }
}).post('/loginpost', async (ctx, next) => {
    let body = ctx.request.body;
    console.log(body.username + "登录到login_post");

    // ctx.body = ctx.request.body;
    //添加  await 设置为同步， 不然会找不到响应头；

    // 查找数据， 如果存在 则进行token验证；
    await  find(body).then( async  (res)=>{
        if ( res.length ){
            //使用token认证， 不需要cookie；
            // ctx.cookies.set(
            //     'cid',
            //     'hellow cid',
            //     {
            //         domain: 'http://localhost:9002/', //写cookie所在的域名，
            //         path: '/login',       //写cookie所在的路径
            //         // maxAge: 10*60*100, //有效时长,
            //         // expires: new Date( newDate.getTime()+ 6*6000 ), // 失效时间，
            //         httpOnly: true,    //是否只允许Http请求中获取；
            //         overWrite: true
            //     }
            // )
            // token验证； 验证成功， 则添加当前登录时间；
          await setToken(ctx, next).then(async res2 => {
            if (res2) {
                let findDate = res[0];
                let whereobj = {
                    username: findDate.username,
                    password: findDate.password,
                    jurisdiction: findDate.jurisdiction
                };

                let logindate = [];
                if (Array.isArray(findDate.logindate)){
                    findDate.logindate.push(new Date().getTime())
                    logindate = [new Date().getTime()];
                } else {
                    logindate.push(new Date().getTime());
                }
                let updateobj = {
                    logindate: logindate,
                }

                // 添加登录时间；
                await update(whereobj, updateobj).then(res3 => {
                    if (res3) {
                        console.log(`插入登录时间成功： ${res3}`);
                        ctx.body = {
                            message: "登录成功",
                            status: 200,
                            token: res2.token,
                            data: {
                                username: body.username
                            }
                        }
                    }
                }).catch(err => {
                    console.log(`插入登录时间失败： ${err}`);
                });
            }
          }).catch(err => {
            ctx.body = {
                message: "用户名不存在",
                status: 0
            }
          });
        } else { 
            ctx.body = { status: 0, message: '没找到数据' };
        }
      
    }).catch((err)=>{
        ctx.body = { status: 0, message: "查询数据库失败" }
    })
})


module.exports = router
