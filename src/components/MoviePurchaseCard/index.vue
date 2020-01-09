<template>
    <section class="moviepurchasecardbox">
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
    </section>
</template>

<script>
import { getMoviePurchase } from "@/services"

export default {
    data(){
        return {
            realm : "",
            movie : null
        }
    },
    methods : {
        handlerRealm(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.realm = billCode[2]
        },
        handlerInitGet(){
            let {id} = this.realm
            getMoviePurchase(id).then(res => {
                this.movie = res.data.userlist
            })
        }
    },
    created(){
        this.handlerRealm()
        this.handlerInitGet()
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
            margin-bottom: 20px;
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
    }
</style>