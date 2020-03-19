import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppLogin from "./routers/applogin"
import AppRegister from "./routers/appregister"
import Movie from "./routers/movie"
import Cinema from "./routers/cinema"
import Mation from "./routers/mation"
import Mine from "./routers/mine"
import AppCity from "./routers/appcity"
import AppCart from "./routers/appcart"
import AppGood from "./routers/appgood"
import AppTest from "./routers/apptest"
import AppTestImg from "./routers/apptestimg"
import AppPay from "./routers/apppay"
import AppSearch from "./routers/appsearch"
import MovieDetail from "./routers/moviedetail"
import MationDetail from "./routers/mationdetail"
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
        AppLogin,
        AppRegister,
        Movie,
        Cinema,
        Mation,
        Mine,
        AppCity,
        AppCart,
        AppGood,
        AppTest,
        AppTestImg,
        AppPay,
        AppSearch,
        MovieDetail,
        MationDetail,
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