<template>
    <section class="city-header">
        <mt-header title="当前城市">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .mint-header{
        height: 44px;
        color: #333;
        background: #fff;
        .mint-header-title{
            font-size: 16px;
        }
    }
</style>