<template>
    <section class="couponlistbox">
        <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="handlerOnChange"
            @exchange="handlerOnExchange"
            :show-close-button="false"
        />
    </section>
</template>

<script>
const coupon = {
    available: 1,
    condition: '无使用门槛\n最多优惠12元',
    description : '可用',
    reason: '不可用',
    value: 150,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '1.5',
    unitDesc: '元'
}

export default {
    data() {
        return {
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon]
        }
    },
    methods: {
        handlerInitDate(){
            const coupon = {
                available: 1,
                condition: '无使用门槛\n最多优惠12元',
                reason: '',
                value: 150,
                name: '优惠券名称',
                startAt: 1489104000,
                endAt: 1514592000,
                valueDesc: '1.5',
                unitDesc: '元'
            }
        },
        handlerOnChange(index) {
            this.chosenCoupon = index
        },
        handlerOnExchange(code) {
            this.coupons.push(coupon)
        }
    },
    created(){
        //this.handlerInitDate()
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
                                background-size: 65px 65px;
                                background-image: url('../../../assets/expired.png');
                                background-position: top 7px right 7px;
                                background-repeat: no-repeat;
                            }
                        }
                    }
                }
            }
        }
    }
</style>