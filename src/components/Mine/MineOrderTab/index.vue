<template>
    <section class="mineordertabbox">
        <div class="mineorder-movie">
            <router-link to="/appcart" tag="div">
                <i class="iconfont icon-dianyingpiao" style="color: #ffc82f"></i>
                <span>电影订单</span>
            </router-link>
        </div>
        <div class="mineorder-goods">
            <router-link tag="div" to="/appgood">
                <i class="iconfont icon-dingdan" style="color: #c6da5c"></i>
                <span>商品订单</span>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .mineordertabbox{
        display: flex;
        height: 80px;
        justify-content: space-between;
        .mineorder-movie, .mineorder-goods{
            width: 50%;
            div{
                display: flex;
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                i{
                font-size: 26px;
                margin-bottom: 7px;
                }
                span{
                    color: #333;
                }
            }
        }
    }
</style>