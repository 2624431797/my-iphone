<template>
    <section class="minecardlistbox">
        <router-link to="/coupon">
            <mt-cell title="影券">
                <i slot="icon" class="iconfont icon-dianyingquan" style="color: #ff5f16"/>
                <b class="el-icon-arrow-right"></b>
            </mt-cell>
        </router-link>
        <mt-cell title="红包">
            <i slot="icon" class="iconfont icon-hongbao" style="color: #f03d37"/>
            <b class="el-icon-arrow-right"></b>
        </mt-cell>
        <mt-cell title="余额">
            <i slot="icon" class="iconfont icon-xinbaniconshangchuan-" style="color: #baa27a"/>
            <b class="el-icon-arrow-right"></b>
        </mt-cell>
        <mt-cell title="设置">
            <i slot="icon" class="iconfont icon-shezhi" style="color: #c6da5c"/>
            <b class="el-icon-arrow-right"></b>
        </mt-cell>
        <mt-cell title="客服">
            <i slot="icon" class="iconfont icon-kefu" style="color: #409eff"/>
            <b class="el-icon-arrow-right"></b>
        </mt-cell>
        <div v-if="isAuthLogin" @click="handlerOutLogin" class="out-btn">
            <span>退出登录</span>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            isAuthLogin : false,
        }
    },
    methods : {
        handlerOutLogin(){
            localStorage.removeItem("Flag")
            localStorage.removeItem("userName")
            localStorage.removeItem("userImg")
            this.$router.push("/")
        }
    },
    created(){
        this.isAuthLogin = localStorage.getItem("Flag")
    }
}
</script>

<style lang="scss">
    .minecardlistbox{
        width: 100%;
        .mint-cell{
            padding: 5px;
            .mint-cell-title{
                display: flex;
                color: #333;
                i{
                    font-size: 20px;
                    margin-right: 16px;
                }
                .mint-cell-text{
                    margin-top: 1px;
                }
            }
        }
        .out-btn{
            width: 100%;
            height: 44px;
            padding: 16px;
            border-top: #ccc 1px solid;
            background: #fff;
            span{
                color: #ff5f16;
                font-size: 15px;
                font-weight: bold;
            }
        }
    }
</style>