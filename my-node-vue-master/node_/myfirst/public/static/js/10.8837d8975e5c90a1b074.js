webpackJsonp([10],{488:function(n,t,e){function r(n){a||(e(690),e(691),e(689))}var a=!1,o=e(8)(e(584),e(654),r,null,null);o.options.__file="E:\\wanpWWW\\node-vue-react-mongodb\\vue_\\src\\views\\login\\index.vue",o.esModule&&Object.keys(o.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),n.exports=o.exports},497:function(n,t,e){"use strict";function r(n){return/^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@\w+\.com$/i.test(n.trim())}function a(n,t){for(var e=0;e<t.length;e++)if(n===t[e])return!0;return!1}t.b=r,e.d(t,"a",function(){return o}),t.c=a;var o=function(n){return/^1[3-9]{1}[0-9]{9}/.test(n)}},584:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(497),a=e(39),o=(e.n(a),e(97)),i=o.a.setLogin;t.default={name:"login",data:function(){return{loginForm:{email:"user01@user.com",username:"user01",password:"123456",jurisdiction:""},loginRules:{email:[{required:!0,trigger:"blur",validator:function(n,t,a){e.i(r.b)(t)?a():a(new Error("请输入正确的合法邮箱"))}}],username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur",validator:function(n,t,e){t.length<6?e(new Error("密码不能小于6位")):e()}}],phone:[{required:!0,trigger:"blur",validator:function(n,t,a){e.i(r.a)(t)?a():a(new Error("请输入正确的手机号码"))}}],jurisdiction:[{required:!0,trigger:"blur",message:"请输入用户类型"}],gender:[{require:!0,trigger:"blur",message:"请选择性别"}]},registerFrom:{username:"admin@01.com",password:"123456",jurisdiction:"teacher-normal",phone:"18816780001",gender:"1",age:"2017-11-10"},loading:!1,showDialog:!1,jurisdictionList:[{value:"admin",label:"管理员"},{value:"teacher-normal",label:"普通用户"}],jurisdictionListRegister:[{value:"teacher-normal",label:"普通用户"}]}},mounted:function(){this.setTriangle()},methods:{handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;n.reqLogin()})},reqLogin:function(){var n=this;this.loading||(this.loading=!0,this.vFetch.login(this.loginForm).then(function(t){200==t.status?(n.$Message.success(t.message),i(t),n.$router.push({path:"/"})):n.$Message.error(t.message),n.loading=!1}).catch(function(t){n.$Message.warning("发生异常: "+t),n.loading=!1}))},afterQRScan:function(){},setTriangle:function(){function n(){clearTimeout(e),a.width=window.innerWidth,a.height=window.innerHeight,r=a.width>a.height?a.height:a.width,r/=200}function t(){var n,e,i,s,l,d,g,c,m,p,f,u,b,h,x,k,w;for(o.globalCompositeOperation="source-over",o.fillStyle="rgb(0,0,0)",o.fillRect(0,0,a.width,a.height),o.globalCompositeOperation="lighter",i=(new Date).getTime()/31,f=1+.8*Math.sin(i/17),b=4+3*Math.sin(i/29),h=2+1.5*Math.sin(i/31),w=Math.sin(i/37),s=200,c=100*r,m=Math.pow(3,.5)/3*c,l=a.width/2,d=a.height/2,n=0;n<s;n++)for(g=0+(n+1)/s*1,g*=g,p=i/87+(Math.sin(n/s*5+i/49)/5+Math.sin(n/s*7-i/53)/7)*f,e=0;e<3;e++)o.save(),o.translate(l,d),o.rotate((p+2*Math.PI/3*e)%(2*Math.PI)),o.translate(-l,-d),u=Math.sin(i/73-g*b+e*w)*h+.5,k=0,u<0&&(u=0,k=1),u>1&&(u=1,k=1),o.fillStyle=o.strokeStyle="hsla("+(244+140*u|0)%360+",60%,60%,0.5)",k||(x=.5-Math.cos(u*Math.PI*2)/2,x*=20*g*r),u*=2*Math.PI/6*5,o.translate(l+c*g,d-m*g),o.rotate(u),o.translate(-l-c*g,-(d-m*g)),o.beginPath(),o.lineTo(l-c*g,d-m*g),o.lineTo(l+c*g,d-m*g),o.stroke(),k||(o.beginPath(),o.arc(l-c*g,d-m*g,x,0,2*Math.PI,0),o.fill()),o.restore();requestAnimationFrame(t)}var e,r,a,o;a=document.getElementsByTagName("canvas")[0],o=a.getContext("2d"),window.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(n,200)},!1),n(),t()},goReigster:function(){var n=this.$refs.register.$el;n.classList.add("animate-roteate-180-0"),n.classList.remove("animate-roteate180");var t=document.querySelector(".login-form-box");t.classList.add("animate-roteate180"),t.classList.remove("animate-roteate-180-0")},goLogin:function(){var n=this.$refs.loginForm.$el,t=this.$refs.register.$el;n.classList.remove("animate-roteate180"),n.classList.add("animate-roteate-180-0"),t.classList.add("animate-roteate180"),t.classList.remove("animate-roteate-180-0")},handRegister:function(){var n=this;this.$refs.register.validate(function(t){if(!t)return n.$Message.error("请填写表单"),!1;n.reqRegister()})},reqRegister:function(){var n=this;this.loading||(this.loading=!0,this.vFetch.register(this.registerFrom).then(function(t){n.loading=!1,n.$Message.info(t.message),200==t.status&&(n.loginForm=n.registerFrom,n.reqLogin())}).catch(function(t){n.$Message.error(t.toString()),n.loading=!1}))}}}},617:function(n,t,e){t=n.exports=e(21)(!1),t.push([n.i,"\n.login-title {\n  text-align: center;\n  color: red;\n}\n.register-title {\n  text-align: center;\n  color: red;\n}\n.tips {\n  font-size: 18px;\n  color: darkcyan;\n  margin-bottom: 5px;\n}\n.login-container {\n  height: 100vh;\n  background-color: #2d3a4b;\n}\n.login-container input:-webkit-autofill {\n    -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;\n    -webkit-text-fill-color: #fff !important;\n}\n.login-container input {\n    background: transparent;\n    border: 1px solid #2d8cf0;\n    -webkit-appearance: none;\n    border-radius: 3px;\n    padding: 12px 5px 12px 15px;\n    color: fuchsia;\n    height: 47px;\n    font-size: 20px;\n}\n.login-container .el-input {\n    display: inline-block;\n    height: 47px;\n    width: 85%;\n}\n.login-container .svg-container {\n    padding: 6px 5px 6px 15px;\n    color: #889aa4;\n}\n.login-container .title {\n    font-size: 26px;\n    font-weight: 400;\n    color: #eeeeee;\n    margin: 0px auto 40px auto;\n    text-align: center;\n    font-weight: bold;\n}\n.login-container .login-form {\n    position: absolute;\n    left: 0;\n    right: 0;\n    z-index: 10;\n    width: 400px;\n    padding: 35px 35px 15px 35px;\n    margin: 120px auto;\n    background: transparent;\n}\n.login-container .el-form-item {\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n    color: #454545;\n}\n.login-container .forget-pwd {\n    color: #fff;\n}\n.ivu-form-item-content {\n  background: transparent;\n}\n",""])},618:function(n,t,e){t=n.exports=e(21)(!1),t.push([n.i,"\n.login-container a{color:#0078de;\n}\n#canvascontainer{\n  position: absolute;\n  top: 0px;\n}\n.wz-input-group-prepend{\n  background-color: #141a48;\n   border: 1px solid #2d8cf0;\n   border-right: none;\n   color:  #2d8cf0;\n}\n/* 将注册页进行180度翻转； */\n.register-form{\n    /* backface-visibility: hidden; */\n  /* -webkit-backface-visibility: hidden; */\n  transform-style: preserve-3d;\n  perspective: 500;\n  /* transition: transform 2s; */\n  /* animation: anrotate 5s infinite; */\n  /* animation: animate-rotate180 7s ease-in-out alternate 1; */\n}\n.login-form-box{\n}\n.register-form-box{\n  transform: rotateY(180deg);\n    backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\n.animate-roteate180{\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  /* alternate */\n  animation: animate-rotate180 3s linear forwards 1;\n}\n.animate-roteate-180-0{\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  animation: animate-rotate-180-0 3s linear forwards 1;\n}\n.animate-roteate360{\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  /* animation: animate-rotate360 3s linear normal 1; */\n}\n@keyframes animate-rotate180 {\n0% {\n    transform: rotateY(0);\n    -webkit-transform: rotateY(0);\n}\n100% {\n    transform: rotateY(180deg);\n    -webkit-transform: rotateY(180deg);\n}\n}\n@keyframes animate-rotate-180-0 {\n0% {\n        transform: rotateY(180deg);\n    -webkit-transform: rotateY(180deg);\n}\n100% {\n    transform: rotateY(0);\n    -webkit-transform: rotateY(0);\n}\n}\n@keyframes animate-rotate360 {\n0% {\n    transform: rotateY(0);\n    -webkit-transform: rotateY(0);\n}\n50% {\n    transform: rotateY(360deg);\n    -webkit-transform: rotateY(360deg);\n}\n100% {\n    transform: rotateY(0deg);\n    -webkit-transform: rotateY(0deg);\n}\n}\n\n",""])},619:function(n,t,e){t=n.exports=e(21)(!1),t.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 超级三角  */\n* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\ncanvas {\n    display: block;\n}\n\n  /* 可爱的猫 */\nbody {\n    width: 100%;\n    height: 100%;\n    background-color: #473829;\n}\n.cat {\n    position: absolute;\n    top: 100px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    width: 40%;\n    height: 0;\n    padding-bottom: 35%;\n    margin: auto;\n    background-color: #FFF7EA;\n    border-radius: 100%;\n    box-shadow: inset rgba(0, 0, 0, 0.05) -4px -6px 0 4px, inset rgba(0, 0, 0, 0.05) -8px -10px 0 8px, rgba(0, 0, 0, 0.2) 4px 6px 0 2px, rgba(0, 0, 0, 0.1) 4px 10px 0 6px;\n    -webkit-animation: head-turn 7s ease-in-out alternate infinite;\n            animation: head-turn 7s ease-in-out alternate infinite;\n            margin: 0 auto;\n}\n.ear {\n    position: absolute;\n    top: -15%;\n    width: 45%;\n    height: 50%;\n    background: #FFF7EA;\n    z-index: -1;\n}\n.ear:before {\n    content: "";\n    position: absolute;\n    bottom: 22%;\n    width: 60%;\n    height: 60%;\n    background: #f4e0dc;\n}\n.ear:after {\n    content: "";\n    position: absolute;\n    bottom: 15%;\n    width: 60%;\n    height: 40%;\n    background: #FFF7EA;\n    border-radius: 100%;\n}\n.ear.left {\n    left: -5%;\n    border-radius: 100% 10%;\n    -webkit-transform: rotate(-70deg);\n            transform: rotate(-70deg);\n    box-shadow: inset #FFF7EA 6px -12px 0 6px, inset rgba(0, 0, 0, 0.05) -8px -4px 0 2px, inset rgba(0, 0, 0, 0.05) -4px 10px 0 4px;\n}\n.ear.left:before {\n    left: 18%;\n    border-radius: 100% 10%;\n    box-shadow: inset rgba(0, 0, 0, 0.05) 2px -10px 0 4px;\n}\n.ear.left:after {\n    left: 12%;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n}\n.ear.right {\n    right: -5%;\n    border-radius: 10% 100%;\n    -webkit-transform: rotate(70deg);\n            transform: rotate(70deg);\n    box-shadow: inset rgba(0, 0, 0, 0.05) 4px 8px 0 2px, inset rgba(0, 0, 0, 0.05) 4px 14px 0 4px;\n}\n.ear.right:before {\n    right: 18%;\n    border-radius: 10% 100%;\n    box-shadow: inset rgba(0, 0, 0, 0.05) -2px 6px 0 4px;\n}\n.ear.right:after {\n    right: 12%;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n.eye {\n    position: absolute;\n    top: 20%;\n    width: 28%;\n    height: 40%;\n    background: black;\n}\n.eye:before {\n    content: "";\n    position: absolute;\n    top: 25%;\n    right: 5%;\n    width: 25%;\n    height: 20%;\n    background-color: #FFF7EA;\n    border-radius: 100%;\n    -webkit-animation: twitch 0.1s linear infinite alternate;\n            animation: twitch 0.1s linear infinite alternate;\n}\n.eye:after {\n    content: "";\n    position: absolute;\n    top: 45%;\n    right: 28%;\n    width: 10%;\n    height: 8%;\n    background-color: #FFF7EA;\n    border-radius: 100%;\n    -webkit-animation: twitch 0.12s linear alternate infinite;\n            animation: twitch 0.12s linear alternate infinite;\n}\n.eye.left {\n    left: 15%;\n    border-radius: 100% 100% 80% 100%;\n    box-shadow: inset #FFF7EA 6px 0 0 0px, inset #67523c 14px -2px 0 0, black -2px 1px 0 1px;\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n}\n.eye.left:before {\n    right: 8%;\n}\n.eye.left:after {\n    right: 30%;\n}\n.eye.right {\n    right: 15%;\n    border-radius: 100% 100% 100% 80%;\n    box-shadow: inset #FFF7EA -6px 0 0 0px, inset #67523c -14px -2px 0 0, black 2px 1px 0 1px;\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n}\n.eye.right:before {\n    left: 8%;\n}\n.eye.right:after {\n    left: 30%;\n}\n.lash {\n    position: absolute;\n    top: 2%;\n    width: 12%;\n    height: 16%;\n    border-radius: 100%;\n}\n.lash:after {\n    content: "";\n    position: absolute;\n    top: 30%;\n    width: 60%;\n    height: 80%;\n    border-radius: 100%;\n}\n.left .lash {\n    left: -2%;\n    box-shadow: black -4px 2px 0;\n    -webkit-transform: rotate(-50deg);\n            transform: rotate(-50deg);\n}\n.left .lash:after {\n    left: -115%;\n    box-shadow: black -3px 4px 0;\n}\n.right .lash {\n    right: -2%;\n    box-shadow: black 4px 2px 0;\n    -webkit-transform: rotate(50deg);\n            transform: rotate(50deg);\n}\n.right .lash:after {\n    right: -115%;\n    box-shadow: black 3px 4px 0;\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n}\n.shine {\n    position: absolute;\n    bottom: 15%;\n    width: 35%;\n    height: 15%;\n    background: #FFF7EA;\n}\n.left .shine {\n    left: 15%;\n    border-radius: 100% 20%;\n}\n.right .shine {\n    right: 15%;\n    border-radius: 20% 100%;\n}\n.nose {\n    position: absolute;\n    top: 60%;\n    right: 0;\n    left: 0;\n    margin: auto;\n    background: #cbb8a4;\n    width: 8%;\n    height: 6%;\n    border-radius: 100% 100% 100px 100px;\n    box-shadow: inset rgba(0, 0, 0, 0.05) -4px -2px 0 2px, rgba(0, 0, 0, 0.1) 2px 2px 0 0;\n    z-index: 2;\n}\n.mouth {\n    position: absolute;\n    right: 0;\n    bottom: 12%;\n    left: 0;\n    margin: auto;\n    width: 15%;\n    height: 15%;\n    background: #FF0066;\n    border-radius: 100%;\n    z-index: 1;\n    box-shadow: inset rgba(0, 0, 0, 0.6) 0 16px 0 0, inset rgba(0, 0, 0, 0.2) 0 20px 0 2px, inset rgba(0, 0, 0, 0.05) 0 20px 0 6px;\n    -webkit-animation: breathe-in 2s ease-out infinite;\n            animation: breathe-in 2s ease-out infinite;\n}\n.mouth:before, .mouth:after {\n    content: "";\n    position: absolute;\n    top: -35%;\n    width: 75%;\n    height: 65%;\n    background: #FFF7EA;\n    border-radius: 100%;\n    -webkit-animation: breathe-out 2s ease-out infinite;\n            animation: breathe-out 2s ease-out infinite;\n}\n.mouth:before {\n    left: -22%;\n    box-shadow: rgba(0, 0, 0, 0.8) -1px 3px 0;\n}\n.mouth:after {\n    right: -22%;\n    box-shadow: rgba(0, 0, 0, 0.8) 1px 3px 0;\n}\n@-webkit-keyframes twitch {\nto {\n      -webkit-transform: translate(2px, 2px);\n              transform: translate(2px, 2px);\n}\n}\n@keyframes twitch {\nto {\n      -webkit-transform: translate(2px, 2px);\n              transform: translate(2px, 2px);\n}\n}\n@-webkit-keyframes head-turn {\n0% {\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n}\n15% {\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n}\n25% {\n      -webkit-transform: rotate(4deg);\n              transform: rotate(4deg);\n}\n40% {\n      -webkit-transform: rotate(4deg);\n              transform: rotate(4deg);\n}\n50% {\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n}\n60% {\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n}\n70% {\n      -webkit-transform: rotate(-3deg);\n              transform: rotate(-3deg);\n}\n75% {\n      -webkit-transform: rotate(-2deg);\n              transform: rotate(-2deg);\n}\n85% {\n      -webkit-transform: rotate(-2deg);\n              transform: rotate(-2deg);\n}\n95% {\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n}\n}\n@keyframes head-turn {\n0% {\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n}\n15% {\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n}\n25% {\n      -webkit-transform: rotate(4deg);\n              transform: rotate(4deg);\n}\n40% {\n      -webkit-transform: rotate(4deg);\n              transform: rotate(4deg);\n}\n50% {\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n}\n60% {\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n}\n70% {\n      -webkit-transform: rotate(-3deg);\n              transform: rotate(-3deg);\n}\n75% {\n      -webkit-transform: rotate(-2deg);\n              transform: rotate(-2deg);\n}\n85% {\n      -webkit-transform: rotate(-2deg);\n              transform: rotate(-2deg);\n}\n95% {\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n}\n}\n@-webkit-keyframes breathe-out {\n50% {\n      -webkit-transform: translateY(2px);\n              transform: translateY(2px);\n}\n100% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n}\n}\n@keyframes breathe-out {\n50% {\n      -webkit-transform: translateY(2px);\n              transform: translateY(2px);\n}\n100% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n}\n}\n@-webkit-keyframes breathe-in {\n50% {\n      -webkit-transform: translateY(-4px);\n              transform: translateY(-4px);\n}\n100% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n}\n}\n@keyframes breathe-in {\n50% {\n      -webkit-transform: translateY(-4px);\n              transform: translateY(-4px);\n}\n100% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n}\n}\n/* 可爱的猫 end; */\n',""])},654:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login-container",staticStyle:{"background-color":"#141a48",margin:"0px",overflow:"hidden"}},[e("div",{ref:"can",attrs:{id:"canvascontainer"}}),n._v(" "),e("Form",{ref:"loginForm",staticClass:"card-box login-form login-form-box",attrs:{autoComplete:"on",model:n.loginForm,rules:n.loginRules}},[e("h2",{staticClass:"login-title"},[n._v("登錄")]),n._v(" "),e("Form-item",{attrs:{prop:"username"}},[e("Input",{attrs:{type:"text",placeholder:"请输入用户名",autoComplete:"on"},model:{value:n.loginForm.username,callback:function(t){n.loginForm.username=t},expression:"loginForm.username"}},[e("Icon",{attrs:{type:"ios-person-outline"},slot:"prepend"})],1)],1),n._v(" "),e("Form-item",{attrs:{prop:"password"}},[e("Input",{attrs:{type:"password",placeholder:"请输入密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13))return null;n.handleLogin(t)}},model:{value:n.loginForm.password,callback:function(t){n.loginForm.password=t},expression:"loginForm.password"}},[e("Icon",{attrs:{type:"ios-locked-outline"},slot:"prepend"})],1)],1),n._v(" "),e("Form-item",{attrs:{prop:"jurisdiction"}},[e("Select",{attrs:{placeholder:"请输入用户类型"},model:{value:n.loginForm.jurisdiction,callback:function(t){n.loginForm.jurisdiction=t},expression:"loginForm.jurisdiction"}},n._l(n.jurisdictionList,function(t){return e("Option",{key:t.value,attrs:{value:t.value}},[n._v(n._s(t.label))])}))],1),n._v(" "),e("Form-item",[e("Button",{attrs:{type:"primary",long:""},on:{click:function(t){n.handleLogin("loginForm")}}},[n._v("登录")])],1),n._v(" "),e("div",{on:{click:n.goReigster}},[e("div",{staticStyle:{width:"330px",height:"32px",margin:"0 auto","background-color":"#2d8cf0",color:"#fff","text-align":"center","line-height":"32px","border-radius":"5px"}},[n._v("快速註冊")])]),n._v(" "),e("div",{staticClass:"tips"},[n._v("普通用户账号为:user01 密码123456， 仅支持预览")]),n._v(" "),e("div",{staticClass:"tips"})],1),n._v(" "),e("Form",{ref:"register",staticClass:"card-box login-form register-form-box ",attrs:{autoComplete:"on",model:n.registerFrom,rules:n.loginRules}},[e("h2",{staticClass:"register-title"},[n._v("注册")]),n._v(" "),e("Form-item",{attrs:{prop:"username"}},[e("Input",{attrs:{type:"text",placeholder:"请输入用户名",autoComplete:"on"},model:{value:n.registerFrom.username,callback:function(t){n.registerFrom.username=t},expression:"registerFrom.username"}},[e("Icon",{attrs:{type:"ios-person-outline"},slot:"prepend"})],1)],1),n._v(" "),e("Form-item",{attrs:{prop:"password"}},[e("Input",{attrs:{type:"password",placeholder:"请输入密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13))return null;n.handleLogin(t)}},model:{value:n.registerFrom.password,callback:function(t){n.registerFrom.password=t},expression:"registerFrom.password"}},[e("Icon",{attrs:{type:"ios-locked-outline"},slot:"prepend"})],1)],1),n._v(" "),e("Form-item",{attrs:{prop:"phone"}},[e("Input",{attrs:{type:"text",placeholder:"请输入手机号码"},nativeOn:{keyup:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13))return null;n.handleLogin(t)}},model:{value:n.registerFrom.phone,callback:function(t){n.registerFrom.phone=t},expression:"registerFrom.phone"}},[e("Icon",{attrs:{type:"ios-locked-outline"},slot:"prepend"})],1)],1),n._v(" "),e("FormItem",{attrs:{label:"性别",prop:"gender"}},[e("RadioGroup",{model:{value:n.registerFrom.gender,callback:function(t){n.registerFrom.gender=t},expression:"registerFrom.gender"}},[e("Radio",{attrs:{label:"1"}},[n._v("男")]),n._v(" "),e("Radio",{attrs:{label:"0"}},[n._v("女")])],1)],1),n._v(" "),e("FormItem",{attrs:{label:"出生日期",prop:"age"}},[e("DatePicker",{attrs:{type:"date",placeholder:"请选择出生日期"},model:{value:n.registerFrom.age,callback:function(t){n.registerFrom.age=t},expression:"registerFrom.age"}})],1),n._v(" "),e("Form-item",{attrs:{prop:"jurisdiction"}},[e("Select",{attrs:{placeholder:"请输入用户类型"},model:{value:n.registerFrom.jurisdiction,callback:function(t){n.registerFrom.jurisdiction=t},expression:"registerFrom.jurisdiction"}},n._l(n.jurisdictionListRegister,function(t){return e("Option",{key:t.value,attrs:{value:t.value}},[n._v(n._s(t.label))])}))],1),n._v(" "),e("Form-item",[e("Button",{attrs:{type:"primary",long:""},on:{click:n.handRegister}},[n._v("註冊")])],1),n._v(" "),e("div",{on:{click:n.goLogin}},[e("div",{staticStyle:{width:"330px",height:"32px",margin:"0 auto","background-color":"#2d8cf0",color:"#fff","text-align":"center","line-height":"32px","border-radius":"5px"}},[n._v("返回登錄")])])],1),n._v(" "),e("canvas"),n._v(" "),n._m(0)],1)},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"cat",staticStyle:{display:"none"}},[e("div",{staticClass:"ear left"}),n._v(" "),e("div",{staticClass:"ear right"}),n._v(" "),e("div",{staticClass:"eye left"},[e("div",{staticClass:"lash"}),n._v(" "),e("div",{staticClass:"shine"})]),n._v(" "),e("div",{staticClass:"eye right"},[e("div",{staticClass:"lash"}),n._v(" "),e("div",{staticClass:"shine"})]),n._v(" "),e("div",{staticClass:"nose"}),n._v(" "),e("div",{staticClass:"mouth"})])}]},n.exports.render._withStripped=!0},689:function(n,t,e){var r=e(617);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);e(22)("0bff9e20",r,!1)},690:function(n,t,e){var r=e(618);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);e(22)("43ffb33d",r,!1)},691:function(n,t,e){var r=e(619);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);e(22)("25dd7cdc",r,!1)}});
//# sourceMappingURL=10.8837d8975e5c90a1b074.js.map