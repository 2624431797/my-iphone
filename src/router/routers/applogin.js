export default {
    name : "applogin",
    path : "/applogin",
    component : () => import("@/views/AppLogin"),
    meta: {
        isLogin: false,  //不需要登录
    }
}