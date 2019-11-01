/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 19:09:34
 * @LastEditTime: 2019-09-30 18:20:03
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

const getListData = () => {
  count++
  return {
      "resource_group_name": "test" + count,
      "resource_group_id": "test"+ count,
      id: 'id' + count,
    }
}

router.post('/authority_dev/innerapi/resourceGroups/addResourceGroup', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = addSuccess
})

router.post('/authority_dev/innerapi/resourceGroups/updateResourceGroup', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = editSuccess
})

router.post('/authority_dev/innerapi/resourceGroups/delResourceGroup', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = deleteSuccess
})

router.post('/authority_dev/innerapi/resourceGroups/getResourceGroupPage', async (ctx, next) => {
  
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

module.exports = router
