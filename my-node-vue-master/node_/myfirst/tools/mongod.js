let mongoose = require('mongoose');
let surface = "itcast;"
let DB_URL = 'mongodb://localhost:27017/' + surface;

//链接

mongoose.connect(DB_URL);

// 链接成功

mongoose.connection.on('connected', () => {
    console.log("链接数据库成功+ 当前数据表: " + surface);
})

// 链接异常

mongoose.connection.on("err", (err) => {
    console.error("链接数据库时发现异常， 数据表 : " +surface +"; 异常为： " + err );
});

//断开链接；
mongoose.connection.on('disconnected', () => {
    console.log( `断开对数据表 ${surface} 的链接` );
});

module.exports = mongoose;

