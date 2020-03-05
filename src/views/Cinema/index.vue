<template>
    <section class="cinemabox">
        <Header />
        <CinemaSearch />
        <CinemaCard />
        <Tabbar />
    </section>
</template>

<script>
import Header from "@/components/Header"
import CinemaSearch from "@/components/Cinema/CinemaSearch"
import CinemaCard from "@/components/Cinema/CinemaCard"
import Tabbar from "@/components/Tabbar"

export default {
    components : {
        Header,
        CinemaSearch,
        CinemaCard,
        Tabbar
    }
}
</script>

<style>

</style>