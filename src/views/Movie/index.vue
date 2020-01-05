<template>
    <section class="moviebox">
        <Header />
        <City />
        <SearchBtn />
        <Banner />
        <Filmbar />
        <transition :name="transitionName" >
            <router-view class="child-view" />
        </transition>
        <Tabbar />
    </section>
</template>

<script>
import Header from "@/components/Header"
import City from "@/components/City"
import SearchBtn from "@/components/SearchBtn"
import Banner from "@/components/Banner"
import Filmbar from "@/components/Filmbar"
import Tabbar from "@/components/Tabbar"

export default {
    data(){
        return {
            transitionName : "slide-left",
            selected : "",
            isBack : true,
        }
    },
    components : {
        Header,
        City,
        SearchBtn,
        Banner,
        Filmbar,
        Tabbar,
    },
    watch : { 
        $route(to, from){
            console.log(to.path)
            this.handlerIsRouter()
        },
        $route : {
            handler : (to, from) => {
                console.log(to.path)
                this.handlerIsRouter()
            },
            deep : true
        }
        /* '$route'(to, from){
            if (isBack){        
                this.transitionName = 'slide-right'      
            } 
            else{        
                this.transitionName = 'slide-left'      
            }      
        }  */
    },
    methods : {
        handlerIsRouter(){
            const approval = window.location.hash
            const billCode = approval.split("/")
            this.selected = billCode[2]
            if(this.selected === "nowing") return this.isBack = true; return this.isBack = false;
            console.log(this.isBack)
        }
    },
    created(){
        this.handlerIsRouter()
        console.log(this.isBack)
    }
}
</script>

<style lang="scss">
    .moviebox{
        overflow: hidden;
        .child-view {    
            position: absolute;    
            width: 100%;  
            transition:all .3s ease;    
            .slide-left-enter,.slide-right-leave-active {    
                opacity:0;  
                transform:translate(100%,0);  
            }  
            .slide-left-leave-active,.slide-right-enter {    
                opacity:0;    
                transform:translate(-100%,0);  
            }
        }
    }
</style>