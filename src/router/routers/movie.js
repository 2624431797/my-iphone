export default {
    path : "/movie",
    component : () => import("@/views/Movie"),
    children : [
        {
            path : "/", redirect : "nowing"
        },
        {
            name : "nowing",
            path : "nowing",
            component : () => import("@/views/Movie/Nowing")
        },
        {
            name : "coming",
            path : "coming",
            component : () => import("@/views/Movie/Coming")
        }
    ]
}