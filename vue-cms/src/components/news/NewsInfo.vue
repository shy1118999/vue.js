<template>
    <div class="newsinfo-container">
        <!-- 标题 -->
        <h1 class="title">{{newsinfo.title}}</h1>
        <!-- 子标题 -->
        <p class="sub-title">
            <span>发表时间：{{newsinfo.add_time | dataFormat}}</span>
            <span>点击了：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content">
            
        </div>
        <!-- 评论区域 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
// 导入评论子组件
import comment from '../subcomponents/comment.vue'

    export {Toass} from 'mint-ui'
    export default{
        data(){
            return {
                id:this.$route.params.id,
                newsinfo:''
            }
        },
        created() {
            this.getNewsInfo()
        },
        methods:{
            getNewsInfo(){
                this.$http.get('api/news/getnews/id/'+this.id).then(res=>{
                    if(res.body.status == 0){
                        console.log(res.body.message[0])
                        this.newsinfo = res.body.message[0]
                    }else{
                        Toast("获取新闻失败！")
                    }
                })
            }
        },
        components:{
            'comment-box':comment
        }
    }
</script>

<style lang="scss">
    .newsinfo-container{
        padding: 0 5px;
        .title{
            font-size: 16px;
            color:red;
            text-align: center;
            line-height: 20px;

        }
        .sub-title{
            font-size: 14px;
            color:#226aff;
            display: flex;
            justify-content: space-between;
        }
        .content{
            padding: 5px 10px;
            img{
                width: 100%;
            }
        }
    }
</style>
