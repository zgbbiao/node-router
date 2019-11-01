const router = require('koa-router')()
const { auth, setToken } = require('../tools/authTools');
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
}).post('/', async (ctx, next) => {

})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
