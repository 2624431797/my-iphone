import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Movie from "./routers/movie"
import Cinema from "./routers/cinema"
import Mation from "./routers/mation"
import Mine from "./routers/mine"
import AppCity from "./routers/appcity"
import NotFound from "./routers/notfound"

export default new VueRouter({
    routes : [
        {
            path : "/", redirect : "/nowing"
        },
        Movie,
        Cinema,
        Mation,
        Mine,
        AppCity,
        NotFound,
        {
            path: "*", redirect: "/notfound"
        },
    ]
})