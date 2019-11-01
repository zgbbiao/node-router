const router = require('koa-router')()
const  { insert, find } = require ('../../tools/dbtools');
const { auth } = require('../../tools/authTools');
// 使用 async 异步流程依赖模块；
router.post('/merber/add', async (ctx, next) => {
    var body = ctx.request.body;
    // 进行错误抛出；
    try {
        // 并行运行；  await 后跟随promise对象， 不需要then 和 catch; 如果正确， 则返回resolve返回的内容； 如果错误， 则用try catch来捕捉；
        let dbAuth = await auth(ctx, next);
        let dbFindName = await find({ username: body.username });
        let dbFindPhone = await find({ phone: body.phone })
        let dbInsert = "";
        if (dbAuth.status === 0) {
            ctx.body = dbAuth
        } else if (dbFindName.length) {
            ctx.body = {
                status: 0,
                message: '用户名已存在'
            }
        } else if (dbFindPhone.length) {
            ctx.body = {
                status: 0,
                message: '手机号码已被注册'
            }
        } else if (dbAuth.status === 200 && dbFindName.length === 0 && dbFindPhone.length === 0 ) {
            var dbData = {
                age: '',
                avatar: '',
                gender: '',
                jurisdiction: '',
                logindate: [],
                memo: '',
                password: '',
                phone: '',
                token: '',
                username: ''
            }

            dbData = Object.assign(dbData, body);
            dbInsert = await insert(dbData);
            if (dbInsert) {
                ctx.body = {
                    message: '插入成功',
                    status: 200,
                    dbAuth
                }
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
