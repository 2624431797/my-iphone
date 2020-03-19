export default {
    name : "apptestimg",
    path : "/apptestimg",
    component : () => import("@/views/AppTestImg"),
    meta: {
        isLogin: false  //需要登录
    }
}