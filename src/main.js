import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//axios
import axios from "axios"
Vue.prototype.$http = axios

//rem计算脚本
import "./modules/rem.js"

//dataV
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

//通用样式
import "./style/main.scss"

//Swiper
import "swiper/css/swiper.min.css"

//animate.css
import animated from 'animate.css'
Vue.use(animated)

//mint-ui
import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//element-ui
import 'element-ui/lib/theme-chalk/index.css'

//vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

//moment
import moment from 'moment'
Vue.prototype.$moment = moment

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')