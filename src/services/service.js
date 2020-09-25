//使用axios异步操作
import axios from "axios"

const isDev = process.env.NODE_ENV === "development"

const service = axios.create({
    baseURL: isDev ? "http://rap2api.taobao.org/app/mock/241571" : "http://rap2api.taobao.org/app/mock/241571"
})

//axios拦截器   (请求之前拦截/响应之后拦截)
service.interceptors.request.use(config => {
    //token放入localStorage.getItem("authToken")
    config.headers = Object.assign({}, config.headers, {
        "authToken": "sdfsdfsdfasd"
    })
    return config
})

// 请求响应拦截
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 200) {
            return Promise.reject("error")
        } else {
            return res
        }
    },
    error => {
        console.log(error)
    }
)

export default service