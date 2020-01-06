<template>
    <section class="tabbarbox">
        <Tabitem
            v-for="tab in tabs"
            :key="tab.id"
            :tit="tab.tit"
            :mark="tab.mark"
            :cla="tab.cla"
            :sel="selected"
        ></Tabitem>
    </section>
</template>

<script>
import Tabitem from "./tabitem"

export default {
    data(){
        return {
            selected : "",
            tabs : [
                {id : 1, tit : "电影", mark : "movie", cla : "icon-dianying"},
                {id : 2, tit : "影院", mark : "cinema",  cla : "icon-yingyuan"},
                {id : 3, tit : "资讯", mark : "mation",  cla : "icon-zixun"},
                {id : 4, tit : "我的", mark : "mine",  cla : "icon-wode"},
            ],
        }
    },
    components : {
        Tabitem
    },
    mounted(){
        const approval = window.location.hash
        const billCode = approval.split("/")
        this.selected = billCode[1]
    }
}
</script>

<style lang="scss">
    .tabbarbox{
        position: fixed;
        display: flex;
        width: 100%;
        height: 60px;
        bottom: 0px;
        justify-content: space-around;
        background: #fff;
        border-top: .5px solid #d8d8d8;
    }
</style>