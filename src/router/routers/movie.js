export default {
    path : "/movie",
    component : () => import("@/views/Movie"),
    children : [
        {
            path : "", redirect : "nowing"
        },
        {
            name : "nowing",
            path : "nowing",
            component : () => import("@/views/Movie/Nowing"),
            meta: {
                isLogin: false  //不需要登录
            }
        },
        {
            name : "coming",
            path : "coming",
            component : () => import("@/views/Movie/Coming"),
            meta: {
                isLogin: false  //不需要登录
            }
        }
    ],
    meta: {
        isLogin: false  //不需要登录
    }
}