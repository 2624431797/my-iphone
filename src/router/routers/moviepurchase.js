export default {
    name : "moviepurchase",
    path : "/moviepurchase/:id",
    component : () => import("@/views/Movie/MoviePurchase"),
    meta: {
        isLogin: true  //需要登录
    }
}