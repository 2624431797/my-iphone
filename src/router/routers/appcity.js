export default {
    path : "/appcity",
    component : () => import("@/views/AppCity"),
    meta: {
        isLogin: false  //不需要登录
    }
}