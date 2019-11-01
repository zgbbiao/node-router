/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 19:09:34
 * @LastEditTime: 2019-10-24 11:56:35
 * @LastEditors: Please set LastEditors
 */
const router = require('koa-router')()

let count = 1 +  Math.random() + Math.random() + Math.random();

const addSuccess = {
  "hint": "",
  "detailErrMsg": "",
  "data": "",
  "result": "",
  "retcode": 0,
  "retmsg": "新增成功",
  errcode: 0,
  errmsg: '新增成功'
}
const editSuccess = {
  "hint": "",
  "detailErrMsg": "",
  "data": "",
  "result": "",
  "retcode": 0,
  "retmsg": "修改成功",
  errcode: 0,
  errmsg: '修改成功'
}

const deleteSuccess = {
  "hint": "",
  "detailErrMsg": "",
  "data": "",
  "result": "",
  "retcode": 0,
  "retmsg": "删除成功",
  errcode: 0,
  errmsg: '删除成功'
}

const getListData = () => {
  count++
  return {
      "description": "test" + count,
      "app_name": "test"+ count,
      "create_time": ""+ count,
      "app_url": "test"+ count,
      "creator": "test"+ count,
      "app_code": "test" + count,
      "users": [
        {
          "uid": "1" + count,
          "login_name": "1" + count,
        }
      ],
      "charger_unit": "test" + count,
      "charger_name": "test" + count,
      "charger_tel": "test" + count,
      id: 'id' + count,
    }
}

router.post('/authority_dev/applications/addApplication', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = addSuccess
})

router.post('/authority_dev/applications/updateApplicationList', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = editSuccess
})

router.post('/authority_dev/applications/delApplication', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = deleteSuccess
})

router.post('/authority_dev/applications/getApplicationList', async (ctx, next) => {
  let data = ctx.request.body;
  let page = data.page || 1
  let size = data.size || 10
  count = page * size - size
  let result = []
  for (let i= 0 ;i < 12; i++) {
    result.push(getListData())
  }
  ctx.body = {
    "retcode": 0,
    "detailErrMsg": "",
    "data": result,
    total: result.length,
    "retmsg": "",
    "hint": "",
    "result": ""
  }
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
