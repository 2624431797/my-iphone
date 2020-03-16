<template>
    <section class="apppaycardbox">
        <div class="apppaycard">
            <div class="apppaycard-price">
                <div>
                    <span>金额</span>
                </div>
                <div>
                    <b>{{priceTotal}} 元</b>
                </div>
            </div>
            <div class="apppaycard-way">
                <p class="apppaycard-way-title">请选择支付方式</p>
                <van-form class="apppaycard-way-pay" @submit="handlerOnSubmit">
                    <van-field 
                        left-icon="iconfont iconfont icon-zhifubaozhifu" 
                        class="alipay" 
                        name="checkbox" 
                        label="支付宝支付" 
                        label-width="75%"
                    >
                        <template #input>
                            <van-checkbox v-model="checkAlipay" shape="square" />
                        </template>
                    </van-field>
                    <van-field 
                        left-icon="iconfont iconfont icon-weixinzhifu2" 
                        class="wechat" 
                        name="checkbox" 
                        label="微信支付" 
                        label-width="75%"
                    >
                        <template #input>
                            <van-checkbox v-model="checkWechat" shape="square" />
                        </template>
                    </van-field>
                    <div class="apppaycard-way-pay-btn" style="margin: 16px;">
                        <van-button 
                            round 
                            block 
                            type="info" 
                            native-type="submit"
                        >
                            <span>立即支付</span>
                        </van-button>
                    </div>
                </van-form>
            </div>
        </div>
    </section>
</template>

<script>
import { Dialog, Toast } from 'vant'

export default {
    data(){
        return {
            checkAlipay: false,
            checkWechat: false,
            payWay: "",
            priceTotal : 0
        }
    },
    methods : {
        handlerOnSubmit(){
            if(this.checkAlipay){
                Dialog.alert({
                    message: '支付中'
                })
            }
            else if(this.checkAlipay){
                Dialog.alert({
                    message: '支付中'
                })
            }
            else if(!this.checkAlipay && !this.checkAlipay){
                Toast.fail('至少选择一种支付方式')
            }
        },
    },
    created(){
        //vuex
        this.priceTotal = this.$store.state.mySeats.seatsTotal
        //sessionStorage
        this.priceTotal = sessionStorage.getItem("MoviePriceSumReal")
    }
}
</script>

<style lang="scss">
    .apppaycard{
        width: 100%;
        padding: 15px 20px;
        color: #333;
        .apppaycard-price{
            display: flex;
            height: 44px;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            b{
                color: #e54847;
            }
        }
        .apppaycard-way{
            width: 100%;
            .apppaycard-way-title{
                height: 44px;
                line-height: 44px;
                font-size: 16px;
            }
            .apppaycard-way-pay{
                .van-field{
                    padding: 16px 10px;
                    .van-field__left-icon{
                        i{
                            font-size: 30px;
                            margin-right: 10px;
                        }
                    }
                }
                .alipay{
                    .van-field__left-icon{
                        i{
                            color: #1989fa;
                        }
                    }
                }
                .wechat{
                    .van-field__left-icon{
                        i{
                            color: #07c160;
                        }
                    }
                }
                .apppaycard-way-pay-btn{
                    position: fixed;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    button{
                        background: #ff7426;
                        border: 1px solid #ff7426;
                    }
                }
            }
        }
    }
</style>