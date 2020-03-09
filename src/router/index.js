import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Movie from "./routers/movie"
import Cinema from "./routers/cinema"
import Mation from "./routers/mation"
import Mine from "./routers/mine"
import AppCity from "./routers/appcity"
import AppCart from "./routers/appcart"
import AppTest from "./routers/apptest"
import AppSearch from "./routers/appsearch"
import MovieDetail from "./routers/moviedetail"
import MoviePurchase from "./routers/moviepurchase"
import MovieGoods from "./routers/moviegoods"
import MovieSeats from "./routers/movieseats"
import Coupon from "./routers/coupon"
import NotFound from "./routers/notfound"

export default new VueRouter({
    routes : [
        {
            path : "/", redirect : "/movie"
        },
        Movie,
        Cinema,
        Mation,
        Mine,
        AppCity,
        AppCart,
        AppTest,
        AppSearch,
        MovieDetail,
        MoviePurchase,
        MovieGoods,
        MovieSeats,
        Coupon,
        NotFound,
        {
            path: "*", redirect: "/notfound"
        },
    ]
})