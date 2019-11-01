const  { insert, update, find, count } = require ('../../tools/dbtools');
const router = require('koa-router')()
const config = require('../../config/config');
const jwt = require('jsonwebtoken'); // 不记名token认证；


router.get('/login/logout', async (ctx, next) => {
    console.log("logout")
    ctx.body = {
        status: 200,
        token: "",
        message: "退出成功"
    }
})

module.exports = router
