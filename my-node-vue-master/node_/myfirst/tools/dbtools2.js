let User = require("../models/user001");
let Books = require('../models/books');
class Tools {
    constructor(options) {
        this.nameArr = [ 'update', 'find', 'count', 'remove', 'save', 'findById', 'findByIdAndRemove'];
        let toolsKey = options.user || 'User';
        this.User = {};
        switch(toolsKey) {
            case 'User':
                this.User = User;
                break;
            case 'Books':
                this.User = Books;
                break;
            default :
                this.User = User;
                break;
        }
        this.tools = {};
        this.forName.call(this);
        this.setFN.call(this);
    };
    // 遍历名称；
    forName() {
        this.nameArr.forEach((item , index) => {
              this.addFN(item, this.setdbfn(item));
        })
    };
    // 添加方法；
    addFN(name, fn) {
        this.tools[name] = fn;
    };
    // 设置方法；
    setFN() {

        let getPage = (obj) => {
            var data = obj[0];
            let pageSize = data.pageSize || 10;
            let current = data.current || 1;
            let sort = data.sort || {};
            let condition = data.condition || {};
            let skipnum = (current - 1) * pageSize;
            return new Promise((resolve, reject) => {
                this.User.find(condition, obj[1]).skip(skipnum).limit(pageSize).sort(sort).exec((err, res) => {
                    if (err) {
                        console.error(` 数据库 getPage  error: ${err}`);
                        reject(err)
                    } else {
                        console.log(`数据：getPagetotal success : ${res.length}`);
                        this.User.count(condition, (err2, res2) => {
                            if (err) {
                                console.log(`数据：getPagetotal error : ${err2}`);
                                reject(err2)
                            } else {
                                console.log(`数据：getPagetotal success : ${res2}`);
                                var data2 = {
                                    res: res,
                                    status: 200,
                                    message: '查询成功',
                                    total: res2+1,
                                    current: current
                                }
                                resolve(data2);
                            }
                        })
                    }
                })
            })
        }
        
        this.addFN('getPage', getPage);
    }
    //多用方法；
    setdbfn(item) {
        return (obj) => {
            return new Promise( async (resolve, reject) => {
                // let { condition, beUpdate } = obj;
                if (obj.length  === 1) {   // 进行查询；
                    if (item === 'save') {
                        console.log( obj[0] );
                        let user = new this.User( obj[0] );
                        user[item](this.dbfnCall(resolve, reject, item));
                    } else {
                        this.User[item](obj[0], this.dbfnCall(resolve, reject, item));
                    }
                } else if (obj.length === 2) {  // 进行更新；
                    this.User[item](obj[0], obj[1], this.dbfnCall(resolve, reject));
                }
            })
        }
        
    };
    //多用方法回调；
    dbfnCall(resolve, reject, item) {
       return (err, res) => {
            if (err) {
                console.error(`${item}数据库， data Error: ${err};`);
                reject(err);
            } else {
                console.log(`${item}数据库, data Success: ${res.length};` );
                resolve(res);
            }
        }
    }
}

var userdb = new Tools({
    user: 'User'
});

var booksdb = new Tools({
    user: "Books"
})
module.exports  = {
    user: userdb.tools,
    books: booksdb.tools
} ; 


