const router = require('koa-router')()
const  { find, update } = require ('../../tools/dbtools');
const { auth } = require('../../tools/authTools');
// 使用 async 异步流程依赖模块；
router.post('/merber/edit', async (ctx, next) => {
    var body = ctx.request.body;
    // 进行错误抛出；
    try {
        // 并行运行；  await 后跟随promise对象， 不需要then 和 catch; 如果正确， 则返回resolve返回的内容； 如果错误， 则用try catch来捕捉；
        let dbAuth = await auth(ctx, next);
        let dbFindName = await find({ username: body.username });
        let dbUpdate = "";
        if (dbAuth.status === 0) {
            ctx.body = dbAuth
        } else if (dbAuth.status === 200 && dbFindName.length) {
            var obj = Object.assign({}, body);
            obj.token = "";
            dbUpdate = await update({ username: obj.username }, obj);
            console.log(body);
            console.log(dbAuth);
            console.log(dbFindName);
            console.log(dbUpdate)
            if (dbUpdate) {
                ctx.body = {
                    message: '更新成功',
                    status: 200,
                    // dbAuth
                    res: []
                }
            }
        } else {
            ctx.body = {
                message: '用户不存在',
                status: 0,
                res: []
            }
        }
    } catch (err) {
        if ( err && Object.keys(err).length) {
            ctx.body = {
                status: 0,
                message: '查询时链接数据库失败',
                err
            }
        }
    }
})
module.exports = router
