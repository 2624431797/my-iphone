<template>
    <section class="moviepurchasebox">
        <MovieDetailHeader />
        <MoviePurchaseBanner />
        <MoviePurchaseCard />
        <MoviePurchaseFood />
    </section>
</template>

<script>
import MovieDetailHeader from "@/components/MovieDetail/MovieDetailHeader"
import MoviePurchaseBanner from "@/components/MoviePurchase/MoviePurchaseBanner"
import MoviePurchaseCard from "@/components/MoviePurchase/MoviePurchaseCard"
import MoviePurchaseFood from "@/components/MoviePurchase/MoviePurchaseFood"

export default {
    components : {
       MovieDetailHeader,
       MoviePurchaseBanner,
       MoviePurchaseCard,
       MoviePurchaseFood
    },
    methods : {
        handlerLinkId(){
            this.realm = this.$route.params.id
        }
    },
    beforeRouteEnter(to, from, next){
        const authTest = sessionStorage.getItem("authTest")
        if(authTest === "true"){
            next({
                path : "/apptest",                  // 跳转到login页面
                query: { redirect: to.path }        // 记录要进入的目标地址
            })
        }
        else{
            next()
        }
    },
    created(){
        this.handlerLinkId()
    }
}
</script>

<style lang="scss">
    
</style>