<template>
    <div 
        class="tabitembox"
        @click="clickItem"
    >
        <i class="tabicon iconfont" :class="[cla, {active : flag}]"></i>
        <span class="tabtit" :class="{active : flag}">{{tit}}</span>
    </div>
</template>

<script>
export default {
    props : ["tit", "cla", "mark", "sel"],
    methods : {
        clickItem(){
            this.$emit("changeSel", this.mark)
            this.$router.push("/" + this.mark)
        }
    },
    computed : {
        flag(){
            if(this.mark === this.sel) return true; return false;
        }
    },
}
</script>

<style lang="scss">
    .tabitembox{
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .tabicon{
            font-size: 22px;
            color: #333;
            margin-bottom: 5px;
        }
        .tabtit{
            font-size: 12px;
            color: #333;  
        }
        .active{
            color: #f03d37;
        }
    }
</style>