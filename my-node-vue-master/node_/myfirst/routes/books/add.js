const  { user, books} = require ('../../tools/dbtools2');
const { auth } = require('../../tools/authTools');
const router = require('koa-router')()

router.post('/books/add', async (ctx, next) => {
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
            delete data.token;
            dbsave = await books.save([data]);
            if (dbsave._id) {
                ctx.body = {
                    status: 200,
                    message: '添加成功'
                };
            } else {
                ctx.body = {
                    status: 0,
                    message: '添加失败'
                };
            }
        }
    } catch(err) {
        ctx.body = {
            status: 0,
            message: '插入失败',
            err: err
        }
    }
})
module.exports = router