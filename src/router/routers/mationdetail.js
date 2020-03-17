export default {
    name : "mationdetail",
    path : "/mationdetail/:id",
    component : () => import("@/views/Mation/MationDetail"),
    meta: {
        isLogin: false  //需要登录
    }
}