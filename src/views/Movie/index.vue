<template>
    <section class="moviebox">
        <Header />
        <City />
        <SearchBtn />
        <Banner />
        <Filmbar />
        <keep-alive :include="aliveRouter">
            <router-view />
        </keep-alive>
        <Tabbar />
    </section>
</template>

<script>
import Header from "@/components/Header"
import City from "@/components/City"
import SearchBtn from "@/components/SearchBtn"
import Banner from "@/components/Banner"
import Filmbar from "@/components/FilmBar"
import Tabbar from "@/components/Tabbar"

export default {
    data(){
        return {
            aliveRouter : ["nowing", "coming"],
            authTest : true
        }
    },
    components : {
        Header,
        City,
        SearchBtn,
        Banner,
        Filmbar,
        Tabbar,
    },
    methods : {
        handlerChangeIsCity(){
            let isCity = sessionStorage.getItem("isCity")
            if(!isCity){
                this.$router.go(0)
                sessionStorage.setItem("isCity", false)
            }
        }
    },
    created(){
        sessionStorage.setItem("authTest", this.authTest)
        this.handlerChangeIsCity()
    }
}
</script>

<style lang="scss">
    .moviebox{
        overflow: hidden;
    }
</style>