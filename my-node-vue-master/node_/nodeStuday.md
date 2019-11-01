

#测试

## 编写可测试代码的几个原则

1. 单一原则：
- 如果一段代码功能越多， 编写单元测试就需要更多的断言， 然后推断它的输出。  最好的方式是解耦分离。 比如数据库链接 和数据库查询。

2. 接口抽象：
- 通过对程序代码进行接口抽象， 可以针对接口进行测试， 具体代码的实现变化不影响测试的编写。

3.层次分离
- 层次分离是单一职责的一种实现， 保证测试的可切入性， 分层测试。

## 单元测试介绍

1. 概念： 
- 单元测试主要包括： 断言， 测试框架， 测试用例， 测试覆盖率， Mock, 持续集成等几个方面。 异步代码， 还会有异步代码测试， js还有私有方法的测试。

2. 断言：
- 保证最小单元是否正常的检测方法。
- 断言中几种检测方法：

```
ok(): 判断结果是否为真。
equal(): 判断实际值与期望值是否相等;
notEqual(); 判断实际值与期望值是否不相等。
deepEqual(); 判断实际值与期望值是否深度相等（对象或数组的元素是否相等）。
notDeepEqual();  判断实际值与期望值是否不深度相等。
strictEqual(); -and实际值与期望值是否严格相等；
notStrictEqual(); 判断实际值与期望值是否不严格相等（相当于!==）。
throws(); 判断代码是否抛出异常；

nodesNotThrows(); 判断代码是否没有抛出异常；
ifError(); 判断实际值是否为一个价值（null, undefined, 0, '', false）, 如果实际值为真，则抛出异常；
```

3. 测试框架；
- Node原本内的代码， 一段断言检查失败， 就会抛出异常并停止整个应用。 好的方法为记录抛出的异常并继续执行程序，最后生成测试报告。
- 测试框架本身并不参与测试， 主要用于管理测试用例和生成测试报告， 提升测试用例的开发速度， 提高测试用例的可维护性和可读性。

4. 测试风格；
- TDD（测试驱动开发）
- BDD（行为驱动开发）；

- 以上两种的区别： 
 关注点不同： 
    关注功能是否被正确实现。 每个功能都具备对应的测试用例。适合自顶向下的设计方式；
 表达方式不同：
    偏向于功能说明书的风格；

5. mocha 测试框架；


 //BDD 风格；

/*四个钩子： 
before:   进入之前触发
after:  进入之后触发
beforeEach: 测试用例（it）执行前触发
afterEach: 测试用例执行后触发；

*/

```
describe('Array', function(){
    before(function() {
        //...
    })

    describe('#indexOf()', function() {
        it('should return -1 when not present', function(){   //测试用例；
            [1, 2, 3].indexOf(4).should.equal(-1);
        });
});
})


```

/// TDD 风格

// 钩子；
setup:  执行前
teardown: 执行后
```
suite('Array', function() {
    setup(function(){
        //...
    });

    suite('#indexOf()', function() {  //测试用例的促织；
        test('should return -1 when not present', function() {  //测试用例；
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});
```

- 测试用例可用原生方法； 可用可用采用扩展的断言库。 如 should.js expect chai等；

6. 测试报告；
- 命令

```
mocha --reporters;  //查看所有报告格式(默认dot)；

mocha -R <reporter> //采用指定测试报告格式；

json  //json格式； 多用于将结果传输给其他程序进行处理
Html-cov // 用于可视化地观察代码副高率。

```

7. 添加到包规范；

```
package.json
    "devDependencies" : {
        "mocha": "*"
    }
```

8. 测试用例。
- 一个行为或功能需要有完善的， 多方面的测试用例， 一个测试用例中包含至少一个断言。
- 一个测试用例最少需要通过正向测试和方向测试来保证测试对功能的覆盖。 下面是最基本的测试用例。
```
describe('#indexOf()', function() {
    
    it('should return -1 when not present', function() {
        [1, 2, 3].indexof(4).should.equal(-1);
    });
    
    it('should return index when present', function() {
        [1, 2, 3].indexOf(1).should.equal(0);
        [1, 2, 3].indexOf(2).should.equal(1);
    });
});
```

9. 异步测试

```
// args1: 测试用例标题；
// args2: 回调函数；
it('fs.readFile should be ok', function (done) {
    fs.readFile('file_path', 'utf-8', function (err, data) {
        should.not.exist(err);
        done(); //主动告知测试用例执行完毕， 并可以执行下面代码， 否则会超时报错；
    })
})
```
- 通过这个回调函数的形参长度来判断这个测试用例是否异步调用。 如果是异步， 会有done()注入作为实参。
- 

