<template>
    <section class="minebox">
        <MineLogin />
        <MineOrderTab />
        <MineCardList />
        <Tabbar /> 
    </section>
</template>

<script>
import MineLogin from "@/components/MineLogin"
import MineOrderTab from "@/components/MineOrderTab"
import MineCardList from "@/components/MineCardList"
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

</style>