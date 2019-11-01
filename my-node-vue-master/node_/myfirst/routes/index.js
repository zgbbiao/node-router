/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 19:09:34
 * @LastEditTime: 2019-09-27 19:09:34
 * @LastEditors: your name
 */
const router = require('koa-router')()



router.get('/', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = 'koa2 string'
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
