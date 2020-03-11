export default {
    path : "/mation",
    component : () => import("@/views/Mation"),
    children : [
        
    ],
    meta: {
        isLogin: false  //不需要登录
    }
}