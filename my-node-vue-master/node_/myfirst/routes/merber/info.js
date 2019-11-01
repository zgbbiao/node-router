const router = require('koa-router')()
const  { find } = require ('../../tools/dbtools');
const { auth } = require('../../tools/authTools');

router.post('/merber/info', async (ctx, next) => {
    var body = ctx.request.body;
    try {
        let dbAuth = await auth(ctx, next);
        let dnFind = "";
        if (dbAuth.status === 0) {
            ctx.body = {
                status: 0,
                message: 'token验证错误',
                res: dbAuth
            }
        } else if (dbAuth.status === 200) {
            var obj = {
                username: body.username
            }
            dnFind = await find(obj);
            if (dnFind.length) {
                ctx.body = {
                    status: 200,
                    message: '查询成功',
                    res: dnFind
                }
            } else {
                ctx.body = {
                    status: 0,
                    message: '未查询到数据',
                    res: dnFind
                }
            }
        }
    } catch (err) {
        ctx.body = {
            status: 0,
            message: '验证或查询异常',
            err
        }
    }
})


module.exports = router
