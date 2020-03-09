<template>
    <section class="userheaderbox">
        <div class="userheader">
            <mt-header :title="ititle">
                <div slot="left"  @click="handlerReload">
                    <mt-button icon="back">返回</mt-button>
                </div>
            </mt-header>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            realm : "",
            ititle : "登录"
        }
    },
    methods : {
        handlerReload(){
            this.$router.go(-1)
        },
        handlerRealm(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.realm = billCode[1]
        },
        handlerTitle(){
            if(this.realm === "applogin") return this.ititle = "登录"; return this.ititle = "注册"
        }
    },
    created(){
        this.handlerRealm()
        this.handlerTitle()
    }
}
</script>

<style lang="scss">
    .mint-header{
        width: 100%;
        height: 40px;
        color: #fff;
        background: #ff7426;
        border-bottom: 1px solid #e54847;
        .mint-header-title{
            font-size: 15px;
        }
        .mint-button-text{
            font-size: 14px;
            line-height: 16px;
        }
    }
</style>