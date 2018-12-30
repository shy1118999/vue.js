// 路由文件

import VueRouter from "vue-router"

// 导入路由组件
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"

import Newslist from "./components/news/Newslist.vue"
import NewsInfo from "./components/news/NewsInfo.vue"

import Photolist from "./components/photos/photolist.vue"
// 创建一个路由对象
let router = new VueRouter({
    routes:[
        // acount goodlist
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:Newslist},
        {path:'/home/newsinfo/:id',component:NewsInfo},
        {path:'/home/photolist',component:Photolist},    
    ],
    linkActiveClass:'mui-active',//设置高亮显示类
})

export default router