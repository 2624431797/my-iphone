<template>
    <section class="comingbox">
        <MovieList :select="select" />
    </section>
</template>

<script>
import MovieList from "@/components/MovieList"

export default {
    data(){
        return {
            select : "",
        }
    },
    components : {
        MovieList
    },
    methods : {
        handlerSelect(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.select = billCode[2]
        }
    },
    beforeRouteLeave(to, from, next){
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        next()
    },
    activated(){
        this.handlerSelect()
        window.scrollTo(0, this.scrollTop)
    }
}
</script>

<style>

</style>