<template>
    <section class="cinemasearchbox">
        <div class="cinemasearch">
            <div class="cinemasearch-city">
                <router-link to="/appcity" tag="div">
                    {{newcityname}} <i class="el-icon-arrow-down" />
                </router-link>
            </div>
            <div class="cinemasearch-search">
                <router-link 
                    to="/appsearch" 
                    tag="div" 
                    class="cinemasearch-search-content"
                >
                    <i class="el-icon-search" />
                    <span>搜影院</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            newcityname : "",
        }
    },
    methods : {
        handlerGetCity(){
            this.newcityname = sessionStorage.getItem("app-city")
        },
    },
    created(){
        this.handlerGetCity()
    }
}
</script>

<style lang="scss">
    .cinemasearchbox{
        width: 100%;
        .cinemasearch{
            position: fixed;
            display: flex;
            height: 44px;
            justify-content: space-between;
            align-items: center;
            top: 40px;
            left: 0;
            right: 0;
            background: #f5f5f5;
            border-bottom: 1px solid #e6e6e6;
            z-index: 999999;
            .cinemasearch-city{
                display: flex;
                width: 25%;
                height: 44px;
                justify-content: center;
                align-items: center;
                font-size: 15px;
                font-weight: bold;
            }
            .cinemasearch-search{
                width: 75%;
                height: 30px;
                margin: 0px 15px;
                border-radius: 5px;
                border: .5px solid #e6e6e6;
                .cinemasearch-search-content{
                    display: flex;
                    width: 100%;
                    height: 30px;
                    justify-content: center;
                    align-items: center;
                    color: #b2b2b2;
                    i{
                        margin-right: 4px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>