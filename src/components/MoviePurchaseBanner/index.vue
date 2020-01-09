<template>
    <section class="moviepurchasebannerbox">
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
        <div :class="['swiper-container-moviepurchasebanner', {ploading : banners.length === 0}]">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                    v-for="banner in banners"
                    :key="banner._id"
                >
                    <a href="JavaScript: ;">
                        <img :src="banner.banner_img" alt="加载失败">
                    </a>
                </div>
            </div>
            <div class="swiper-triangle">
                <img src="../../assets/arg.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>
import Swiper from "swiper"
import { getMoviePurchase } from "@/services"

export default {
    data(){
        return {
            imgUrl : "",
            banners : [],
            newcityname : ""
        }
    },
    methods : {
        handlerInitGet(){
            getMoviePurchase().then(res => {
                this.imgUrl = res.data.userlist.imgUrl
                this.banners = this.banners.concat(res.data.userlist.img)
                this.$nextTick(() => {
                    new Swiper('.swiper-container-moviepurchasebanner', {
                        slidesPerView: 3,
                        spaceBetween: 15,
                        centeredSlides: true,
                        pagination : {
                            el : ".swiper-pagination-moviepurchasebanner",
                            dynamicBullets: true,
                        }
                    });
                })
            })
        },
        handlerGetCity(){
            this.newcityname = sessionStorage.getItem("app-city")
        },
    },
    created(){
        this.handlerInitGet()
        this.handlerGetCity()
    }
}
</script>

<style lang="scss">
    .moviepurchasebannerbox{
        position: relative;
        background: #fff;
        .moviepurchasebanner-header{
            height: 40px;
            line-height: 40px;
            padding: 0 16px;
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
        }
        .swiper-container-moviepurchasebanner{
            position: absolute;
            width: 100%;
            height: 225px;
            padding: 26px 0;
            overflow: hidden;
            background: rgba(255, 255, 255, .6);
            .swiper-slide {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-size: 18px;
                transition: 300ms;
                transform: scale(0.8);
                background: #fff;
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
    }
</style>