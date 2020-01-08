<template>
    <section class="appsearchbox">
        <AppSearchHeader />
        <mt-search
            class="search-input"
            v-model="keyword"
            cancel-text="取消"
            placeholder="搜电影，搜影院"
        >
        </mt-search>
    </section>
</template>

<script>
import AppSearchHeader from "@/components/AppSearchHeader"

export default {
    data(){
        return {
            keyword : "",
        }
    },
    components : {
        AppSearchHeader
    }
}
</script>

<style lang="scss">
    .appsearchbox{
        width: 100%;
        .mint-searchbar{
            height: 50px;
            background-color: #f5f5f5;
            border-bottom: 1px solid #e5e5e5;
            .mint-searchbar-cancel{
                color: #e54847!important;
            }
        }
    }
</style>