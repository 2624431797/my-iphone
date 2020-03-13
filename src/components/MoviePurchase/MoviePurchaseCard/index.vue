<template>
    <section class="moviepurchasecardbox">
        <div v-if="!film" class="mloading"></div>
        <div v-else class="moviepurchasecard">
            <div class="moviepurchasecard-tabbar">
                <mt-navbar class="moviepurchasecard-navbar" v-model="selected">
                    <mt-tab-item id="1">今天 {{this.nowDate}}</mt-tab-item>
                    <mt-tab-item id="2">明天 {{this.nextDate}}</mt-tab-item>
                    <mt-tab-item id="3">后天 {{this.afterDate}}</mt-tab-item>
                </mt-navbar>
                <dv-loading v-if="!film"></dv-loading>
                <mt-tab-container class="moviepurchasecard-tabcontainer" v-model="active" v-else>
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
                                            <span>￥</span><span>{{item.price}}</span>
                                        </li>
                                        <li 
                                            class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-shopbtn"
                                            @click="handlerGetInner"
                                        >
                                            <a @click="handlerLinkSeats" href="Javascript: ;">购票</a>
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
                                            <span>￥</span><span>{{item.price}}</span>
                                        </li>
                                        <li 
                                            class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-shopbtn"
                                            @click="handlerGetInner"
                                        >
                                            <a @click="handlerLinkSeats" href="Javascript: ;">购票</a>
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
                                            <span>￥</span><span>{{item.price}}</span>
                                        </li>
                                        <li 
                                            class="moviepurchasecard-tabcontainer-seats-warp-shoplist-shopitem-shopbtn"
                                            @click="handlerGetInner"
                                        >
                                            <a @click="handlerLinkSeats" href="Javascript: ;">购票</a>
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
            film : null,
            theatres : "",
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
        },
        "theatres" : {
            handler(){
                this.handlerLinkSeats()
            },
            deep : true
        }
    },
    methods : {
        handlerRealm(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.realm = billCode[2]
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
            setTimeout(() => {
                this.$router.push({
                    name : 'movieseats', 
                    params : {
                        id : this.realm, 
                        theatre : this.theatres
                    }
                })
            }, 200)
        },
        handlerGetInner(e){
            this.theatres = e.currentTarget.previousElementSibling.previousElementSibling.lastElementChild.innerHTML
            let moviePrice = e.currentTarget.previousElementSibling.lastElementChild.innerHTML
            this.$store.commit("changeMoviePrice", {moviePrice : moviePrice})
        },
    },
    created(){
        this.handlerRealm()
        this.handlerInitGetTab()
        this.handlerGetDate()
    }
}
</script>

<style lang="scss">
    .moviepurchasecardbox{
        background: #f4f4f4;
        .moviepurchasecard-tabbar{
            width: 100%;
            padding: 0 10px;
            background: #fff;
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