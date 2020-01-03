<template>
    <section class="moviebox">
        <Header />
        <City />
        <Banner />
        <Filmbar />
        <router-view />
        <Tabbar />
    </section>
</template>

<script>
import Header from "@/components/Header"
import City from "@/components/City"
import Banner from "@/components/Banner"
import Filmbar from "@/components/Filmbar"
import Tabbar from "@/components/Tabbar"

export default {
    components : {
        Header,
        City,
        Banner,
        Filmbar,
        Tabbar,
    }
}
</script>

<style lang="scss">
    .moviebox{
        overflow: hidden;
    }
</style>