<template>
    <section class="searchbtnbox">
        <div class="search-container">
            <router-link tag="div" to="/appsearch">
                <i class="el-icon-search"></i>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .searchbtnbox{
        position: absolute;
        top: 50px;
        right: 25px;
        z-index: 999;
        .search-container{
            min-width: 40px;
            height: 30px;
            color: #fff;
            font-size: 14px;
            line-height: 30px;
            text-align: center;
            padding: 0 5px;
            z-index: 999;
            border-radius: 15px;
            background: rgba(0, 0, 0, .3);
            .el-icon-search{
                font-size: 16px;
                color: #fff;
            }
        }
    }
</style>