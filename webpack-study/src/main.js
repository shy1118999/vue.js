// 这是 main.js 是我们项目的JS入口文件

// 1. 引入 jQuery
// import ... from ... 是ES6中导入模块的方式
// 由于ES6的代码，浏览器解析不了。所以，会报错
import $ from 'jquery'
// const $ = require('jquery')

// webpack默认只能打卡处理 js 类型的文件，无法处理 非JS 类型的文件
// 1、如果想要处理 css文件，需要安装 npm install style-loader css-loader -D
// 2、在webpack.config.js这个配置文件里面，新增一个配置节点，叫做module，
// 他是一个对象，在里面有一个rules属性，这个数组中存放着所有第三方文件匹配和处理规则
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// webpack处理第三方问价类型规则
// 1、发现这个 要处理的不是JS文件，然后就去配置文件中查找有没有对应的第三方loader规则
// 2、如果能够找到对应的规则，就会调用对应的loader处理这个文件类型
// 3、在调用loader的时候，是从后向前调用的
// 4、当最后的loader 调用完毕，会把处理结果，直接交给webpack 打包合并

import 'bootstrap/dist/css/bootstrap.css'


// 在webpack中，默认只能处理一部分ES6语法的js
// 某些处理不了 需要第三方loader处理
// 安装babel
// 第一套包：cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// 第二套包：cnpm i babel-preset-env babel-preset-stage-0 -D
// 打卡webpack的配置文件，在module节点下的rules数组下，提那家爱一个新的匹配规则
// {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
// 注意：在配置babel的loader规则的时候，必须把node_modules目录，通过exclude排除掉
// 在项目的根目录中，新建一个叫 .babelrc 的Babel配置文件，这个配置文件，属于JSON格式
class Person{
    static info = {name:'zs',age:20}
}

let p1 = new Person();
console.log(Person.info)


$(function(){
    $('li:odd').css('backgroundColor','blue')
    $('li:even').css('backgroundColor',function(){
        return '#'+'007acc'
    })
})