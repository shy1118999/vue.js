<template>
    <div class="cmt-contaniner">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容（最多吐槽120字）" maxlength="120" v-model="cmtContent"></textarea>
        <mt-button type="primary" size="large" @click="postCmt">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dataFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" plain size="large" @click="loadMore" :disabled="is_over">加载更多</mt-button>

    
    </div>
</template>
<script>
import {Toast} from "mint-ui"
    export default{
        data(){
            return {
                pageIndex:1,//默认展示第一页
                comments:[],//所有的评论数据
                is_over:false,
                cmtContent:'',
            }
        },
        props:['id'],
        created() {
            this.getComments()
        },
        methods:{
            getComments(){
                this.$http.get('api/news/getcomments/news_id/'+this.id+'/?page='+this.pageIndex).then(res=>{
                    if(res.body.status == 0){
                        if(res.body.message.length<5){
                            this.is_over = true
                        }
                        // this.comments = res.body.message
                        this.comments = this.comments.concat(res.body.message)
                    }else{
                        Toast("获取评论失败！")
                    }
                })
            },
            loadMore(){
                this.pageIndex++
                this.getComments()
            },
            postCmt(){
                if(this.cmtContent.trim() == ''){
                    Toast("请输入评论内容")
                    return
                }
                this.$http.post('api/news/postcomments/',{'news_id':this.id,'content':this.cmtContent.trim()}).then(res=>{
                    console.log(res.body)
                    if(res.body.status == 0){
                        Toast(res.body.message)
                        this.pageIndex = 1
                        this.comments = []
                        this.getComments()
                        this.cmtContent = ''
                        this.is_over = false
                    }else{
                        Toast(res.body.message)
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
.cmt-contaniner{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin-top: 10px;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                background: gray;
                line-height: 30px;
            }
            .cmt-body{
                text-indent: 2em;
                line-height: 30px;
            }
        }

    }
}
</style>
