/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 19:09:34
 * @LastEditTime: 2019-10-09 18:39:46
 * @LastEditors: Please set LastEditors
 */
const router = require('koa-router')()

let count = 1;

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
const deleteSuccess2 = {
  "hint": "",
  "detailErrMsg": "",
  "data": "",
  "result": "",
  "retcode": 0,
  "retmsg": "删除失效资源成功",
  errcode: 0,
  errmsg: '删除失效资源成功'
}

const copySuccess = {
  "hint": "",
  "detailErrMsg": "",
  "data": "",
  "result": "",
  "retcode": 0,
  "retmsg": "复制成功",
  errcode: 0,
  errmsg: '复制成功'
}
const disabledSuccess = {
  "hint": "",
  "detailErrMsg": "",
  "data": "",
  "result": "",
  "retcode": 0,
  "retmsg": "禁用或启用成功",
  errcode: 0,
  errmsg: '禁用或启用成功'
}

const getListData = () => {
  count++
  return {
      "permission_id": "test" + count,
      "permission_name": "testName"+ count,
      id: 'id' + count,
    }
}

router.post('/authority_dev/innerapi/permissions/addPermission', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = addSuccess
})

router.post('/authority_dev/innerapi/permissions/updatePermission', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = editSuccess
})

router.post('/authority_dev/innerapi/permissions/delPermissionList', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = deleteSuccess
})
router.post('/authority_dev/innerapi/permissions/copyPermission', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = copySuccess
})
router.post('/authority_dev/innerapi/permissions/setPermissionResourceDisabled', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = disabledSuccess
})
router.post('/authority_dev/innerapi/permissions/delPermissionResourceList', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = deleteSuccess2
})
router.post('/authority_dev/innerapi/permissions/removePermissionResourceList', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = deleteSuccess2
})



router.post('/authority_dev/innerapi/permissions/getPermissionList', async (ctx, next) => {
  
  let data = ctx.request.body;
  let page = data.page || 1
  let size = data.size || 10
  count = page * size - size
  let result = []
  for (let i= 0 ;i < 50; i++) {
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

module.exports = router