10. 超时执行

- Node的测试因为异步， 所以与其他语言有所不同。
- mocha的默认超时 2000ms;

```
it('async test', function (done) {
    setTimeout(done, 10000); // 模拟长时间的请求；
})；
```

- 命令；
mocha -t <ms> 设置所有用例的超时事件。
或； 在测试用例it中调用 this.timeout(ms)实现对单个用例的特殊设置；

```
it('should take less than 500ms', function (done) {
    this.timeout(500);
    setTimeout(done, 300);
});

///或在describe中给以下所有层级设置；

describe('a suite of tests', function() {
    this.timeout(500);
    it('should take less than 500ms', function(done) {
        setTimeout(done, 300);
    });

    it('should take less than 500ms as well', function (done) {
        setTimeout(done, 200);
    });
});
```

11. 测试覆盖率
- 不停给diamante添加测试用例， 会不断的覆盖代码的分支和不同情况。
- 测试覆盖率能概括性的给出整体的覆盖度。

```
exports.parseAsync = function (input, callback) {
    setTimeout(function () {
        var result;
        try {
            result = JSON.parse(input);
        } catch (e) {
            return callback(e);
        }
        callback(null, result);
    }, 10);
};

// 给上面代码添加部分测试用例；

describe('parseAsync', function() {
    it('parseAsync should ok', function (done) {
        lib.parseAsync('{"name": "JacksonTian"}', function (err, data) {
            should.not.exist(err);
            data.name.should.be.equal('JacksonTian');
            done();
        })
    })；

    // 补足一个异常；
    it('parseAsync should throw err', function (done) {
        lib.parseAsync('{"name": "JacksonTian"}', function (err, data) {
            should.exist(err);
            done();
        });
    });
});

```

12. 覆盖率工具； jscover模块；

- 安装
npm install jscover -g;

- 需求：
 遵循commonJS规范。
 放在lib目录；

 命令： jscove lib lib-cov 进行源代码的编译。
 jscove会将lib目录下的.js文件编译到Lib-cov目录下。
 解析后的代码开头存在_$jscoverage， 会在执行时统计每行代码被执行的次数， 是否被执行。

 - 区分原始代码与编译后的代码
 module.exports = process.env.LIB_COV ? require('./lib-cov/index') : require('./lib/index');
 运行测试代码时， 会设置一个LIB_COV的环境变量。 区分测试环境和正常环境；

 - 执行命令
 export LIB_COV = 1;
 mocha -R html1-cov > coverage.html

 - 流程：
 lib --> lib-cov ---> require() 测试 ----> 覆盖率；

 - jscove模块对前端的缺点
 需要java环境。

 13. blanket模块
 - 由js实现。
 - 编译代码过程是隐式的， 无需额外目录；
 
 mach --require blanket -R html-cov > coverage.html
- 无需配置环境变量；
 pagepack.json
 ```
    "scripts": {
        "blanket": {
            "patter": "eventproxy/lib"
        }
    }
 ```

 14. 模拟异常（mock）

也可以用beforeEach 和 afterEach() 为多个用例来定义；
```
describe('getConent', function () {
    var _readFileSync;
    before(function () {

        _readFileSync = fs.readFileSync;
        // 抛出异常，更改方法；
        fs.readFileSync = function (filename, encoding) {
            throw new Error('mock readFileSync error');
        };
    });
    // it(); // 执行抛出异常的方法；

    // 还原方法；
    after(function () {
        fs.readFileSync = _ readFileSync;
    })
})
```

//消息是否将异步模拟成同步；
```
fs.readFile = function (filename, encoding, callback) {
    callback(new Error('mock, readFile error'))
};

//正确方法； 尽量让Mock后的行为与原始行为保持一致。
fs.readFile = function (filename, encoding, callback) {
    process.nextTick(function () {
        callback(new Error('mock readFile error'));
    })
}
```
15. 私有方法的测试；

- 通过rewire模块， 访问私有变量；
- 只有通过exports 或 module.exports上的变量或方法才能被外部通过require()引用访问；

```
var limit = function (num) {
    return rum < 0 ?  0 : num;
};

测试用例如下；
it('limit should return success', function () {
    var lib = rewire('../lib/index.js');
    var litmit = lib.__get__('limit');
    litmit(10).should.be.equal(10);
});
原理是利用闭包的效果 封装exports.__get__ = fn； 和exports.__set__ = fn;

```
