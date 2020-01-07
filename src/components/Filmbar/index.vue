<template>
    <section class="filmbarbox">
        <div class="filmbar" :class="{fixtop : fixStatus}">
            <div
                v-for="bar in bars"
                :key="bar.id"
                :class="{active : type === bar.type}"
                @click="type = bar.type"
            >
                <router-link tag="div" :to="{name : bar.type}">
                    <span>{{bar.tit}}</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            bars : [
                {
                    id : 1, 
                    tit : "正在热映", 
                    name : "nowing",
                    type : "nowing", 
                },
                {
                    id : 2, 
                    tit : "即将上映", 
                    name : "coming",
                    type : "coming", 
                },
            ],
            type : "nowing",
            fixStatus : false,
        }
    },
    methods : {
        handlerChooseBar(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.selected = billCode[2]
            if(this.selected === "nowing") return this.type = "nowing"; return this.type = "coming"
        },
        handlerScrollAuto(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop >= 380 && !this.fixStatus){
                this.fixStatus = true
            }
            else if(scrollTop < 380 && this.fixStatus){
                this.fixStatus = false
            } 
        }
    },
    created(){
        this.handlerChooseBar()
        window.addEventListener("scroll", this.handlerScrollAuto)
    },
    beforeDestroy(){
        window.removeEventListener("scroll", this.handlerScrollAuto)
    }
}
</script>

<style lang="scss">
    .filmbarbox{
        width: 100%;
        .filmbar{
            position: relative;
            display: flex;
            width: 100%;
            height: 44px;
            justify-content: space-around;
            align-items: center;
            z-index: 9;
            background: #fff;
            border-bottom: 1px solid #e6e6e6;
            &.fixtop{
                position: fixed;
                left: 0;
                top: 40px;
                margin-bottom: 44px;
            }
            span{
                position: relative;
                font-size: 14px;
                font-weight: bold;
                &:after{
                    content: "";
                    position: absolute;
                    width: 70px;
                    height: 2px;
                    left: 50%;
                    margin-left: -35px;
                    bottom: -8px;
                    background: transparent;
                    transition: all .6s;
                }
            }
            .active{
                span{
                    color: #e54847;
                    &:after{
                        content: "";
                        background: #e54847;
                    }
                }
            }
        }
    }
</style>