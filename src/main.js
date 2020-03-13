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

//城市选择拦截
router.beforeEach((to, from, next) => {
    let isCity = sessionStorage.getItem("isCity")
    if(isCity === "false"){
        if(to.name === "nowing"){
            next({ path : "/appcity" })
        }
        else if(to.name === "coming"){
            next({ path : "/appcity" })
        }
        else if(to.name === "cinema"){
            next({ path : "/appcity" })
        }
    }
    next()
})

//登录逻辑
router.beforeEach((to, from, next) => {
    //获取用户登录成功后储存的登录标志
    let getFlag = localStorage.getItem("Flag")
    //如果登录标志存在且为isLogin，即用户已登录
    if(getFlag === "isLogin"){
        //设置vuex登录状态为已登录
        store.state.isLogin = true
        next()
        //如果已登录，还想想进入登录注册界面，则定向回首页
        if(to.name === "applogin"){
            alert('请先退出登录')
            next({ path: "/" })
        }
    }
    //如果登录标志不存在，即未登录
    else{
        //用户想进入需要登录的页面，则定向回登录界面
        if(to.meta.isLogin){
            next({
                path: '/applogin',
            })
        }
        //用户进入无需登录的界面，则跳转继续
        else{
            next()
        }
    }
})

router.afterEach(route => {
    window.scroll(0, 0)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')