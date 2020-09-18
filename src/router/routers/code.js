export default {
    path : "/code",
    component : () => import("@/views/Code"),
    children : [
        
    ],
    meta: {
        isLogin: false  //不需要登录
    }
}