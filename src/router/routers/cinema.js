export default {
    name : "cinema",
    path : "/cinema",
    component : () => import("@/views/Cinema"),
    children : [
        
    ],
    meta: {
        isLogin: false  //不需要登录
    }
}