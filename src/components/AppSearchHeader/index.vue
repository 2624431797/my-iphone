<template>
    <section class="AppSearchHeaderbox">
        <mt-header title="搜索">
            <div slot="left"  @click="$router.go(-1)">
                <mt-button icon="back">返回</mt-button>
            </div>
        </mt-header>
    </section>
</template>

<script>
export default {

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
            font-size: 16px;
        }
        .mint-button-text{
            font-size: 14px;
        }
        .mint-button{
            .mint-button-text{
                line-height: 24px;
            }
        }
    }
</style>