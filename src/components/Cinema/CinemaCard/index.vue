<template>
    <section class="cinemacardbox">
        <div class="cinemacard">
            <div class="cinemacard-menu">
                <van-dropdown-menu active-color="#ee0a24">
                    <van-dropdown-item v-model="value1" :options="option1" @change="handlerChangeMenu" />
                    <van-dropdown-item v-model="value2" :options="option2" @change="handlerChangeMenu" />
                    <van-dropdown-item v-model="value3" :options="option3" @change="handlerChangeMenu" />
                </van-dropdown-menu>
            </div>
            <div class="cinemacard-list">
                <van-pull-refresh 
                    v-model="refreshing" 
                    @refresh="handlerOnRefresh"
                    success-text="刷新成功"
                >
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="handlerOnLoad"
                    >
                        <van-cell 
                            v-for="item in cinema" 
                            :key="item.id" 
                        >
                            <p class="cinemacard-list-title">
                                {{item.title}}
                            </p>
                            <div class="cinemacard-list-line">
                                <span>{{item.area}}</span>
                                <b>{{item.range}}km</b>
                            </div>
                            <div class="cinemacard-list-block">
                                <span>退</span>
                                <span>改签</span>
                                <b>小吃</b>
                                <b>折扣卡</b>
                                <span>4K厅</span>
                                <span>4D厅</span>
                            </div>
                        </van-cell>
                    </van-list>
                </van-pull-refresh>
            </div>
        </div>
    </section>
</template>

<script>
import { getCinemaList } from "@/services"
import { getCinemaListChange } from "@/services"

export default {
    data(){
        return {
            value1: 0,
            value2: 'a',
            value3: 'A',
            option1: [
                { text: '行政区', value: 0 },
                { text: '浦东区', value: 1 },
                { text: '闵行区', value: 2 },
                { text: '宝山区', value: 3 },
                { text: '松江区', value: 4 },
                { text: '嘉定区', value: 5 },
                { text: '徐汇区', value: 6 },
                { text: '青浦区', value: 7 },
                { text: '普陀区', value: 8 },
                { text: '黄浦区', value: 9 },
                { text: '杨浦区', value: 10 },
                { text: '奉贤区', value: 11 },
                { text: '静安区', value: 12 },
                { text: '长宁区', value: 13 },
                { text: '金山区', value: 14 },
                { text: '虹口区', value: 15 },
                { text: '崇明区', value: 15 },
            ],
            option2: [
                { text: '全部影院', value: 'a' },
                { text: '万达影城', value: 'b' },
                { text: 'UA电影城', value: 'c' },
                { text: '博纳国际影城', value: 'd' },
                { text: 'AMG海上明珠影城', value: 'e' },
                { text: '左岸国际电影城', value: 'f' },
                { text: '嘉定影剧院', value: 'g' },
                { text: '黄浦剧场', value: 'h' },
                { text: '新光影艺苑', value: 'i' },
                { text: '崇明影剧院', value: 'g' },
                { text: '比高电影城', value: 'k' },
                { text: '保利国际影城', value: 'l' },
                { text: '星美国际影商城', value: 'm' },
                { text: '国泰电影院', value: 'n' },
                { text: 'SFC上影影城', value: 'o' },
                { text: '大地影院', value: 'p'},
            ],
            option3: [
                { text: '我的足迹', value: 'A' },
                { text: '离我最近', value: 'B' },
                { text: '最近去过', value: 'C' },
            ],
            page : 1,
            limit : 10,
            loading: false,
            finished: false,
            refreshing: false,
            hasMore : true,
            cinema: [],
        }
    },
    methods: {
        handlerGetCinema(){
            setTimeout(() => {
                let params = {limit : this.limit, page : this.page}
                getCinemaList(params).then(res => {
                    this.cinema = this.cinema.concat(res.data.cinemalist)
                    this.loading = false            //开启无限滚动
                    if(this.limit * this.page >= res.data.total){
                        this.finished = true
                        this.hasMore = false        //无更多数据
                        return false
                    }
                    this.page++
                })
            }, 1000)
        },
        handlerOnLoad(){
            if(!this.hasMore){             //无更多数据
                this.loading = true        //关闭无限滚动
                return false
            }
            this.handlerGetCinema()
        },
        handlerOnRefresh(){
            // 清空列表数据
            this.finished = false
            // 重新加载数据
            this.loading = true     // 将 loading 设置为 true，表示处于加载状态
            setTimeout(() => {
                if(this.refreshing){
                    this.cinema = []
                    this.refreshing = false
                }
                this.handlerGetCinema()
            }, 1000);
        },
        handlerChangeMenu(){
            window.scrollTo(0, 0)
            this.cinema = []
            let item = "0"
            getCinemaListChange(item).then(res => {
                this.cinema = this.cinema.concat(res.data.cinemalist)
            })
        }
    },
    created(){
        window.scrollTo(0, 0)
        this.loading = false        //开启无限滚动
    },
    beforeDestroy(){
        this.loading = true         //关闭无限滚动
    }
}
</script>

<style lang="scss">
    .cinemacardbox{
        width: 100%;
        margin-top: 84px;
        margin-bottom: 60px;
        .cinemacard{
            padding: 5px 10px 0px;
            .cinemacard-menu{
                position: fixed;
                height: 50px;
                top: 84px;
                left: 0;
                right: 0;
                overflow: hidden;
                z-index: 9999999;
            }
            .cinemacard-list{
                width: 100%;
                margin-top: 50px;
                .van-cell{
                    padding: 13px 8px;
                    .cinemacard-list-title{
                        font-size: 16px;
                        font-weight: bold;
                        margin-bottom: 3px;
                    }
                    .cinemacard-list-line{
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 3px;
                        color: #666;
                        span{
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                        }
                    }
                    .cinemacard-list-block{
                        font-size: 12px;
                        span{
                            margin-right: 5px;
                            padding: 2px 3px;
                            color: #589daf;
                            border: 1px solid #589daf;
                        }
                        b{
                            margin-right: 5px;
                            padding: 2px 3px;
                            color: #f90;
                            border: 1px solid #f90;
                        }
                    }
                }
            }
        }
    }
</style>