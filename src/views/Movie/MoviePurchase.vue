<template>
    <section class="moviepurchasebox">
        <MovieDetailHeader />
        <MoviePurchaseBanner />
        <MoviePurchaseCard />
        <MoviePurchaseFood />
    </section>
</template>

<script>
import MovieDetailHeader from "@/components/MovieDetailHeader"
import MoviePurchaseBanner from "@/components/MoviePurchaseBanner"
import MoviePurchaseCard from "@/components/MoviePurchaseCard"
import MoviePurchaseFood from "@/components/MoviePurchaseFood"

export default {
    components : {
       MovieDetailHeader,
       MoviePurchaseBanner,
       MoviePurchaseCard,
       MoviePurchaseFood
    }
}
</script>

<style lang="scss">

</style>