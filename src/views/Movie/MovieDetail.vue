<template>
    <section class="moviedetailbox">
        <MovieDetailHeader />
        <MovieDetailCard />
        <MovieDetailBtn />
    </section>
</template>

<script>
import MovieDetailHeader from "@/components/MovieDetail/MovieDetailHeader"
import MovieDetailCard from "@/components/MovieDetail/MovieDetailCard"
import MovieDetailBtn from "@/components/MovieDetail/MovieDetailBtn"

export default {
    components : {
        MovieDetailHeader,
        MovieDetailCard,
        MovieDetailBtn
    }
}
</script>

<style lang="scss">

</style>