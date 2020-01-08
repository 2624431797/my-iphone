<template>
    <section class="moviebox">
        <Header />
        <City />
        <SearchBtn />
        <Banner />
        <Filmbar />
        <keep-alive>
            <router-view class="child-view" />
        </keep-alive>
        <Tabbar />
    </section>
</template>

<script>
import Header from "@/components/Header"
import City from "@/components/City"
import SearchBtn from "@/components/SearchBtn"
import Banner from "@/components/Banner"
import Filmbar from "@/components/Filmbar"
import Tabbar from "@/components/Tabbar"

export default {
    components : {
        Header,
        City,
        SearchBtn,
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