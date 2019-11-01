let User = require("../models/user001");

class Tools {
    constructor(fnclass) {
        this.fnclass = fnclass;
        this.sql = this.sql.bind(this); //如果方法在外面单独拿出来使用， this会指向外部当前的作用域， 因此需要在这里绑定this；
        this.insert = this.insert.bind(this);
        this.update  = this.update.bind(this);
        this.getPage = this.getPage.bind(this);
    };
    // count  find;
    sql(condition) {
        return new Promise( (resolve, reject) => {
            User[this.fnclass]( condition, (err, res) => {
            // 这里的this 依然是绑定后的构造函数； 
                if (err) {
                    console.error(`${this.fnclass}数据库， data Error: ${err};`);
                    reject(err);
                }
                else {
                    console.log(`${this.fnclass}数据库, data Success: ${res.length};` );
                    resolve(res);
                }
            } )
        } )
    };

    // 插入（已存在或不存在）的数据；
    insert(obj) {
        if (!obj) return;
        return new Promise((resolve, reject) => {
            let user = new User( obj );
            user.save( (err, res) => {
                if(err) {console.error(`数据插入错误： ${err}` ); reject(err) }
                else {
                    console.log(`插入数据成功：${res.length} `);
                    resolve(res);
                }
            })
        })
    };
// 修改数据
    update( condition, beUpdate ) {
        if ( !(condition && beUpdate) ) return ;
        return new Promise((resolve, reject) => {
            User.update( condition, beUpdate, (err, res) => {
                if (err) { 
                    console.error(` 数据库 update error: ${err}`);
                    reject(err)
                } else { 
                    console.log(`修改数据：Update success : ${res.length}`);
                    resolve( res );
                };
            } );
        })
    };
    getPage(obj){
        let pageSize =  obj.pageSize || 10 ;
        let currentPage = obj.currentPage || 1 ;
        let sort = obj.sort || {}  //排序 ， 按登录时间；
        let condition = obj.condition || {}; //条件；
        var skipnum = (currentPage - 1) * pageSize; //跳过数；
        return new Promise((resolve, reject) => {
            User.find(condition).skip(skipnum).limit(pageSize).sort(sort).exec((err, res) => {
                if (err) {
                    console.error(` 数据库 getPage  error: ${err}`);
                    reject(err)
                } else {
                    console.log(`数据：getPage success : ${res.length}`);
                    User.count(condition, (err2, res2) => {
                        if (err) {
                            console.log(`数据：getPagetotal error : ${err2}`);
                            reject(err2)
                        } else {
                            console.log(`数据：getPagetotal success : ${res2}`);
                            var data = {
                                res: res,
                                status: 200,
                                message: '查询成功',
                                total: res2,
                                page: currentPage
                            }
                            resolve(data);
                        }
                    })
                }
            })
        })
    }
}
let SAVE = 'save',
UPDATE = 'update',
FIND = 'find',
COUNT = 'count';
let REMOVE = 'remove';

let fnfind = new Tools(FIND);
let fncount = new Tools(COUNT);
let fnremove = new Tools(REMOVE);
const find = fnfind.sql; // 查询
const count = fncount.sql; 
const update = fncount.update;
const insert = fncount.insert;
const remove = fnremove.sql;
const getPage = fncount.getPage;
module.exports  = {
    insert,
    update,
    find,
    count,
    remove,
    getPage
}


