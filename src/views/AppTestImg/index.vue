<template>
    <section class="apptestimgbox">
        <div class="apptestimg">
            <slide-verify 
                ref="slideblock"
                :w="360"
                :h="240"
                @success="handlerOnSuccess"
                @fail="handlerOnFail"
                :accuracy="accuracy"
                :slider-text="text"
            ></slide-verify>
        </div>
    </section>
</template>

<script>
import { Toast } from 'vant'

export default {
    data(){
        return {
            realm : "",
            text: '向右滑动验证',
            accuracy: 6,    //精确度
        }
    },
    methods: {
        handlerGetRealm(){
            this.realm = this.$route.params.realm
        },
        handlerOnSuccess(){
            Toast.success('验证成功')
            this.handlerGetRealm()
            if(this.realm === "applogin"){
                setTimeout(() => {
                    this.$router.push("/mine")
                }, 1800)
            }
            else if(this.realm === "appregister"){
                setTimeout(() => {
                    this.$router.push("/applogin")
                }, 1800)
            }
        },
        handlerOnFail(){
            Toast.fail('验证失败')
        }
    }
}
</script>

<style lang="scss">
    .apptestimg{
        width: 100%;
        height: 600px;
        .slide-verify{
            width: 360px!important;
            top: 160px;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }
        .slide-verify-slider{
            width: 360px!important;
        }
    }
</style>