<template>
    <section class="mationbannerbox">
        <div :class="['swiper-container-mation', {zloading : bans.length === 0}]">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                    v-for="ban in bans"
                    :key="ban._id"
                >
                    <a href="JavaScript: ;">
                        <img :src="ban.imgUrl" alt="加载失败">
                    </a>
                </div>
            </div>
            <div class="swiper-pagination-mation"></div>
        </div>
    </section>
</template>

<script>
import Swiper from "swiper"
import { getMationBanner } from "@/services"

export default {
    data(){
        return {
            bans : []
        }
    },
    methods : {
        handlerInitBanner(){
            getMationBanner().then(res => {
                this.bans = res.data.userlist
                this.$nextTick(() => {
                    new Swiper('.swiper-container-mation', {
                        autoplay: true,
                        pagination : {
                            el : ".swiper-pagination-mation",
                        }
                    })
                })
            })
        }
    },
    created(){
        this.handlerInitBanner()
    }
}
</script>

<style lang="scss">
    .mationbannerbox{
        position: relative;
        height: 216px;
        padding: 10px;
        margin-bottom: 20px;
        background: #f5f5f5;
        .swiper-container-mation{
            position: relative;
            width: 100%;
            overflow: hidden;
            .swiper-pagination-mation{
                position: absolute;
                bottom: 10px;
                text-align: right;
                z-index: 999;
                .swiper-pagination-bullet{
                    background: #fff;
                }
                .swiper-pagination-bullet:last-child{
                    margin-right: 20px;
                }
                .swiper-pagination-bullet-active{
                    background: #f03d37;
                }
            }
        }   
    }
</style>