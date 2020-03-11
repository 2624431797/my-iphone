export default {
    path : "/appregister",
    component : () => import("@/views/AppRegister"),
    meta: {
        isLogin: false  //不需要登录
    }
}