<template>
    <section class="moviepurchasecardbox">
        <div v-if="!movie" class="mloading"></div>
        <div v-else class="moviepurchasecard">
            <div class="moviepurchasecard-title">
                <div class="moviepurchasecard-tit">
                    <span>{{movie.title}}</span>
                    <b>{{movie.rating.count}}分</b>
                </div>
                <div class="moviepurchasecard-sub">
                    <i>{{movie.country}}</i>
                    <span>{{movie.genres}}</span>
                    <b>{{movie.duration}} 分钟</b>
                </div>
            </div>
            <div class="moviepurchasecard-tabbar">
                <mt-navbar class="moviepurchasecard-navbar" v-model="selected">
                    <mt-tab-item id="1">今天 {{this.nowDate}}</mt-tab-item>
                    <mt-tab-item id="2">明天 {{this.nextDate}}</mt-tab-item>
                    <mt-tab-item id="3">后天 {{this.afterDate}}</mt-tab-item>
                </mt-navbar>
                <dv-loading v-if="!film"></dv-loading>
                <mt-tab-container class="moviepurchasecard-tabcontainer" v-model="active" swipeable v-else>
                    <mt-tab-container-item id="tab-container1">
                        <div class="moviepurchasecard-tabcontainer-seats">
                            <div 
                                class="moviepurchasecard-tabcontainer-seats-warp"
                                v-for="item in film"
                                :key="item.id"
                            >
                                <div class="moviepurchasecard-tabcontainer-seats-warp-shoplist">
                                    <ul class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem">
                                        <li class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-time">
                                            <span>{{item.showAt}}</span>
                                            <b>约{{item.endAt}}分钟后离场</b>
                                        </li>
                                        <li class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-info">
                                            <span>{{item.filmLanguage}}{{item.imax}}</span>
                                            <b>{{item.hallName}}</b>
                                        </li>
                                        <li class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-price">
                                            <span>￥{{item.price}}</span>
                                        </li>
                                        <li 
                                            class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-shopbtn"
                                            @click="handlerLinkSeats"
                                        >
                                            <a href="Javascript: ;">购票</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container2">
                        <div class="moviepurchasecard-tabcontainer-seats">
                            <div 
                                class="moviepurchasecard-tabcontainer-seats-warp"
                                v-for="item in film"
                                :key="item.id"
                            >
                                <div class="moviepurchasecard-tabcontainer-seats-warp-shoplist">
                                    <ul class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem">
                                        <li class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-time">
                                            <span>{{item.showAt}}</span>
                                            <b>约{{item.endAt}}分钟后离场</b>
                                        </li>
                                        <li class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-info">
                                            <span>{{item.filmLanguage}}{{item.imax}}</span>
                                            <b>{{item.hallName}}</b>
                                        </li>
                                        <li class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-price">
                                            <span>￥{{item.price}}</span>
                                        </li>
                                        <li 
                                            class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-shopbtn"
                                            @click="handlerLinkSeats"
                                        >
                                            <a href="Javascript: ;">购票</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container3">
                        <div class="moviepurchasecard-tabcontainer-seats">
                            <div 
                                class="moviepurchasecard-tabcontainer-seats-warp"
                                v-for="item in film"
                                :key="item.id"
                            >
                                <div class="moviepurchasecard-tabcontainer-seats-warp-shoplist">
                                    <ul class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem">
                                        <li class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-time">
                                            <span>{{item.showAt}}</span>
                                            <b>约{{item.endAt}}分钟后离场</b>
                                        </li>
                                        <li class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-info">
                                            <span>{{item.filmLanguage}}{{item.imax}}</span>
                                            <b>{{item.hallName}}</b>
                                        </li>
                                        <li class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-price">
                                            <span>￥{{item.price}}</span>
                                        </li>
                                        <li 
                                            class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-shopbtn"
                                            @click="handlerLinkSeats"
                                        >
                                            <a href="Javascript: ;">购票</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
    </section>
</template>

<script>
import { getMoviePurchase, getMoviePurchaseTabList } from "@/services"

