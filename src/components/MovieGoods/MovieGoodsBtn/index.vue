<template>
    <section class="moviegoodsbtnbox">
        <div class="moviegoodsbtn">
            <div class="moviegoodsbtn-top">
                <div class="moviegoodsbtn-top-left">
                    <i class="iconfont icon-zhengque"></i>
                    <span>随时可退</span>
                </div>
                <div class="moviegoodsbtn-top-right">
                    <b>小计</b>
                    <span style="margin-left: 10px;">￥{{priceGoodsNow}}</span>
                </div>
            </div>
            <div class="moviegoodsbtn-bot">
                <a href="JavaScript: ;">确认支付</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            priceGoods : null
        }
    },
    computed : {
        priceGoodsNow : function(){
            return this.priceGoods = this.$store.state.myGoods.priceGoods
        }
    }
}
</script>

<style lang="scss">
    .moviegoodsbtn{
        position: fixed;
        width: 100%;
        height: 98px;
        padding: 14px 14px 0;
        bottom: 0;
        .moviegoodsbtn-top{
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
            .moviegoodsbtn-top-left{
                color: #6bbd00;
                i{
                    margin-right: 5px;
                }
            }
            .moviegoodsbtn-top-right{
                b{
                    font-weight: bold;
                }
                span{
                    font-size: 18px;
                    color: #33c1af;
                }
            }
        }
        .moviegoodsbtn-bot{
            display: flex;
            height: 50px;
            border-radius: 20px;
            overflow: hidden;
            a{
                flex: 1;
                text-align: center;
                line-height: 50px;
                color: #fff;
                font-size: 18px;
                background: #f90;
            }
        }
    }
</style>