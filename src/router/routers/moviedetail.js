export default {
    name : "moviedetail",
    path : "/moviedetail/:id",
    component : () => import("@/views/Movie/MovieDetail"),
    meta: {
        isLogin: true  //需要登录
    }
}