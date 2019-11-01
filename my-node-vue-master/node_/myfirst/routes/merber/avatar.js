

  const router = require('koa-router')()
const  { insert, find, update } = require ('../../tools/dbtools');
const { auth } = require('../../tools/authTools');
const { uploadFile } = require('../../tools/upload');
// const path = require('path');


const inspect = require('util').inspect;
const path = require('path');
const o = require('os');
const fs = require('fs');
var Busboy = require('busboy');

// 使用 async 异步流程依赖模块；
router.post('/merber/avatar', async (ctx, next) => {
  // 上传文件请求处理
        let serverFilePath = path.join( __dirname, '../../public/upload/avatar' );
      //   // 上传文件事件
      let result = {};
      let dbupdate = {};
  try {
        result = await uploadFile( ctx, {
          fileName: '',
          path: serverFilePath,
          urlPath: ['upload', 'avatar']
        })
        if (result.status === 200) {
          var condition = {
            username: result.username
          }
          var obj = {
            avatar: result.url + Math.random()*10
          }
          dbupdate = update(condition, obj);
            ctx.body = result;
        } else {
          ctx.body = result
        }
      } catch (err) {
        if (err && Object.keys(err).length) {
          ctx.body = {
            status: 0,
            message: "出现异常",
            err: err
          }
        }
      }
        

})

module.exports = router
