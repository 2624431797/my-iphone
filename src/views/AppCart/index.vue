<template>
    <section class="appcartbox">
        <CartHeader />
        <CartCarder />
    </section>
</template>

<script>
import CartHeader from "@/components/Cart/CartHeader"
import CartCarder from "@/components/Cart/CartCarder"

export default {
    components : {
        CartHeader,
        CartCarder
    }
}
</script>

<style lang="scss">
    
</style>