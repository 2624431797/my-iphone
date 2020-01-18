<template>
    <section class="couponheaderbox">
        <mt-header title="我的影券">
            <div slot="left"  @click="handlerReload">
                <mt-button icon="back">返回</mt-button>
            </div>
        </mt-header>
    </section>
</template>

<script>
export default {
    methods : {
        handlerReload(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">
    .mint-header{
        width: 100%;
        height: 40px;
        color: #fff;
        background: #e54847;
        border-bottom: 1px solid #e54847;
        .mint-header-title{
            font-size: 14px;
        }
        .mint-button-text{
            font-size: 14px;
            line-height: 16px;
        }
    }
</style>