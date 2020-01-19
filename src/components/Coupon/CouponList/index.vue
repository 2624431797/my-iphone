<template>
    <section class="couponlistbox">
        <van-coupon-list
            :coupons="coupon"
            :disabled-coupons="disabledCoupons"
            :chosen-coupon="chosenCoupon"
            @change="handlerOnChange"
            @exchange="handlerOnExchange"
            :show-close-button="false"
        />
    </section>
</template>

<script>
import { getMineCoupon } from "@/services"

export default {
    data() {
        return {
            chosenCoupon: -1,
            coupon: [{
                condition: '无使用门槛\n最多优惠12元',
                description : '可用',
                value: 150,
                name: '优惠券名称',
                startAt: 1489104000,
                endAt: 1514592000,
                valueDesc: '1.5',
                unitDesc: '元'
            }, {
                condition: '无使用门槛\n最多优惠12元',
                description : '可用',
                value: 150,
                name: '优惠券名称',
                startAt: 1489104000,
                endAt: 1514592000,
                valueDesc: '1.5',
                unitDesc: '元'
            }],
            disabledCoupons: [{
                condition: '无使用门槛\n最多优惠12元',
                reason: '不可用',
                value: 150,
                name: '优惠券名称',
                startAt: 1489104000,
                endAt: 1514592000,
                valueDesc: '1.5',
                unitDesc: '元'
            }],
            select : "useable",
            minelist : []        }
    },
    methods: {
        handlerInitDate(){
            let {select} = this
            getMineCoupon(select).then(res => {
                this.minelist = this.minelist.concat(res.data.minelist)
            })
        },
        handlerOnChange(index){
            this.chosenCoupon = index
        },
        handlerOnExchange(code){
            this.coupons.push(coupon)
        }
    },
    created(){
        this.handlerInitDate()
    }
}
</script>

<style lang="scss">
    .couponlistbox{
        width: 100%;
        .van-coupon-list{
            background: #f3f3f3;
            .van-coupon-list__exchange-bar{
                .van-cell{
                    .van-cell__value{
                        border: 1px solid #ccc;
                        border-radius: 15px;
                    }
                }
                button{
                    font-weight: bold;
                }
            }
            .van-tabs{
                .van-tabs__wrap{
                    .van-tab--active{
                        color: #ee0a24;
                    }
                }
                .van-tabs__content{
                    .van-tab__pane{
                        .van-coupon-list__empty{
                            img{
                                margin: 0 auto;
                            }
                        }
                        .van-coupon__head{
                            margin-right: 10px;
                        }
                    }
                    div:nth-child(2){
                        .van-coupon-list__list{
                            .van-coupon__content{
                                background-size: 80px 80px;
                                background-image: url('../../../assets/expired.png');
                                background-position: top 20px right 10px;
                                background-repeat: no-repeat;
                            }
                        }
                    }
                }
            }
        }
    }
</style>