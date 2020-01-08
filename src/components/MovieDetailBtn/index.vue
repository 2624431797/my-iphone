<template>
    <section class="moviedetailbtnbox">
        <div class="moviedetailbtn-container">
            <router-link tag="div" :to="{name : 'moviepurchase', params : {id : movies.id}}">
                <a class="moviedetailbtn-container-btn" href="Javascript: ;">特惠选票</a>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .moviedetailbtnbox{
        width: 100%;
        .moviedetailbtn-container{
            position: fixed;
            display: flex;
            width: 100%;
            height: 60px;
            bottom: 0;
            justify-content: center;
            align-items: center;
            background: #fff;
            border-radius: 20px 20px 0 0;
            z-index: 999999;
            .moviedetailbtn-container-btn{
                display: block;
                width: 75%;
                height: 44px;
                color: #fff;
                font-size: 16px;
                text-align: center;
                line-height: 44px;
                border-radius: 20px;
                background-image: linear-gradient(-90deg, #fb3333, #ff5269);
                box-shadow: 0 0.06rem 0.12rem 0 rgba(251, 51, 51, .3);
            }
        }
    }
</style>