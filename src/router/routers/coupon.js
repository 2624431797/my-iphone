export default {
    name : "coupon",
    path : "/coupon",
    component : () => import("@/views/Mine/Coupon"),
    meta: {
        isLogin: true  //需要登录
    }
}