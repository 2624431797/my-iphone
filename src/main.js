import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//axios
import axios from "axios"
Vue.prototype.$http = axios

//rem计算脚本
import "./modules/rem.js"

//通用样式
import "./style/main.scss"

//Swiper
import "swiper/css/swiper.min.css"

//animate.css
import animated from 'animate.css'
Vue.use(animated)

//mint-ui
import Mint from 'mint-ui'
Vue.use(Mint)

//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')