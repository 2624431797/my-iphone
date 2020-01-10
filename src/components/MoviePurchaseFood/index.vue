<template>
    <section class="moviepurchasefoodbox">
        <div class="moviepurchasefood-shopfood">
            <div class="moviepurchasefood-shopfood-foodwarp">
                <div class="moviepurchasefood-shopfood-foodwarp-title">
                    <p>影院超值套餐</p>
                </div>
                <div class="moviepurchasefood-shopfood-foodwarp-content">
                    <div 
                        class="moviepurchasefood-shopfood-foodwarp-content-foodlist"
                        v-for="item in food"
                        :key="item.id"
                    > 
                        <div class="moviepurchasefood-shopfood-foodwarp-content-foodlist-fooditem">
                            <div class="food_img">
                                <img :src="item.imgUrl" alt="加载失败">
                            </div>
                            <div class="food_txt">
                                <div class="food_tit">
                                    <span>{{item.title}}</span>
                                </div>
                                <div class="food_mb">
                                    <div class="food_price">
                                        <span>￥{{item.price}}</span>
                                    </div>
                                    <div class="food_btn">
                                        <b>{{item.iSum | handlerShowNum}}已买</b>
                                        <a href="Javascript: ;">购买</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { getMoviePurchaseFood } from "@/services"

export default {
    data(){
        return {
            food : null,
            realm : ""
        }
    },
    filters : {
        handlerShowNum(n){
            if(n >= 10000){
                n = n / 10000 
                n = n.toFixed(1)
                n = n + "万"
            }
            return n
        }
    },
    methods : {
        handlerRealm(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.realm = billCode[2]
        },
        handlerGetFood(){
            let id = this.realm
            getMoviePurchaseFood(id).then(res => {
                this.food = res.data.foodlist
            })
        }
    },
    created(){
        this.handlerRealm()
        this.handlerGetFood()
    }
}
</script>

<style lang="scss">
    .moviepurchasefoodbox{
        .moviepurchasefood-shopfood{
            background: #fff;
            .moviepurchasefood-shopfood-foodwarp{
                margin: 0 10px;
                .moviepurchasefood-shopfood-foodwarp-title{
                    height: 45px;
                    border-bottom: 1px solid #dedede;
                    p{
                        line-height: 45px;
                        height: 45px;
                        font-size: 15px;
                        color: #666;
                    }
                }
                .moviepurchasefood-shopfood-foodwarp-content{
                    .moviepurchasefood-shopfood-foodwarp-content-foodlist{
                        padding: 13px 10px;
                        border-bottom: 1px solid #dedede;
                        .moviepurchasefood-shopfood-foodwarp-content-foodlist-fooditem{
                            height: 120px;
                            .food_img{
                                float: left;
                                img{
                                    width: 100px;
                                    height: 100px;
                                }
                            }
                            .food_txt{
                                display: flex;
                                width: 220px;
                                height: 100px;
                                flex-direction: column;
                                justify-content: space-between;
                                float:right;
                                .food_tit{
                                    span{
                                        font-size: 14px;
                                        line-height: 18px;
                                        color: #333;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                    }
                                }
                                .food_mb{
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: space-between;
                                    .food_price{
                                        span{
                                            color: #f03d37;
                                            font-size: 16px;
                                            line-height: 28px;
                                        }
                                    }
                                    .food_btn{
                                        display: flex;
                                        flex-direction: row;
                                        b{
                                            line-height: 28px;
                                            font-size: 12px;
                                            color: #999;
                                            margin-right: 7px;
                                        }
                                        a{
                                            padding: 6px 10px;
                                            font-size: 12px;
                                            border-radius: 5px;
                                            text-align: center;
                                            color: #fff;
                                            background-color: #f03d37;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>