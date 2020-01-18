<template>
    <section class="cartcarderbox">
        <!-- <div class="cartcarder-nothing">
            <img src="../../../assets/nothing.png" alt="">
            <span>您最近还没有新订单，赶快去下一单吧</span>
        </div> -->
        <div class="cardcarder-container"> 
            <van-card
                num=" 2"
                price=" 2.00"
                desc="描述信息"
                title="商品标题"
                thumb="http://img0.imgtn.bdimg.com/it/u=4164473108,3785518322&fm=26&gp=0.jpg"
            >
                <div slot="tags">
                    <van-tag plain type="danger">标签</van-tag>
                    <van-tag plain type="danger">标签</van-tag>
                </div>
                <div slot="footer">
                    <van-button size="mini">评价</van-button>
                    <van-button size="mini">删除</van-button>
                </div>
            </van-card>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .cartcarderbox{
        width: 100%;
        .cartcarder-nothing{
            text-align: center;
            img{
                width: 150px;
                height: 150px;
                margin: 150px auto 20px;
            }
            span{
                color: #333;
                font-family: "微软雅黑";
            }
        }
        .cardcarder-container{
            .van-card{
                border-bottom: 1px solid #ccc;
                border-right: 1px dashed #f5f5f5;
                .van-card__header{
                    margin-bottom: 10px;
                    .van-card__thumb{
                        display: flex;
                        width: 100px;
                        height: 120px;
                        img{
                            object-fit: cover!important;
                        }
                    }
                    .van-card__content{
                        min-height: 120px;
                        div:nth-child(1){
                            line-height: 32px;
                            .van-card__title{
                                font-size: 16px;
                                font-weight: bold;
                            }
                        }
                        .van-card__bottom{
                            line-height: 33px;
                            .van-card__price{
                                font-size: 16px;
                                font-weight: bold;
                            }
                        }
                    }
                }
                .van-card__footer{
                    height: 30px;
                    button{
                        min-width: 60px;
                        height: 30px;
                        margin-left: 15px;
                        border-radius: 20px;
                    }
                    button:nth-child(1){
                        color: #ff5f16;
                        border: 1px solid #ff5f16;
                    }
                    button:nth-child(2){
                        color: #e54847;
                        border: 1px solid #e54847;
                    }
                }
            }
        }
    }
</style>