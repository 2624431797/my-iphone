<template>
    <section class="movieseatsbox">
        <MovieDetailHeader />
        <MovieSeatsCard />
        <MovieSeatsSubion />
    </section>
</template>

<script>
import MovieDetailHeader from "@/components/MovieDetailHeader"
import MovieSeatsCard from "@/components/MovieSeatsCard"
import MovieSeatsSubion from "@/components/MovieSeatsSubion"

export default {
    components : {
        MovieDetailHeader,
        MovieSeatsCard,
        MovieSeatsSubion
    }
}
</script>

<style lang="scss">

</style>