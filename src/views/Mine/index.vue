<template>
    <section class="minebox">
        <MineLogin />
        <Tabbar /> 
    </section>
</template>

<script>
import MineLogin from "@/components/MineLogin";
import Tabbar from "@/components/Tabbar"

export default {
    components : {
        MineLogin,
        Tabbar
    }
}
</script>

<style lang="scss">

</style>