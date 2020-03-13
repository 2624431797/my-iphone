export default {
    path : "/apppay",
    component : () => import("@/views/AppPay"),
    meta: {
        isLogin: true  //需要登录
    }
}