<template>
    <section class="moviepurchasebannerbox">
        <div v-if="!film" class="ploading"></div>
        <div v-else class="moviepurchasebanner">
            <div class="moviepurchasebanner-header">
                <div class="moviepurchasebanner-header-left">
                    <i class="el-icon-place"></i>
                    <span>{{newcityname}}</span>
                </div>
                <div class="moviepurchasebanner-header-right">
                    <i class="el-icon-phone-outline"></i>
                </div>
            </div>
            <div class="moviepurchasebanner-cover">
                <img :src="this.imgUrl" alt="加载失败">
            </div>
            <div class="swiper-container-moviepurchasebanner">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"
                        v-for="bans in bans"
                        :key="bans.id"
                    >
                        <a href="JavaScript: ;">
                            <img :src="bans.imgUrl" alt="加载失败">
                        </a>
                    </div>
                </div>
                <div class="swiper-triangle">
                    <img src="../../../assets/arg.png" alt="">
                </div>
            </div>
            <div class="moviepurchasecard-title">
                <div class="moviepurchasecard-tit">
                    <span>{{film.title}}</span>
                    <b>{{film.rating}} 分</b>
                </div>
                <div class="moviepurchasecard-sub">
                    <i>{{film.country}}</i>
                    <span>{{film.genres}}</span>
                    <b>{{film.duration}} 分钟</b>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Swiper from "swiper"
import { getMoviePurchase, getmoviepurchaseBanner } from "@/services"

export default {
    data(){
        return {
            newcityname : "",
            film : null,
            bans : [],
            changeBan : [],
            imgUrl : "",
        }
    },
    methods : {
        handlerRealm(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.realm = billCode[2]
        },
        handlerGetCity(){
            this.newcityname = sessionStorage.getItem("app-city")
        },
        handlerInitLoad(){
            var _this = this
            let id = this.realm
            getmoviepurchaseBanner(id).then(res => {
                this.film = res.data.userlist
                this.bans = this.film.userImg
                this.$nextTick(() => {
                    new Swiper('.swiper-container-moviepurchasebanner', {
                        slidesPerView: 3,
                        spaceBetween: 15,
                        centeredSlides: true,
                        on : {
                            init : () => {
                                this.imgUrl = this.bans[0].imgUrl
                            },
                            slideChangeTransitionStart : function(){
                                var index = this.activeIndex
                                let id = this.realm
                                getmoviepurchaseBanner(id).then(res => {
                                    this.changeBan = res.data.userlist.userImg
                                    _this.film = res.data.userlist
                                    _this.imgUrl = this.changeBan[index].imgUrl
                                })
                            }
                        },
                        pagination : {
                            el : ".swiper-pagination-moviepurchasebanner",
                            dynamicBullets: true,
                        }
                    })
                })
            })
        }
    },
    created(){
        this.handlerRealm()
        this.handlerGetCity()
    },
    mounted(){
        this.handlerInitLoad()
    }
}
</script>

<style lang="scss">
    .moviepurchasebannerbox{
        position: relative;
        .moviepurchasebanner-header{
            height: 40px;
            line-height: 40px;
            padding: 0 16px;
            background: #fff;
            i{
                font-size: 18px;
                font-weight: bold;
                margin-right: 10px;
            }
            .moviepurchasebanner-header-left{
                float: left;
            }
            .moviepurchasebanner-header-right{
                float: right;
            }
        }
        .moviepurchasebanner-cover{
            position: absolute;
            width: 100%;
            height: 225px;
            filter: blur(20px);
            z-index: -1;
        }
        .swiper-container-moviepurchasebanner{
            position: absolute;
            width: 100%;
            height: 225px;
            top: 40px;
            padding: 26px 0;
            overflow: hidden;
            .swiper-slide {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-size: 18px;
                transition: 300ms;
                transform: scale(0.8);
            }
            .swiper-slide-active,.swiper-slide-duplicate-active{
                transform: scale(1);
            }
            .swiper-triangle{
                position: absolute;
                width: 24px;
                height: 16px;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                z-index: 99999;
            }
        } 
        .moviepurchasecard-title{
            width: 100%;
            margin-top: 225px;
            padding: 16px 28px;
            margin-bottom: 10px;
            border-bottom: 1px solid #dedede;
            background: #fff;
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
    }
</style>