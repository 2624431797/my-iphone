<template>
    <section class="citybox">
        <div class="city-container">
            <router-link tag="div" to="/appcity">
                <span v-if="!newcityname">潍坊</span>
                <span v-else>{{newcityname}}</span>
                <i 
                    style="margin-left: 5px;"
                    class="el-icon-arrow-down"
                ></i>
            </router-link>
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
    mounted(){
        this.newcityname = this.$route.params.nm
        this.newcityname = sessionStorage.getItem("app-city")
    },
}
</script>

<style lang="scss">
    .citybox{
        position: absolute;
        top: 50px;
        left: 25px;
        z-index: 999;
        .city-container{
            min-width: 80px;
            height: 30px;
            color: #fff;
            font-size: 14px;
            line-height: 30px;
            text-align: center;
            padding: 0 5px;
            z-index: 999;
            border-radius: 15px;
            background: rgba(0, 0, 0, .3);
        }
    }
</style>