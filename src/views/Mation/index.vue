<template>
    <section class="mationbox">
        <MationBanner />
        <MationList />
        <Tabbar />
    </section>
</template>

<script>
import MationBanner from "@/components/Mation/MationBanner"
import MationList from "@/components/Mation/MationList"
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