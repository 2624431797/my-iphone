<template>
    <section class="mationdetailcardbox">
        <div v-if="!mationlist" class="mloading"></div>
        <div v-else class="mationdetailcard">
            <div class="mationdetailcard-title">
                <p>《 {{mationlist.title}} 》</p>
                <span>{{handlerGetTime(mationlist.time)}}</span>
            </div>
            <div class="mationdetailcard-container">
                <b></b>
                <div class="mationdetailcard-paragraph1">
                    <span>{{mationlist.paragraph1}}</span>
                </div>
                <b></b>
                <div class="mationdetailcard-bigimg">
                    <img :src="mationlist.bigImg1" alt="加载失败">
                </div>
                <b></b>
                <div class="mationdetailcard-paragraph2">
                    <span>{{mationlist.paragraph2}}</span>
                </div>
                <b></b>
                <div class="mationdetailcard-smaimg">
                    <img :src="mationlist.smaImg1" alt="加载失败">
                </div>
                <b></b>
                <div class="mationdetailcard-paragraph3">
                    <span>{{mationlist.paragraph3}}</span>
                </div>
                <b></b>
                <div class="mationdetailcard-smaimg">
                    <img :src="mationlist.bigImg2" alt="加载失败">
                </div>
                <b></b>
                <div class="mationdetailcard-paragraph3">
                    <span>{{mationlist.paragraph4}}</span>
                </div>
                <b></b>
                <div class="mationdetailcard-smaimg">
                    <img :src="mationlist.bigImg3" alt="加载失败">
                </div>
                <b></b>
                <div class="mationdetailcard-paragraph3">
                    <span>{{mationlist.paragraph5}}</span>
                </div>
                <b></b>
                <div class="mationdetailcard-smaimg">
                    <img :src="mationlist.smaImg2" alt="加载失败">
                </div>
                <b></b>
                <div class="mationdetailcard-paragraph3">
                    <span>{{mationlist.paragraph6}}</span>
                </div>
                <b></b>
                <div class="mationdetailcard-smaimg">
                    <img :src="mationlist.bigImg4" alt="加载失败">
                </div>
            </div>
            <div class="mationdetailcard-link">
                <b></b>
                <div class="mationdetailcard-link-img">
                    <img src="../../assets/640.gif" alt="">
                    <div>
                        <a href="/">立即购票</a>
                    </div>
                </div>
                <b></b>
                <i>[文章图片素材来自网络，若有侵权，请联系我方删除。]</i>
                <b></b>
            </div>
        </div>
    </section>
</template>

<script>
import { getMationDetail } from "@/services"

export default {
    data(){
        return {
            realm : "",
            mationlist : null
        }
    },
    methods : {
        handlerGetId(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.realm = billCode[2]
        },
        handlerGetCard(){
            this.handlerGetId()
            let id = this.realm
            getMationDetail(id).then(res => {
                this.mationlist = res.data.mationlist
            })
        },
        handlerGetTime(para){
            return this.$moment(para).format('YYYY-MM-DD')
        }
    },
    created(){
        this.handlerGetCard()
    }
}
</script>

<style lang="scss">
    .mationdetailcard{
        padding: 20px 16px;
        b{
            display: block;
            height: 20px;
            background: #fff;
        }
        .mationdetailcard-title{
            p{
                font-size: 20px;
                font-weight: bold;
                margin: 0 0 14px 10px;
            }
            span{
                font-size: 16px;
                margin-left: 20px;
                color: rgba(0, 0, 0, 0.5);
            }
        }
        .mationdetailcard-container{
            color: #333;
            text-indent: 34px;
            span{
                line-height: 30px;
                font-size: 16px;
                letter-spacing: 1px;
            }
        }
        .mationdetailcard-link{
            height: 160px;
            .mationdetailcard-link-img{
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width: 208px;
                    height: 100px;
                }
                div{
                    width: 208px;
                    height: 44px;
                    line-height: 44px;
                    text-align: center;
                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    background-color: rgb(0, 0, 0);
                    a{
                        color: #fff;
                        font-size: 16px;
                    }
                }
            }
            i{
                color: rgb(136, 136, 136);
                letter-spacing: 0.54px;
                font-family: 宋体;
                font-size: 11px;
            }
        }
    }
</style>