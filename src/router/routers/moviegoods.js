export default {
    name : "moviegoods",
    path : "/moviegoods/:id",
    component : () => import("@/views/Movie/MovieGoods"),
    meta: {
        isLogin: true  //需要登录
    }
}