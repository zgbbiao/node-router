// import { mongoose } from 'mongoose';
const jwt = require('jsonwebtoken');  
const util = require('util');
const jwtKoa = require('koa-jwt');
const {SECRET, TOKEN} = require('../config/config');
// const verify = util.promisify(jwt.verify) //解密；
const app = require('../app');
const { find } = require('./dbtools');
let _TOKEN = "";

//验证；
const auth = async ( ctx, next ) => {
    return new Promise((resolve, reject) => {
        // var token = ctx.query.body.token || req.query.token || ctx.request.headers['x-access-token'];
        let token = ctx.request.body.token //获取jwt；
        if (!token) {
            ctx.body = {
                message: 'token 不存在',
                status: 0,
            }
        }
        // 验证；
        jwt.verify( token, SECRET, async (err, decoded) => {
            // err
            // decoded undefined

            if (err) {
                resolve({
                    message: 'token 错误, 请重新登录',
                    status: 0,
                    err,
                    decoded
                })
            } else {
                let date = Date.now()
                // 如果没有过期；
                if(decoded.exp*1000 <= date) {
                    resolve({
                        message: 'token 过期',
                        status: 0,
                    })
                } else {
                    //如果token的用户名与传过来的用户名相等
                    var obj = {
                        username: decoded.username,
                        password: decoded.password
                    }
                    await find(obj).then(res => {
                        if (res.length) {
                            let updateToken =  jwt.sign(obj, SECRET, {expiresIn: 60*60}) //token签名， 设置有效期；
                            resolve({
                                decoded,
                                message: 'token 正确',
                                status: 200,
                                token: updateToken
                            })
                        } else {
                            reject({
                                message: 'token 错误',
                                status: 0,
                            })
                        }
                    }).catch(err => {
                        reject({
                            err: err,
                            status: 0,
                        })
                    })
                }
            } 
          })
    })

};
//设置token;
 const setToken = async (ctx, next) => {
     var body = ctx.request.body;

     return new Promise((resolve, reject) => {
        if( body ){  
            //生成token;
            const token =  jwt.sign(body, SECRET, {expiresIn: 60*60}) //token签名， 设置有效期；
            _TOKEN = token;
            resolve({token})
     } else {
        reject()
     }
 });
 };

module.exports = {
    auth,
    setToken
}