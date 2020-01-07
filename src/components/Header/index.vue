<template>
    <section class="headerbox">
        <mt-header title="电影">
            <mt-button 
                class="header-city el-icon-place" 
                v-if="iStatus"
                slot="left"
            >
                <router-link to="/appcity">
                    {{newcityname}} <i class="el-icon-arrow-down" />
                </router-link>
            </mt-button>
            <mt-button 
                class="header-more" 
                icon="more" 
                slot="right" 
                @click="handlerIsShow"
            ></mt-button>
        </mt-header>
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </section>
</template>

<script>
export default {
    data(){
        return {
            actions : [
                {name : "首页", method : ""},
                {name : "登录", method : ""},
                {name : "订单", method : ""},
                {name : "我的", method : ""},
            ],
            sheetVisible : false,
            newcityname : "",
            iStatus : false,
        }
    },
    methods : {
        handlerIsShow(){
            this.sheetVisible = !this.sheetVisible
        },
        handlerGetCity(){
            this.newcityname = sessionStorage.getItem("app-city")
        },
        handlerScrollAuto(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop >= 380 && !this.iStatus){
                this.iStatus = true
            }
            else if(scrollTop < 380 && this.iStatus){
                this.iStatus = false
            } 
        }
    },
    created(){
        this.handlerGetCity()
        window.addEventListener("scroll", this.handlerScrollAuto)
    },
    beforeDestroy(){
        window.removeEventListener("scroll", this.handlerScrollAuto)
    }
}
</script>

<style lang="scss">
    .headerbox{
        position: fixed;
        width: 100%;
        z-index: 9999;
        .mint-header{
            width: 100%;
            color: #fff;
            font-size: 16px;
            background: #e54847;
            border-bottom: 1px solid #e54847;
            .header-city{
                margin-left: 10px;
                .mint-button-text{
                    a{
                        font-size: 14px;
                        color: #fff;
                    }
                }
            }
            .header-more{
                margin-right: 7px;
                i{
                    font-size: 18px;
                    font-weight: bold;
                }
            }
        }
        .mint-actionsheet{
            li{
                font-size: 16px;
            }
            a{
                font-size: 16px;
            }
        }
    }
</style>