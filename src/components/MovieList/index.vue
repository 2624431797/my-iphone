<template>
    <section 
        class="movielistbox"
        :class="{margintop : marginStatus}"
        v-infinite-scroll="handlerLoadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    > 
        <div class="list-content"
            v-for="movie in movies"
            :key="movie.id"
        >
            <div class="list-img">
                <img :src="movie.imgUrl" alt="加载失败">
            </div>
            <mt-cell>
                <div class="list-cell">
                    <p class="list-sub-director">
                        导演:
                        <span
                            v-for="directors in movie.director"
                            :key="directors.id"
                        >
                            {{directors.name}}
                        </span>
                    </p>
                    <p class="list-sub-actor">
                        演员:
                        <span
                            v-for="actors in movie.actor"
                            :key="actors.id"
                        >
                            {{actors.name}}
                        </span>
                    </p> 
                    <p class="list-sub-average">
                        想看: {{movie.rating.average | handlerShowNum}} 人
                    </p>  
                    <p class="list-sub-pubdate">
                        {{movie.country}} | {{movie.duration}}分钟
                    </p>
                    <p class="list-sub-count">
                        评分: {{movie.rating.count}} 分
                    </p>          
                </div>
                <img class="li_small_img" alt="加载失败" slot="icon" v-lazy="movie.img" width="24" height="24">
            </mt-cell>
            <div class="list_tit">
                <span class="li_sub_tit">{{movie.title}}</span>
                <router-link tag="div" :to="{name : 'moviedetail', params : {id : movie.id}}">
                    <mt-button 
                        v-if="iShow" 
                        class="li_sub_btn1" 
                        type="danger" 
                        size="small"
                    >{{movie.status}}</mt-button>
                    <mt-button 
                        v-else 
                        class="li_sub_btn2" 
                        type="danger" 
                        size="small"
                    >{{movie.status}}</mt-button>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import { Toast } from 'mint-ui'
import { getMovieList } from "@/services"

export default {
    data(){
        return {
            movies : [],
            page : 1,
            limit : 5,
            loading : false,
            hasMore : true,
            iShow : true,
            marginStatus : false
        }
    },
    props : ["select"],
    watch : {
        type(val){
            this.movies = []                //类型切换后数组清空
            this.page = 1                   //类型切换后页码清空
            this.hasMore = true             //类型切换后加载数据
            this.handlerGetMovie()
        }
    },
    filters : {
        handlerShowNum(n){
            if(n >= 10000){
                n = n / 10000 
                n = n.toFixed(1)
                n = n + "万"
            }
            return n
        }
    },
    methods : {
        handlerGetMovie(){
            let instance = Toast({
                message: '正在加载',
                position: 'bottom',         //弹出框
                duration: 3000,
                iconClass: 'fa fa-spinner fa-pulse',
            })
            let para = this.select
            let params = {limit : this.limit, page : this.page}
                getMovieList(para, params).then(res => {
                    this.movies = this.movies.concat(res.data.userlist)
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
            this.handlerGetMovie()
        },
        handlerSelect(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.selected = billCode[2]
            if(this.selected === "nowing") return this.iShow = true; return this.iShow = false;
        },
        handlerScrollAuto(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop >= 380 && !this.marginStatus){
                this.marginStatus = true
            }
            else if(scrollTop < 380 && this.marginStatus){
                this.marginStatus = false
            } 
        }
    },
    activated(){
        this.handlerSelect()
        this.loading = false        //开启无限滚动
        window.addEventListener("scroll", this.handlerScrollAuto)
    },
    deactivated(){  
        this.loading = true        //关闭无限滚动
        window.removeEventListener("scroll", this.handlerScrollAuto)
    }
}
</script>

<style lang="scss">
    .movielistbox{
        height: 100%;
        margin-bottom: 60px;
        &.margintop{
            margin-top: 44px;
        }
        .list-content{
            padding: 8px 10px;
            border-bottom: 1px solid #ccc;
            .list-img{
                width: 100%;
                height: 180px;
                margin-bottom: 5px;
            }
            .mint-cell-wrapper{
                padding: 0;
                .mint-cell-title{
                    float: left;
                    flex: 0;
                }
                .mint-cell-value{
                    margin-left: 15px;
                    float: left;
                    line-height: 30px;
                    .list-sub-director{
                        width: 820px;
                        font-size: 14px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .list-sub-actor{
                        width: 820px;
                        font-size: 14px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .list-sub-pubdate{
                        font-size: 14px;
                    }
                    .list-sub-count{
                        font-size: 16px;
                        font-weight: bold;
                        color: #faae21
                    }
                    .list-sub-average{
                        font-size: 14px;
                    }
                }
                
            }
            .li_small_img{
                width: 100px;
                height: 140px;
            }
            .list_tit{
                width: 100%;
                height: 40px;
                line-height: 40px;
                .li_sub_tit{
                    font-size: 20px;
                    color: #333;
                    font-weight: bold;
                    float: left;
                }
                .li_sub_btn1{
                    float: right;
                    margin-right: 10px;
                }
                .li_sub_btn2{
                    float: right;
                    margin-right: 10px;
                    background: #3c9fe6;
                }
                .mint-button{
                    padding: 0 30px;
                    margin-top: 5px;
                    line-height: 32px;
                }
            }
        }
    }
</style>