/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 19:09:34
 * @LastEditTime: 2019-10-09 17:47:55
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
const addSuccess2 = {
  "hint": "",
  "detailErrMsg": "",
  "data": "",
  "result": "",
  "retcode": 0,
  "retmsg": "角色功能关联成功",
  errcode: 0,
  errmsg: '角色功能关联成功'
}
const addSuccess3 = {
  "hint": "",
  "detailErrMsg": "",
  "data": "",
  "result": "",
  "retcode": 0,
  "retmsg": "复制成功",
  errcode: 0,
  errmsg: '复制成功'
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

const addSuccess4 = {
  "hint": "",
  "detailErrMsg": "",
  "data": "",
  "result": "",
  "retcode": 0,
  "retmsg": "功能资源关联成功",
  errcode: 0,
  errmsg: '功能资源关联成功'
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
      "role_name": "test" + count,
      "role_id": "test" + count,
      "children": [
        {
          "children": [
            {
              "role_name": "test" + count + '-' + count + '-' + count,
              "role_id": "test" + count + '-' + count+ '-' + count,
              "children": [
                {
                  "children": [
                    {
                      "role_name": "test" + count + '-' + count + '-' + count + '-' + count + '-' + count,
                      "role_id": "test" + count + '-' + count  + '-' + count + '-' + count + '-' + count,
                      "children": [
                        {
                          "children": [],
                          "role_name": "test" + count + '-' + count  + '-' + count + '-' + count + '-' + count + '-' + count,
                          "role_id": "test" + count + '-' + count + '-' + count+ '-' + count + '-' + count + '-' + count,
                        },
                        {
                          "children": [],
                          "role_name": "test" + count + '-' + count  + '-' + count + '-' + count + '-' + count + '-' + count + 1,
                          "role_id": "test" + count + '-' + count + '-' + count+ '-' + count + '-' + count + '-' + count + 1,
                        }
                      ]
                    },
                    {
                      "role_name": "test" + count + '-' + count + '-' + count + '-' + count + '-' + count + 1,
                      "role_id": "test" + count + '-' + count  + '-' + count + '-' + count + '-' + count + 1,
                      "children": [],
                    }
                  ],
                  "role_name": "test" + count + '-' + count + '-' + count + '-' + count,
                  "role_id": "test" + count + '-' + count+ '-' + count + '-' + count,
                },
                {
                  "role_name": "test" + count + '-' + count + '-' + count + '-' + count + 1,
                  "role_id": "test" + count + '-' + count+ '-' + count + '-' + count + 1,
                  "children": [],
                }
              ]
            }
          ],
          "role_name": "test" + count + '-' + count,
          "role_id": "test" + count + '-' + count,
        },
        {
          "role_name": "test" + count + '-' + count + 1,
          "role_id": "test" + count + '-' + count + 1,
        }
      ]
    }
}

router.post('/authority_dev/innerapi/roles/addRole', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = addSuccess
})

router.post('/authority_dev/innerapi/roles/updateRole', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = editSuccess
})

router.post('/authority_dev/innerapi/roles/delRole', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = deleteSuccess
})


router.post('/authority_dev/innerapi/roles/addRolePermissionList', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = addSuccess2
})

router.post('/authority_dev/innerapi/roles/copyRole', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = addSuccess3
})

router.post('/authority_dev/innerapi/permissions/addPermissionResourceList', async (ctx, next) => {
  // await ctx.render('index')
  // await ctx.redirect('/index.html')
  ctx.body = addSuccess4
})





router.post('/authority_dev/innerapi/roles/getRoleTree', async (ctx, next) => {
  
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
