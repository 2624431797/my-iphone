<template>
    <section class="bannerbox">
        <div :class="['swiper-container', {loading : bans.length === 0}]">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                    v-for="ban in bans"
                    :key="ban._id"
                >
                    <img :src="ban.img" alt="加载失败">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<script>
import Swiper from "swiper"
import { getBannerList } from "@/services"

export default {
    data(){
        return {
            bans : [],
        }
    },
    methods : {
        initList(){
            getBannerList().then(res => {
                this.bans = res.data.bannerlist

                this.$nextTick(() => {
                    new Swiper('.swiper-container', {
                        effect: "coverflow",
                        grabCursor: true,
                        centeredSlides: true,
                        autoplay: true,
                        loop: true,
                        slidesPerView: "auto",
                        coverflow: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        },
                        pagination : {
                            el : ".swiper-pagination",
                            dynamicBullets: true,
                        }
                    })
                })
            })
        }
    },
    created(){
        this.initList()
    }
}
</script>

<style lang="scss">
    .bannerbox{
        margin-top: 40px;
        background: #f5f5f5;
        .swiper-container {
            width: 100%;
            padding-top: 50px;
            padding-bottom: 50px;
            .swiper-slide {
                background-position: center;
                background-size: cover;
                width: 180px;
                height: 280px;
            }
            .swiper-scrollbar-drag{
                background: #f03d37;
            }
            .swiper-pagination-bullet-active-main{
                background: #f03d37;
            }
        }   
    }
</style>