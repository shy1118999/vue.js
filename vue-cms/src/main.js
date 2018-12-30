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
Vue.http.options.root = 'http://vuecms.com/'
Vue.http.options.emulateJSON = true

// 导入时间插件
// import moment from 'moment'
// 定义全局过滤器
Vue.filter('dataFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return new Date(parseInt(dataStr) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
})

// 按需导入mintUI组件
import {Header, Swipe, SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);



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