<template>
    <section class="moviedetailcardbox">
        <div v-if="!movie" class="mloading"></div>
        <div v-else class="moviedetailcard">
            <div class="moviedetail-top">
                <div class="moviedetail-top-cover">
                    <img :src="movie.img" alt="加载失败">
                </div>
                <div class="moviedetail-top-above">
                    <div class="moviedetail-top-above-left">
                        <img :src="movie.img" alt="加载失败">
                    </div>
                    <div class="moviedetail-top-above-right">
                        <span class="moviedetail-top-above-right-title">{{movie.title}}</span>
                        <span class="moviedetail-top-above-right-english">{{movie.english_title}}</span>
                        <span class="moviedetail-top-above-right-count">{{movie.rating.count}} 分</span>
                        <span class="moviedetail-top-above-right-genres">{{movie.genres}}</span>
                        <span class="moviedetail-top-above-right-subion">{{movie.country}} | {{movie.duration}} 分钟</span>
                        <span class="moviedetail-top-above-right-year">{{(handlerTime(movie.year).substring(0, 4))}} 上映</span>
                    </div>
                </div>
            </div>
            <div class="moviedetail-mid">
                <p class="moviedetail-mid-txt">
                    <span>{{movie.title}}</span>
                    <i>{{movie.imax}}</i>
                    <b>{{movie.rating.average | showNum}} 想看</b>
                </p>
                <div class="moviedetail-mid-paragraph">
                    <p>剧情简介:</p>
                    <p>{{movie.paragraph}}</p>
                </div>
            </div>
            <div class="moviedetail-bot">
                <div class="moviedetail-bot-director">
                    <p>演职导演:</p>
                    <ul>
                        <li
                            v-for="director in movie.director"
                            :key="director.id"
                        >
                            <img :src="director.director_img" alt="加载失败">
                            <p>{{director.name}}</p>
                        </li>
                    </ul>
                </div>
                <div class="moviedetail-bot-actor">
                    <p>演职演员:</p>
                    <ul>
                        <li
                            v-for="actor in movie.actor"
                            :key="actor.id"
                        >
                            <img :src="actor.actor_img" alt="加载失败">
                            <p>{{actor.name}}</p>
                        </li>
                    </ul>
                </div>
                <div class="moviedetail-bot-still">
                    <p>视频剧照:</p>
                    <div class="moviedetail-bot-still-banner">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="item in banner" :key="item._id">
                                <img :src="item.still_img" alt="加载失败">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="moviedetail-com">
                <p>评论:</p>
                <ul>
                    <li v-for="item in movie.comment" :key="item.id">
                        <div class="moviedetail-com-left">
                            <img :src="item.img" alt="加载失败">
                        </div>
                        <div class="moviedetail-com-right">
                            <b>{{item.name}}</b>
                            <i>{{item.summary}}</i>
                            <span>{{handlerTime(item.time)}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import Swiper from "swiper"
import { getMovieDetail } from "@/services"

export default {
    data(){
        return {
            movie : null,
            banner : []
        }
    },
    filters : {
        showNum(n){
            if(n >= 10000){
                n = n / 10000 
                n = n.toFixed(1)
                n = n + "万"
            }
            return n
        }
    },
    methods : {
        handlerInitGet(){
            let {id} = this.$route.params
            getMovieDetail(id).then(res => {
                this.movie = res.data.userlist
                this.banner = this.banner.concat(res.data.userlist.still)
                this.$nextTick(() => {
                    new Swiper('.moviedetail-bot-still-banner', {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                    })
                })
            })
        },
        handlerTime(para){
            return this.$moment(para).format('YYYY-MM-DD HH:mm:ss')
        },
    },
    created(){
        this.handlerInitGet()
    }
}
</script>

<style lang="scss">
    .moviedetailcardbox{
        width: 100%;
        margin-bottom: 60px;
        .moviedetailcard{
            width: 100%;
            background-color: rgb(50, 102, 101);
            .moviedetail-top{
                position: relative;
                height: 220px;
                .moviedetail-top-cover{
                    position: absolute;
                    width: 100%;
                    height: 220px;
                }
                .moviedetail-top-above{
                    position: absolute;
                    display: flex;
                    width: 100%;
                    height: 220px;
                    background: rgba(0, 0, 0, .55);
                    .moviedetail-top-above-left{
                        display: flex;
                        width: 40%;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 120px;
                            height: 160px;
                            border-radius: 10px;
                        }
                    }
                    .moviedetail-top-above-right{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        line-height: 28px;
                        color: #fff;
                        .moviedetail-top-above-right-title{
                            font-size: 18px;
                            font-weight: bold;
                        }
                        .moviedetail-top-above-right-english{
                            font-size: 12px;
                        }
                        .moviedetail-top-above-right-count{
                            font-size: 18px;
                            font-weight: bold;
                            color: #fc0; 
                        }
                        .moviedetail-top-above-right-genres, .moviedetail-top-above-right-subion, .moviedetail-top-above-right-year{
                            font-size: 12px;
                            color: #ccc;
                        }
                    }
                }
            }
            .moviedetail-mid{  
                width: 100%;
                padding: 16px 18px;
                .moviedetail-mid-txt{
                    height: 30px;
                    line-height: 30px;
                    margin-bottom: 10px;
                    span{
                        float: left;
                        font-size: 18px;
                        font-weight: bold;
                        color: #fff;
                    }
                    i{
                        float: left;
                        padding: 0 2px;
                        margin-left: 10px;
                        font-size: 10px;
                        color: #fff;
                        border-radius: 2px;
                        background: #d2d6dc;
                    }
                    b{
                        float: right;
                        font-size: 16px;
                        font-style: italic;
                        color: #ffb232;
                    }
                }
                .moviedetail-mid-paragraph{
                    p:first-child{
                        color: #fff;
                        margin-bottom: 5px;
                    }
                    p:last-child{
                        text-indent: 28px;
                        color: #fff;
                    }
                }
            }
            .moviedetail-bot{
                width: 100%;
                padding: 16px 18px;
                .moviedetail-bot-director, .moviedetail-bot-actor{
                    font-size: 14px;
                    p{
                        color: #fff;
                        margin-bottom: 10px;
                    }
                    ul{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        li{
                            width: 24%;
                            img{
                                height: 120px;
                            }
                            p{
                                margin-top: 7px;
                                font-size: 14px;
                                color: #fff;
                                text-align: center;
                            }
                        }
                    }
                }
                .moviedetail-bot-still{
                    font-size: 14px;
                    p{
                        color: #fff;
                        margin-bottom: 10px;
                    }
                    .moviedetail-bot-still-banner{
                        height: 120px;
                        overflow: hidden;
                        .swiper-slide{
                            width: 180px;
                            height: 120px;
                        }
                    }
                }
            }
            .moviedetail-com{
                width: 100%;
                border-radius: 20px 20px 0 0;
                background: #fff;
                p{  
                    height: 60px;
                    padding-left: 20px;
                    line-height: 60px;
                    font-size: 16px;
                    font-weight: bold;
                    color: #333;
                }
                ul{
                    li{
                        display: flex;
                        padding: 16px;
                        .moviedetail-com-left{
                            width: 20%;
                            img{
                                width: 40px;
                                height: 40px;
                                border-radius: 50%;
                                margin-top: 10px;
                            }
                        }
                        .moviedetail-com-right{
                            display: flex;
                            width: 80%;
                            flex-direction: column;
                            b{
                                font-weight: bold;
                                margin-bottom: 5px;
                            }
                            i{
                                margin-bottom: 5px;
                            }
                            span{
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>