export default {
    data(){
        return {
            realm : "",
            movie : null,
            film : null,
            selected : "1",
            active : "tab-container1",
            nowMs : null,
            nowDate : "",
            nextDate : "",
            afterDate : "",
            relamDate : ""
        }
    },
    watch : {
        "selected" : {
            handler(){
                switch(this.selected) {
                    case "1":
                        this.active = "tab-container1"
                        this.relamDate = this.nowMs - 10000
                        break;
                    case "2":
                        this.active = "tab-container2"
                        this.relamDate = this.nowMs
                        break;
                    case "3":
                        this.active = "tab-container3"
                        this.relamDate = this.nowMs + 10000
                        break;
                    default:
                        break;
                }
            }
        },
        relamDate(){
            this.handlerInitGetTab()
        }
    },
    methods : {
        handlerRealm(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.realm = billCode[2]
        },
        handlerInitGet(){
            let id = this.realm
            let date = this.relamDate
            getMoviePurchase(id).then(res => {
                this.movie = res.data.userlist
            }) 
        },
        handlerInitGetTab(){
            let id = this.realm
            let date = this.relamDate
            getMoviePurchaseTabList(id, date).then(res => {
                this.film = res.data.userdate
            })
        },
        handlerGetDate(){       //使用moment
            this.nowMs = Date.now()
            this.nowDate = this.$moment().format('MM-DD')                          //当前日期
            this.nextDate = this.$moment().subtract(-1, 'days').format('MM-DD')    //再一天日期
            this.afterDate = this.$moment().subtract(-2, 'days').format('MM-DD')     //后一天日期
        },
        handlerLinkSeats(){
            this.$router.push({name : 'movieseats', params : {id : this.realm}})
        }
    },
    created(){
        this.handlerRealm()
        this.handlerInitGet()
        this.handlerInitGetTab()
        this.handlerGetDate()
    }
}
</script>

<style lang="scss">
    .moviepurchasecardbox{
        margin-top: 225px;
        background: #f4f4f4;
        .moviepurchasecard-title{
            width: 100%;
            padding: 16px 28px;
            margin-bottom: 10px;
            background: #fff;
            border-bottom: 1px solid #dedede;
            .moviepurchasecard-tit{
                height: 30px;
                line-height: 30px;
                span{
                    float: left;
                    color: #191a1b;
                    font-size: 18px;
                    font-weight: bold;
                }
                b{
                    float: right;
                    font-size: 18px;
                    font-style: italic;
                    color: #ffb232;
                }
            }
            .moviepurchasecard-sub{
                display: flex;
                justify-content: space-between;
                line-height: 32px;
                text-align: center;
                color: #797d82;
            }
        }
        .moviepurchasecard-tabbar{
            width: 100%;
            padding: 0 10px;
            .moviepurchasecard-navbar{
                .mint-tab-item{
                    .mint-tab-item-label{
                        font-size: 14px;
                    }
                }
                .is-selected{
                    color: #ff5f16;
                    border-bottom: 2px solid #ff5f16;
                }
            }
            .moviepurchasecard-tabcontainer{
                padding: 10px 0;
                .moviepurchasecard-tabcontainer-seats{
                    position: relative;
                    .moviepurchasecard-tabcontainer-seats-warp{
                        font-size: 14px;
                        color: #777;
                        .moviepurchasecard-tabcontainer-seats-warp-shoplist{
                            padding: 17px 0;
                            margin: 0 12.5px;
                            border-bottom: 1px solid #dedede;
                            .moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                .moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-time{
                                    display: flex;
                                    width: 120px;
                                    flex-direction: column;
                                    span{
                                        font-size: 20px;
                                        color: #333;
                                        line-height: 1;
                                        white-space: nowrap;
                                    }
                                    b{
                                        color: #999;
                                        font-size: 11px;
                                        white-space: nowrap;
                                        margin-top: 10px;
                                    }
                                }
                                .moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-info{
                                    display: flex;
                                    width: 100px;
                                    flex-direction: column;
                                    span{
                                        margin-top: 2px;
                                        line-height: 18px;
                                        font-size: 13px;
                                        color: #333;
                                        white-space: normal;
                                    }
                                    b{
                                        margin-top: 7px;
                                        font-size: 11px;
                                        color: #999;
                                        white-space: normal;
                                    }
                                }
                                .moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-price{
                                    span{
                                            color: #f03d37;
                                            font-size: 16px;
                                            font-weight: bold;
                                    }
                                }
                                .moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-shopbtn{
                                    a{  
                                        display: block;
                                        width: 46px;
                                        height: 30px;
                                        color: #fff;
                                        font-size: 12px;
                                        text-align: center;
                                        line-height: 30px;
                                        border-radius: 5px;  
                                        background-color: #f03d37;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>