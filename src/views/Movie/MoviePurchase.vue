<template>
    <section class="moviepurchasebox">
        <MovieDetailHeader />
        <MoviePurchaseBanner />
        <MoviePurchaseCard />
    </section>
</template>

<script>
import MovieDetailHeader from "@/components/MovieDetailHeader"
import MoviePurchaseBanner from "@/components/MoviePurchaseBanner"
import MoviePurchaseCard from "@/components/MoviePurchaseCard"

export default {
    components : {
       MovieDetailHeader,
       MoviePurchaseBanner,
       MoviePurchaseCard
    }
}
</script>

<style lang="scss">

</style>