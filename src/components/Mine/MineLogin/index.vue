<template>
    <section class="mineloginbox">
        <div class="minelogin-container">
            <div class="minelogin-img">
                <img src="../../../assets/user.png" alt="">
            </div>
            <div class="minelogin-name">
                <router-link to="/applogin">    
                    <span>立即登录</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .mineloginbox{
        .minelogin-container{
            display: flex;
            width: 100%;
            height: 220px;
            justify-content: center;
            align-items: center;
            background: url('../../../assets/mine-bg.png');
            .minelogin-img{
                width: 80px;
                height: 80px;
                border-radius: 50%;
                overflow: hidden;
            }
            .minelogin-name{
                width: 50%;
                span{
                    font-size: 16px;
                    color: #fff;
                    margin-left: 20px;
                }
            }
        }
    }
</style>