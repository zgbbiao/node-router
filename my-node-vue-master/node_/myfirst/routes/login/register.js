const  { insert, find } = require ('../../tools/dbtools');
const router = require('koa-router')()

router.post('/login/register', async (ctx, next) => {
    console.log("/login/register");
    let body = ctx.request.body;
    let obj = {};
    obj.username = body.username;

    var obj2 = {};
    obj2.phone = body.phone;
    //先查询， 
    try {
        let findName = await find(obj);
        let findPhone = await find(obj2);
        let insertList = '';
        if (findName.length) {
            ctx.body = {
                message: '用户名已存在',
                status: 0
            }
        } else if (findPhone.length) {
            ctx.body = {
                message: '号码已被注册',
                status: 0
            }
        } else {
            let dbData = {
                age: '',
                avatar: '',
                gender: '',
                jurisdiction: '',
                logindate: [],
                memo: '',
                password: '',
                phone: '',
                token: '',
                username: ''
            }

            dbData = Object.assign(dbData, body);
            

            insertList = await insert(dbData);
            if (insert.length) {
                ctx.body = {
                    message: '注册成功',
                    status: 200
                }
            } else {
                ctx.body = {
                    message: '注册失败',
                    status: 0
                }
            }
        }
    } catch (err) {
        if ( err.toString()) {
            ctx.body = {
                status: 0,
                message: '查询时链接数据库失败',
                err: err
            }
        }
    }
})
module.exports = router