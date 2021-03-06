import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import myLogin from "./myLogin"
import myCity from "./myCity"
import myGoods from "./myGoods"
import myCart from "./myCart"
import mySeats from "./mySeats"

export default new Vuex.Store({
    modules : {
        myLogin,
        myCity,
        myGoods,
        myCart,
        mySeats,
    }
})
