export default {
    path : "/appcart",
    component : () => import("@/views/AppCart"),
    meta: {
        isLogin: true  //需要登录
    }
}