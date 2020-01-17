<template>
    <section class="movieseatsbox">
        <MovieDetailHeader />
        <MovieSeatsCard />
        <MovieSeatsSubion />
    </section>
</template>

<script>
import MovieDetailHeader from "@/components/MovieDetail/MovieDetailHeader"
import MovieSeatsCard from "@/components/MovieSeats/MovieSeatsCard"
import MovieSeatsSubion from "@/components/MovieSeats/MovieSeatsSubion"

export default {
    components : {
        MovieDetailHeader,
        MovieSeatsCard,
        MovieSeatsSubion
    }
}
</script>

<style lang="scss">
    .movieseatsbox{
        height: 100%;
    }
</style>