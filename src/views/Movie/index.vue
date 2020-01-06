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
            this.isBack = !this.isBack
            if(this.isBack){        
                return this.transitionName = 'slide-right'      
            } 
            else{        
                return this.transitionName = 'slide-left'      
            } 
        }
    },
}
</script>

<style lang="scss">
    .moviebox{
        overflow: hidden;
        .child-view {    
            position: absolute;    
            width: 100%;  
            margin-bottom: 60px;
            transition:all .3s ease;    
            .slide-left-enter, .slide-right-leave-active{    
                opacity:0;  
                transform: translate(100%, 0);  
            }  
            .slide-right-enter, .slide-left-leave-active{    
                opacity:0;    
                transform: translate(-100%, 0);  
            }
        }
    }
</style>