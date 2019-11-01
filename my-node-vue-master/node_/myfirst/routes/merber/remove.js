const router = require('koa-router')()
const  { remove, find } = require ('../../tools/dbtools');
const { auth } = require('../../tools/authTools');

router.post('/merber/remove', async (ctx, next) => {
    var body = ctx.request.body;
    try {
        let dbAuth = await auth(ctx, next);
        var obj = {
            username: body.username
        }
        if (dbAuth.status === 0) {
            ctx.body = dbAuth
        } else {
            let dbRemove = await remove(obj);
            if (dbRemove.result && dbRemove.result.n) {
                ctx.body = {
                    status: 200,
                    message: '删除成功',
                    res: dbRemove
                };
            } else {
                ctx.body = {
                    status: 0,
                    message: '删除失败',
                    res: dbRemove
                };
            }
        }
    } catch (err){
        if (err) {
            ctx.body = {
                status: 0,
                message: '查询用户名时链接数据库失败',
                err
            }
        }
    }
})


module.exports = router
