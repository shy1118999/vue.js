// 入口文件
// 导入Vue
import Vue from 'vue'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 按需导入mintUI组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


// 导入MUI的样式
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"



// 导入app.vue
import app from './App.vue'

let vm = new Vue({
    el:'#app',
    render:e=>e(app),
    router
})