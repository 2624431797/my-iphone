<template>
    <section class="appcitybox">
        <CityHeader />
        <mt-search
            class="search-input"
            :citys="citys"
            v-model="keyword"
            cancel-text="取消"
            placeholder="搜索"
        >
        </mt-search>
        <div 
            class="search-content"
            ref="search"
            v-show="keyword"
        >
            <ul>
                <li
                    class="search-item"
                    v-for="item in list"
                    :key="item.id"
                    @click="handlerChooseCity(item.id, item.nm)"
                >{{item.nm}}</li>
                <li 
                    class="search-item"
                    v-show="!hasNoData"
                >
                    <span>无搜索项</span>
                </li>
            </ul>
        </div>
        <mt-index-list>
            <div class="nowcity">
                <p>当前城市</p>
                <div class="nowcity_list">
                    <span v-if="!nowcity">定位失败，请重试选择城市</span>
                    <span v-else>{{nowcity}}</span>
                </div>
            </div>
            <div class="hotcity">
                <p class="hotcity_tit">热门城市</p>
                <div class="hotcity_listbox">
                    <p  
                        class="hotcity_list"
                        v-for="hot in hotcity" 
                        :key="hot.id" 
                        @click="handlerChooseCity(hot.id, hot.nm)"
                    >{{hot.nm}}</p>
                </div>
            </div>
            <mt-index-section 
                :id="item"
                v-for="item in newcitys"
                :key="item.id"
                :index="handlerCapitalNum(item)"
            >
                <div 
                    v-for="city in citys" 
                    :key="city.id"
                >
                    <div v-if="handlerChooseNum(city.py, item)" >
                        <p @click="handlerChooseCity(city.id, city.nm)" class="city_list">{{city.nm}}</p>
                    </div>
                </div>
            </mt-index-section>
        </mt-index-list>
    </section>
</template>

<script>
import CityHeader from "./CityHeader"

export default {
    name : "appcity",
    data(){
        return {
            citys : [],
            newcitys : [],
            hotcity : [],
            keyword : "",
            list : [],
            cityname : "",
        }
    },
    components : {
        CityHeader
    },
    methods : {
        handlerCapitalNum(i) {
            return i.toUpperCase();
        },
        handlerChooseNum(k, j) {
            return k.substring(0, 1) == j;
        },
        handlerChooseCity(id, nm) {
            this.$store.commit("changeCity", { id: id, nm: nm });
            this.cityname = nm
            this.$router.push({
                name: "nowing", 
                params : {
                   nm
                } 
            });
            sessionStorage.setItem("app-city", this.cityname);
        }, 
        handlerInit(){
            this.$http.get("/json/city.json").then((res) => {
                this.citys = res.data.citys
                for(let m = 0; m < 9; m++){
                    this.hotcity.push(this.citys[m])
                }
                for(let i = 0; i < this.citys.length; i++){
                    let bFlag = true;
                    if(this.newcitys.length == 0){
                        this.newcitys.push(this.citys[i].py.substring(0, 1));
                    }
                    for(let j = 0; j < this.newcitys.length; j++) {
                        if(this.citys[i].py.substring(0, 1) == this.newcitys[j]) {
                            bFlag = false;
                        }
                    }
                    if(bFlag) {
                        this.newcitys.push(this.citys[i].py.substring(0, 1));
                    }
                }
                this.newcitys = this.newcitys.sort();
            })
            this.nowcity = sessionStorage.getItem("app-city")
        }
    },
    watch : {
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                let result = []
                for(let i in this.citys){
                    let values = this.citys[i]
                    let name = values.nm.substr(0, 1)
                    let spell = values.py.substr(0, 1)
                    let In = this.keyword.substr(0, 1)

                    if(this.keyword.toString().length === 1){
                        if(name===In || spell===In){
                            result.push(values)
                        }
                    }
                    else if(values.py.indexOf(this.keyword.toString()) > -1 || values.nm.indexOf(this.keyword.toString()) > -1){
                        result.push(values)
                    }
                }
                this.list = result
            }, 100)
        }
    },
    computed : {
        cityTitle() {
            //数据依赖更新是，计算属性重新触发更新
            return this.$store.state.cityId
        },
        hasNoData(){
            if(this.list.length) return true; return false;
        }
    },
    created(){
        this.handlerInit()
    }
}
</script>

<style lang="scss">
    .appcitybox{
        background: #fff;
        .mint-search{
            height: 100%;
            padding: 14px -1px;
            .mint-searchbar-inner{
                height: 32px;
                line-height: 32px;
            }
            .mint-searchbar-cancel{
                color: #000;
            }
        }
        .nowcity{
            padding: 10px 0;
            p{
                width: 100%;
                height: .3rem;
                font-size: 18px;
                font-weight: bold;
            }
            .nowcity_list{
                height: 30px;
                padding: 10px 30px;
                margin: 8px 7.5px;
                font-size: 14px;
                color: #191a1b;
                text-align: center;
                line-height: 12px;
                border-radius: 3px;
                background-color: #dedbdb;
            }
        }
        .hotcity{
            width: 100%;
            padding: 10px 0;
            .hotcity_tit{
                width: 100%;
                height: .3rem;
                font-size: 18px;
                font-weight: bold;
            }
            .hotcity_listbox{
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                justify-content: space-between;
                .hotcity_list{
                    height: 30px;
                    padding: 10px 30px;
                    margin: 8px 7.5px;
                    font-size: 14px;
                    color: #191a1b;
                    text-align: center;
                    line-height: 12px;
                    border-radius: 3px;
                    background-color: #dedbdb;
                }
            }
        }
        .mint-indexsection{
            width: 100%;
            background: #f4f4f4;
            .mint-indexsection-index{
                padding: 14px 12px;
                
            }
            .city_list{
                    width: 100%;
                    padding: 6px 6px;
                }
        }
        .search-content{
            position: relative;
            z-index: 99;
            .search-item{
                width: 100%;
                padding: 6px 6px;
                font-size: 14px;
                color: #666;
                background: #f4f4f4;
            }
        }
    }
</style>

        /* scrollTo(id) {
            var id = document.getElementById(id);
            window.scrollTo(0, id.offsetTop - 40);
        } */