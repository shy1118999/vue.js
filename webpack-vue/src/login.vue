<template>
    <div>
        <h1>这是登录组件，使用 .vue 文件定义出来的——{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:"123"
            }
        },
        methods:{
            show(){
                console.log("调用了login.vue的show方法")
            }
        }
    }
    // 在ES6中，规定了如何 导入 和 导出 ，模块
    // ES6中导入模块，使用 import 模块名称 from "模块标识符"
    // 在ES5中，使用 export default 和 export 向外暴露成员
</script>

<style>
    
</style>