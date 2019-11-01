const  { user, books} = require ('../../tools/dbtools2');
const { auth } = require('../../tools/authTools');
const router = require('koa-router')()

router.post('/books/get', async (ctx, next) => {
    let findDb = [];
    let dbAuth = '';
    let dbsave = [];
    let data = ctx.request.body;
    try {
        // findDb = await user.find([{username: 'admin@01.com'} ]);
        dbAuth = await auth(ctx, next);
        if (dbAuth.status === 0) {
            ctx.body = dbAuth
        } else if (dbAuth.status === 200) {
            var obj = data.data || {};
            var opt = data.opt || {};



            // { 'author': 1, 'content': 0 , 'createTime': 1, 'title': 1, '_id': 1  }
            dbsave = await books.getPage([obj, opt]);
            ctx.body = dbsave;

        }
    } catch(err) {
        ctx.body = {
            status: 0,
            message: '未找到数据',
            err: err
        }
    }
})
module.exports = router