/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 19:09:34
 * @LastEditTime: 2019-10-24 11:58:53
 * @LastEditors: Please set LastEditors
 */
const router = require('koa-router')()

let count = 1 +  Math.random() + Math.random() + Math.random();;

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

const disabledSuccess = {
  "hint": "",
  "detailErrMsg": "",
  "data": "",
  "result": "",
  "retcode": 0,
  "retmsg": "启用禁用用户角色成功",
  errcode: 0,
  errmsg: '启用禁用用户角色成功'
}

const getListData = () => {
  count++
  return {
      "user_org": "test" + count,
      "create_by": "test"+ count,
      "user_account": "test"+ count,
      "role_name": "test"+ count,
      "user_post": "test"+ count,
      "user_id": "test"+ count,
      "user_name": "test"+ count,
      "create_time": "test"+ count,
      id: 'id' + count,
    }
}
const getDeptListData = () => {
  count++
  return {
      "dept_id": "dept_id" + count,
      "dept_name": "dept_name"+ count,
    }
}
const getUserListData = () => {
  count++
  return {
      "user_id": "user_id" + count,
      "user_account": "user_account"+ count,
      "user_name": "user_name"+ count,
      "dept_name": "dept_name"+ count,
      "telephone": "telephone"+ count,
    }
}
router.post('/authority_dev/users/addUser', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = addSuccess
})

router.post('/authority_dev/users/updateUser', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = editSuccess
})

router.post('/authority_dev/innerapi/roles/setAppuserRoleDisabled', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = disabledSuccess
})

router.post('/authority_dev/innerapi/roles/delAppuserRoleList', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = deleteSuccess
})

router.post('/authority_dev/innerapi/roles/getAppuserRoleList', async (ctx, next) => {
  
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

router.post('/authority_dev/innerapi/usercenter/getDeptList', async (ctx, next) => {
  
  let data = ctx.request.body;
  let page = data.page || 1
  let size = data.size || 10
  count = page * size - size
  let result = []
  for (let i= 0 ;i < 12; i++) {
    result.push(getDeptListData())
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

router.post('/authority_dev/innerapi/usercenter/getUserList', async (ctx, next) => {
  let data = ctx.request.body;
  let page = data.page || 1
  let size = data.size || 10
  count = page * size - size + Math.random() + Math.random()
  let result = []
  for (let i= 0 ;i < 12; i++) {
    result.push(getUserListData())
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
