<template>
    <section class="minebox">
        <MineLogin />
        <MineOrderTab />
        <MineCardList />
        <Tabbar /> 
    </section>
</template>

<script>
import MineLogin from "@/components/Mine/MineLogin"
import MineOrderTab from "@/components/Mine/MineOrderTab"
import MineCardList from "@/components/Mine/MineCardList"
import Tabbar from "@/components/Tabbar"

export default {
    components : {
        MineLogin,
        MineOrderTab,
        MineCardList,
        Tabbar
    }
}
</script>

<style lang="scss">
    .minebox{
        background: #fff;
    }
</style>