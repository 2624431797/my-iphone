<template>
    <section class="mationlistbox">
        <ul
            class="mationlist-container"
            v-infinite-scroll="handlerLoadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
        >
            <li 
                class="mation-content"
                v-for="item in mationlist"
                :key="item.id"
            >
                <router-link tag="div" :to="{name : 'mationdetail', params : {id : item.id}}">
                    <div class="mationlist-item">
                        <div class="mation-list">
                            <h4>《{{item.title}}》</h4>
                            <p>{{item.paragraph}}</p>
                            <div class="mation-subion">
                                <i>{{item.status}}|{{item.area}}</i>
                                <b>{{item.name}}</b>
                            </div>
                        </div>
                        <div class="mation-img">
                            <img :src="item.img" alt="加载失败">
                        </div>
                    </div>
                    <img src="../../../assets/mat.jpg" alt="">
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
import { Toast } from 'mint-ui'
import { getMationList } from "@/services";

export default {
    data(){
        return {
            mationlist : [],
            page : 1,
            limit : 6,
            loading : false,
            hasMore : true
        }
    },
    methods : {
        handlerGetList(){
            let instance = Toast({
                message: '正在加载',
                position: 'bottom',         //弹出框
                duration: 3000,
                iconClass: 'fa fa-spinner fa-pulse',
            })
            let params = {limit : this.limit, page : this.page}
            getMationList(params).then(res => {
                this.mationlist = this.mationlist.concat(res.data.userlist)
                this.loading = false            //开启无限滚动
                instance.close()                //关闭弹出框
                if(this.limit * this.page >= res.data.total){
                    this.hasMore = false        //无更多数据
                    return false
                }
                this.page++
            })
        },
        handlerLoadMore(){
            if(!this.hasMore){              //无更多数据
                Toast({
                    message: '已到底部',
                    position: 'bottom',         //弹出框
                    duration: 3000,
                    iconClass: 'fa fa-exclamation-circle',
                })
                this.loading = true        //关闭无限滚动
                return false
            }
            this.handlerGetList()
        },
        created(){
            this.loading = false        //开启无限滚动
        },
        beforeDestroy(){
            this.loading = true        //关闭无限滚动
        }
    }
}
</script>

<style lang="scss">
    .mationlistbox{
        width: 100%;
        margin-bottom: 60px;
        .mationlist-container{
            .mationlist-item{
                display: flex;
                justify-content: space-between;
                padding: 10px;
                .mation-list{
                    width: 70%;
                    margin-right: 18px;
                    h4{
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 5px;
                    }
                    p{
                        font-size: 12px;
                        color: #333;
                        text-indent: 24px;
                        line-height: 20px;
                    }
                    .mation-subion{
                        display: flex;
                        justify-content: space-between;
                        font-size: 12px;
                        color: #ccc;
                        margin-top: 5px;
                    }
                }
                .mation-img{
                    width: 100px;
                    height: 110px;
                    border-radius: 10px;
                    overflow: hidden;
                }
            }
        }
    }
</style>