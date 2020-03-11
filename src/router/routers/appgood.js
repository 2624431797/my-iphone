export default {
    path : "/appgood",
    component : () => import("@/views/AppGood"),
    meta: {
        isLogin: true  //需要登录
    }
}