<template>
    <section class="moviegoodsbox">
        <MovieGoodsHeader />
        <MovieGoodsCard />
        <MovieGoodsBtn />
    </section>
</template>

<script>
import MovieGoodsHeader from "@/components/MovieGoods/MovieGoodsHeader"
import MovieGoodsCard from "@/components/MovieGoods/MovieGoodsCard"
import MovieGoodsBtn from "@/components/MovieGoods/MovieGoodsBtn"

export default {
    components : {
        MovieGoodsHeader,
        MovieGoodsCard,
        MovieGoodsBtn
    }
}
</script>

<style lang="scss" scoped>
    body{
        height: 100%;
        background: #f0efed;
    }
</style>