<template>
    <section class="moviedetailheaderbox">
        <mt-header :title="iTitle">
            <div slot="left"  @click="handlerReload">
                <mt-button icon="back">返回</mt-button>
            </div>
        </mt-header>
    </section>
</template>

<script>
import { getMovieDetail } from "@/services"

export default {
    data(){
        return {
            realm : "",
            iTitle : ""
        }
    },
    methods : {
        handlerRealm(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.realm = billCode[2]
        },
        handlerTitle(){
            let id = this.realm
            getMovieDetail(id).then(res => {
                this.iTitle = res.data.userlist.title
            })
        },
        handlerReload(){
            this.$router.go(-1)
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