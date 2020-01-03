import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import myCity from "./myCity"

export default new Vuex.Store({
    modules : {
        myCity
    }
})
