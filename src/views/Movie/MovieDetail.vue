<template>
    <section class="moviedetailbox">
        <MovieDetailHeader />
        <MovieDetailCard />
        <MovieDetailBtn />
    </section>
</template>

<script>
import MovieDetailHeader from "@/components/MovieDetailHeader"
import MovieDetailCard from "@/components/MovieDetailCard"
import MovieDetailBtn from "@/components/MovieDetailBtn"

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