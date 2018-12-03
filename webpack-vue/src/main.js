// 入口文件

// 如何在webpack构建的项目中，使用Vue进行开发

// 在webpack尝试使用Vue
// 注意：在webpack中，使用import Vue from "vue"导入Vue构造函数，功能不全，只提供了runtime-only的方式，并没有提供 像网页中那样的使用方式
// import Vue from "vue"
import Vue from "../node_modules/vue/dist/vue.js"
// import Vue from "vue/dist/vue.js"


// let login = {
//     template:"<h1>这是login组件，是使用网页中的形式创建出来的</h1>"
// }

// 1、导入login组件
import login from "./login.vue"
// 2、解析不了，需要安装loader——cnpm install vue-loader vue-template-compiler -D

let vm = new Vue({
    el:'#app',
    data:{
        msg:'在webpack尝试使用Vue'
    },
    // components:{
    //     login
    // }
    // 在webpack中，如果想要通过vue把一个组件放到页面中去，需要使用render函数
    // render:function(createElements){
    //     return createElements(login)
    // },
    // 简写
    render:c => c(login),

})


// 总结：在webpack中使用Vue
// 1、安装Vue的包：cnpm i vue -S
// 2、由于在webpack中，推荐使用.vue这个组件模板文件定义组件，所以，需要安装，能够解析这种文件的loader：cnpm i vue-loader vue-temlate-compiler -D
// 3、在main.js中，导入Vue模块：import Vue from "vue"
// 4、定义一个 .vue 结尾的组件，其中组件有三部分组成：template、script、style
// 5、使用import导入这个组件
// 6、创建vm实例
// 7、在页面中创建id为app的div元素，作为vm实例的控制区域