export default {
    path : "/notfound",
    component : () => import("@/views/NotFound"),
    meta: {
        isLogin: false  //不需要登录
    }
}