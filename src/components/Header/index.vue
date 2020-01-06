<template>
    <section class="headerbox">
        <mt-header title="电影"></mt-header>
    </section>
</template>

<script>
export default {

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
        }
        .el-dropdown{
            position: absolute;
            top: 10px;
            right: 20px;
            .el-icon-more{
                font-size: 22px;
                color: #fff;
            }    
        }
    }
    .el-dropdown-menu{
        top: 30px!important;
        left: 280px!important;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
        .el-dropdown-menu__item{
            padding: 0 25px;
        }
    }
</style>