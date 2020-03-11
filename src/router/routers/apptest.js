export default {
    path : "/apptest",
    component : () => import("@/views/AppTest"),
    meta: {
        isLogin: true  //需要登录
    }
}