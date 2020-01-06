<template>
    <section class="nowingbox">
        <MovieList :select="select"/>
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
    created(){
        this.handlerSelect()
    }
}
</script>

<style>

</style>