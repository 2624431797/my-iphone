export default {
    name : "appsearch",
    path : "/appsearch",
    component : () => import("@/views/AppSearch"),
    meta: {
        isLogin: true  //需要登录
    }
}