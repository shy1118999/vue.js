// 入口文件

import Vue from "vue/dist/vue.js" 
import App from "./App.vue"

// 导入vue-router模块
import VueRouter from "vue-router"
// 手动安装VueRouter
Vue.use(VueRouter)

import router from "./router.js"

// import account from "./main/Account.vue"
// import goodslist from "./main/Goodslist.vue"
// import login from "./sub/login.vue"
// import register from "./sub/register.vue"
// // 创建一个路由对象
// let router = new VueRouter({
//     routes:[
//         // acount goodlist
//         {path:'/account',component:account,children:[
//             {path:'login',component:login},
//             {path:'register',component:register},
//         ]},
//         {path:'/goodslist',component:goodslist},
//     ]
// })

let vm = new Vue({
    el:'#app',
    render:c => c(App),
    router,//将路由对象挂载在vm上
})
