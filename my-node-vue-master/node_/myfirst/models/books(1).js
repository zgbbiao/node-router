
let mongoose = require('../tools/mongod.js');
let Schema = mongoose.Schema;
let UserSchema = new Schema({
    author: { type: String },
    content: { type: String },
    createTime: { type: String },
    title: { type: String }
})
module.exports = mongoose.model('Books1', UserSchema);

