export default {
    path : "/mine",
    component : () => import("@/views/Mine"),
    children : [
        
    ],
    meta: {
        isLogin: false  //不需要登录
    }
}