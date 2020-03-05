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
    
}
</script>

<style lang="scss">
    
</style>