
const {insert, update, find, count } = require('../../tools/dbtools');
const router = require('koa-router')();
const config = require('../../config/config');
const jwt = require('jsonwebtoken'); //验证加密模块；
const { auth, setToken } = require('../../tools/authTools');

const userMap = {
    admin: {
      role: ['admin'],
      token: 'admin',
      introduction: '我是超级管理员',
      name: 'Super Admin',
      uid: '001'
    },
    editor: {
      role: ['editor'],
      token: 'editor',
      introduction: '我是编辑',
      name: 'Normal Editor',
      uid: '002'
  
  
    },
    developer: {
      role: ['develop'],
      token: 'develop',
      introduction: '我是开发',
      name: '工程师小王',
      uid: '003'
    }
  }

router.post('/userinfo', async (ctx, next) => {
    await auth(ctx, next).then( async (res) => {
        if (res.status === 200) {
            var select = {
                username: res.decoded.username,
                password: res.decoded.password
            }
           await find(select).then(res2 => {
                if (res2.length) {
                    let res2Copy= Object.create(res2[0]);
                    res2Copy.password = '';
                    ctx.body = {
                        status : 200,
                        message: '查询成功',
                        res: res2Copy
                    }
                } else {
                     ctx.body = {
                        message: '用户名错误',
                        status: 0
                    }
                }
            }).catch(err => {
                if (err) {
                    ctx.body = {
                        status : 0,
                        message: "出现异常",
                        err: err
                    }
                }
            })
        } else {
            ctx.body = res
        }
        
    }).catch((err) => {
        ctx.body = {
            message: 'token false',
            status: 0,
        }
    })
})
module.exports = router
