<template>
    <div class="notfound">
        <div class="not_img">
            <img src="../../assets/404.jpg" alt="">
        </div>
        <div class="not_tit">
            <p>（T ^ T）抱歉，迷路了</p>
        </div>
        <div class="not_btn">
            <a href="/#/movie">返回首页</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .notfound{
        display: flex;
        flex-direction: column;
        align-items: center;
        .not_img{
            margin-top: 50px;
            img{
                width: 100%;
                height: 240px;
            }
        }
        .not_tit{
            margin-top: 50px;
            p{
                font-size: 20px;
                font-weight: bold;
            }
        }
        .not_btn{
            margin-top: 30px;
            a{
                display: block;
                width: 80px;
                height: 30px;
                background: #e54847;
                border-radius: 10px;
                color: #fff;
                font-size: 14px;
                line-height: 30px;
                text-align: center;
            }
        }
    }
</style>