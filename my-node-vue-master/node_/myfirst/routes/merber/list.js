const router = require('koa-router')()
const  { find, getPage } = require ('../../tools/dbtools');
const { auth } = require('../../tools/authTools');

router.post('/merber/list', async (ctx, next) => {
    await next();
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
            // let pageSize =  body.pageSize || 10 ;
            // let currentPage = body.currentPage || 1 ;
            // let sort = body.sort || {'logindate': -1}  //排序 ， 按登录时间；
            // let condition = body.condition || {}; //条件；
            // var skipnum = (currentPage - 1) * pageSize; //跳过数；
            dnFind = await getPage(body)
            if (dnFind.status === 200) {
                ctx.body = dnFind
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
