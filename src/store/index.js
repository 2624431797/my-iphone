import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import myCity from "./myCity"
import myGoods from "./myGoods"
import myCart from "./myCart"
import myTest from "./myTest"

export default new Vuex.Store({
    modules : {
        myCity,
        myGoods,
        myCart,
        myTest
    }
})
