<template>
    <section class="mineordertabbox">
        <div class="mineorder-movie">
            <i class="iconfont icon-dianyingpiao" style="color: #ffc82f"></i>
            <span>电影订单</span>
        </div>
        <div class="mineorder-goods">
            <i class="iconfont icon-dingdan" style="color: #c6da5c"></i>
            <span>商品订单</span>
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
            display: flex;
            width: 50%;
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
</style>