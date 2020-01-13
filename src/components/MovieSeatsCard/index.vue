<template>
    <section class="movieseatscardbox">
        <dv-loading v-if="!movie">加载中...</dv-loading>
        <div v-else class="movieseatscard">
            <div class="movieseatscard-img">
                <img :src="movie.imgUrl" alt="加载失败">
            </div>
            <div class="movieseatscard-sub">
                <div class="movieseatscard-sub-tit">
                    <span>{{movie.title}}</span>
                    <b>{{movie.rating.count}}分</b>
                </div>
                <div class="movieseatscard-sub-sub">
                    <i>{{movie.country}}</i>
                    <span>{{movie.genres}}</span>
                    <b>{{movie.duration}} 分钟</b>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { getMoviePurchase } from "@/services";

export default {
    data(){
        return {
            movie : null,
            realm : null
        }
    },
    methods : {
        handlerInitGet(){
            let id = this.realm
            getMoviePurchase(id).then(res => {
                this.movie = res.data.userlist
            })
        },
        handlerRealm(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.realm = billCode[2]
        }
    },
    created(){
        this.handlerRealm()
        this.handlerInitGet()
    }
}
</script>

<style lang="scss">
    .movieseatscardbox{
        width: 100%;
        padding: 6px 16px;
        .dv-loading{
            height: 200px;
            color: rgb(2, 188, 254);
        }
        .movieseatscard-img{
            height: 180px;
        }
        .movieseatscard-sub{
            width: 100%;
            padding: 16px 28px;
            margin-bottom: 10px;
            background: #fff;
            border-bottom: 1px solid #dedede;
            .movieseatscard-sub-tit{
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
            .movieseatscard-sub-sub{
                display: flex;
                justify-content: space-between;
                line-height: 32px;
                text-align: center;
                color: #797d82;
            }
        }
    }
</style>