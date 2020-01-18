<template>
    <section class="couponbox">
        <CouponHeader />
        <CouponList />
    </section>
</template>

<script>
import CouponHeader from "@/components/Coupon/CouponHeader"
import CouponList from "@/components/Coupon/CouponList"

export default {
    components : {
        CouponHeader,
        CouponList
    }
}
</script>

<style>
    
</style>