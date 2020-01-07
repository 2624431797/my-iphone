<template>
    <section class="mationbox">
        <MationBanner />
        <MationList />
        <Tabbar />
    </section>
</template>

<script>
import MationBanner from "@/components/MationBanner"
import MationList from "@/components/MationList"
import Tabbar from "@/components/Tabbar"

export default {
    components : {
        MationBanner,
        MationList,
        Tabbar
    }
}
</script>

<style>

</style>