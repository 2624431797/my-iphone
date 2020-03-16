<template>
    <section class="apppaybox">
        <div class="apppay">
            <AppPayHeader />
            <AppPayCard />
        </div>
    </section>
</template>

<script>
import AppPayHeader from "@/components/AppPay/AppPayHeader"
import AppPayCard from "@/components/AppPay/AppPayCard"

export default {
    components : {
        AppPayHeader,
        AppPayCard
    }
}
</script>

<style>

</style>