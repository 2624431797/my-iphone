export default {
    name : "movieseats",
    path : "/movieseats/:id",
    component : () => import("@/views/Movie/MovieSeats"),
    meta: {
        isLogin: true  //需要登录
    }
}