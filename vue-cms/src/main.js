// 入口文件
// 导入Vue
import Vue from 'vue'

// 按需导入mintUI组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

// 导入MUI的样式
import "./lib/mui/css/mui.css"

// 导入app.vue
import app from './App.vue'

let vm = new Vue({
    el:'#app',
    render:e=>e(app)
})