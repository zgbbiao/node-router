let mongoose = require("../tools/mongod.js");
let Schema = mongoose.Schema;
let UserSchema = new Schema({
    username: { type: String },  //用户账号
    password: { type: String },  //密码
    age: { type: String },  //年龄
    gender: { type: String },   //性别
    phone: { type: Number },    //手机号码
    logindate: [],   //最近登录
    email: { type: String },
    jurisdiction: { type: String }, //用户权限
    gender: { type: String },    // 1 男， 0 女；
    avatar: { type: String } ,//头像
    memo: { type: String } ,    // 备注
    token: { type: String }     //token；
});

module.exports = mongoose.model('User001', UserSchema);