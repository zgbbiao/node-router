const  { user, books} = require ('../../tools/dbtools2');
const { auth } = require('../../tools/authTools');
const router = require('koa-router')()

router.post('/books/delete', async (ctx, next) => {
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
            var obj = data.id || "";
            // { 'author': 1, 'content': 0 , 'createTime': 1, 'title': 1, '_id': 1  }
            dbsave = await books.findByIdAndRemove([obj]);
            if (dbsave) {
                ctx.body = {
                    status: 200,
                    message: '删除成功',
                    res: [dbsave]
                };
            }else {
                ctx.body = {
                    status: 0,
                    message: '删除失败',
                    res: [dbsave]
                };
            }
            
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