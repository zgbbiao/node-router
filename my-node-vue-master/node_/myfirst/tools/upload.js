const inspect = require('util').inspect;
const path = require('path');
const os = require('os');
const fs = require('fs');
var Busboy = require('busboy');
/*
* 通过创建文件目录；
* @param {string} dirname 目录结地址；
* @return {boolean}  创建目录结果；
*/

const isMkdir = (dirname) => {
    if (fs.existsSync(dirname)) {  //判断文件是否存在
        return true
    } else { // 如果是路径；
        if (isMkdir(path.dirname(diranme))) {  //path.dirname(diranme) 返回一个目录名；
            fs.mkdirSync(dirname) // 创建目录；
            return true;
        }// 如果不存在 则返回false;
    }
}

/**
 * 获取上传文件的后缀名
 * @param  {string} fileName 获取上传文件的后缀名
 * @return {string}          文件后缀名
 */

 const getSuffixName = (fileName) => {
     let nameList = fileName.split('.');
     return nameList[nameList.length - 1];
 }

 /**
 * 上传文件
 * @param  {object} ctx     koa上下文
 * @param  {object} options 文件上传参数 fileName文件名， path文件存放路径
 * @return {promise}         
 */

const  uploadFile = (ctx, options) => {
    let req = ctx.req;
    let res = ctx.res;
    var busboy = new Busboy({ headers: req.headers });

    let ofileName = options.fileName;
    let opath = options.path;
    let saveFile = '';
    let result = { status: 0,  message: '上传错误', url: '' };
    let ourlPath = options.urlPath;
    let urlPath = '';
    return new Promise((resolve, reject) => {
    /*
    @params:  fieldname : 文件名； (aa)
    @ file  filename  带后缀名的文件； (aa.png)
    @ encoding：  编码大小bit
    @  mimetype 类型（image/png）
    */
    // 文件上传流事件；
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      if (fieldname) {
          console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
          filename = Math.random() + filename;
          saveFile = path.join(opath, filename);
          file.on('data', function(data) {
            console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
            if (!ofileName) {
                ofileName = filename;
            }
            // saveFile = path.join(os.tmpDir(), path.basename(filename))
            console.log(saveFile)
          });
          file.pipe(fs.createWriteStream(saveFile))
          
          file.on('end', function() {
            console.log('File [' + fieldname + '] Finished');
            ourlPath.forEach((item, i) => {
                if (!urlPath) {
                    urlPath = path.join(item);
                } else {
                    urlPath = path.join(urlPath, item);
                }
            })
            urlPath = path.join( `${ctx.host}` , urlPath,   ofileName);
            urlPath = urlPath.split('\\').join('/');
            urlPath = `${ctx.protocol}://${urlPath}`;
            result = {
                status: 200,
                message: '上传成功',
                url: `${urlPath}`,
                username: fieldname
            }
            resolve(result)
          });
      } else {
        result.message='用户名不存在';
        resolve(result)
      }
    });
    // 为找到的每个新的非文件字段发射
    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      console.log('Field [' + fieldname + ']: value: ' + inspect(val) + `fieldnameTruncated:${fieldnameTruncated}; valTruncated: ${valTruncated}; `);
    });
    busboy.on('finish', function() {
      console.log('Done parsing form!');
      resolve(result)
    });
    // 解析错误事件
    busboy.on('error', function(err) {
        console.log('文件上出错')
        reject(result)
    })
  
    req.pipe(busboy);
})
}


module.exports =  {
    uploadFile
  }