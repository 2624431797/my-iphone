<template>
    <section class="moviegoodscardbox">
        <div v-if="!good" class="loading"></div>
        <div v-else>
            <div class="moviegoodscard-info">
                <div class="moviegoodscard-info-img">
                    <img :src="good.imgUrl" alt="加载失败">
                </div>
                <div class="moviegoodscard-info-sub">
                    <p>{{good.title}}</p>
                    <i>{{good.person}}</i>
                    <strong>有效期: {{good.time}}</strong>
                    <b>可用时间: {{good.keep}}</b>
                    <div class="moviegoodscard-info-sub-price">
                        <span class="moviegoodscard-info-sub-price-new" style="margin-right: 10px;">{{priceNew}} 元</span>
                        <span class="moviegoodscard-info-sub-price-old">{{good.old}} 元</span>
                    </div>
                </div>
            </div>
            <div class="moviegoodscard-deal">
                <p>套餐详情:</p>
                <ul class="moviegoodscard-deal-container">
                    <li v-for="item in good.detail" :key="item.id">
                        <span>{{item.title}}</span>
                        <b>数量: {{item.num}}</b>
                    </li>
                </ul>
            </div>
            <div class="moviegoodscard-inum">
                <p>数量:</p>
                <div class="moviegoodscard-inum-container">
                    <van-stepper 
                        v-model="stepperNum" 
                        input-width="80px" 
                        button-size="32px" 
                        @change="handlerOnChange(stepperNum)"
                    ></van-stepper>
                </div>
            </div>
            <div class="moviegoodscard-line">
                <p>提示信息:</p>
                <p>使用时间: 请在影城卖品部营业时间兑换。</p>
            </div>
            <div class="moviegoodscard-mobile">
                <van-cell-group>
                    <van-field
                        v-model="phone"
                        label="手机号"
                        placeholder="请输入手机号"
                        clearable
                        ref="mobilebox"
                    >
                        <van-button slot="button" size="small" @click="handlerFocus">
                            <i class="iconfont icon-icon"></i>
                        </van-button>
                    </van-field>
                </van-cell-group>
            </div>
        </div>
    </section>
</template>

<script>
import { getMovieGoodsById } from "@/services"

export default {
    data(){
        return {
            good : null,
            realm : "",
            stepperNum : 1,
            phone : "",
            priceNew : null
        }
    },
    methods : {
        handlerGetGood(){
            let id = this.realm
            getMovieGoodsById(id).then(res => {
                this.good = res.data.goods
                this.phone = res.data.goods.mobile
                this.priceNew = res.data.goods.new
                this.$store.commit("changePriceGoods", { price : this.priceNew })
            })
        },
        handlerById(){
            this.realm = this.$route.params.id
        },
        handlerFocus(){
            this.$refs.mobilebox.focus()
        },
        handlerOnChange(item){
            const priceSum = this.priceNew * item
            this.$store.commit("changePriceGoods", { price : priceSum })
        }
    },
    mounted(){
        this.handlerById()
        this.handlerGetGood()
    }
}
</script>

<style lang="scss">
    .moviegoodscardbox{
        width: 100%;
        .moviegoodscard-info{
            height: 180px;
            padding: 14px;
            margin-bottom: 25px;
            color: #999;
            background: #fff;
            .moviegoodscard-info-img{
                width: 150px;
                height: 150px;
                float: left;
                margin-right: 10px;
                border-radius: 5px;
                overflow: hidden;
            }
            .moviegoodscard-info-sub{
                display: flex;
                float: left;
                flex-direction: column;
                p{
                    margin-bottom: 10px;
                    color: #000;
                    font-weight: bold;
                    font-family: "微软雅黑";
                }
                i{
                    width: 36px;
                    margin-bottom: 10px;
                    text-align: center;
                    line-height: 24px;
                    font-size: 12px;
                    color: #fff;
                    font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
                    background: #f90;
                    border-radius: 5px;
                }
                b{
                    margin-top: 5px;
                }
                .moviegoodscard-info-sub-price{
                    margin-top: 10px;
                    .moviegoodscard-info-sub-price-new{
                        color: #f03d37;
                        font-size: 20px;
                    }
                    .moviegoodscard-info-sub-price-old{
                        text-align: justify;
                        word-break: break-all;
                        text-decoration: line-through;
                    }
                }
            }
        }
        .moviegoodscard-deal{
            padding: 14px;
            margin-bottom: 25px;
            background: #fff;
            p{
                font-weight: bold;
                margin-bottom: 10px;
            }
            .moviegoodscard-deal-container{
                li{
                    display: flex;
                    justify-content: space-between;
                    color: #999;
                    line-height: 22px;
                }
            }
        }
        .moviegoodscard-inum{
            display: flex;
            justify-content: space-between;
            padding: 14px;
            margin-bottom: 25px;
            background: #fff;
            p{
                font-weight: bold;
                line-height: 32px;
            }
            .moviegoodscard-inum-container{
                input{
                    border: 2px solid #DDD8CE;
                    margin: 0 6px;
                }
                .van-stepper__minus, .van-stepper__plus{
                    color: #e54847;
                    border: 1px solid #e54847;
                }
                .van-stepper__minus--disabled{
                    color: #999!important;
                    border: none;
                    background: #dcdcdc!important;
                }
                .van-stepper__minus:active, .van-stepper__plus:active{
                    color: #fff;
                    background: #e54847;
                }
            }
        }
        .moviegoodscard-line{
            padding: 14px;
            margin-bottom: 25px;
            background: #fff;
            p:nth-child(1){
                font-weight: bold;
                margin-bottom: 10px;
            }
            p:nth-child(2){
                color: #999;
            }
        }
        .moviegoodscard-mobile{
            height: 50px;
            .van-cell__title{
                line-height: 30px;
            }
            button{
                min-width: 30px;
                border: #999 solid 1px;
                border-radius: 50%;
            }
        }
    }
</style>