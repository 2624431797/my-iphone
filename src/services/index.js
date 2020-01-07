//使用axios异步操作
import axios from "axios"

const isDev = process.env.NODE_ENV === "development"

const service = axios.create({
    baseURL : isDev ? "http://rap2api.taobao.org/app/mock/241571" : ""
})

//axios拦截器   (请求之前拦截/响应之后拦截)
service.interceptors.request.use(config => {
    //token放入localStorage.getItem("authToken")
    config.data = {...config.data, "authToken" : "sdfsdfsdfasd"}
    return config
})

service.interceptors.response.use(res => {
    if(res.code = 200){
        return res.data
    }
    else{
        console.log("连接失败!")
    }
})

/* 影片主页 */
//首页轮播
export const getBannerList = () => {
    return service.post(`/api/s1/getBannerList`)
}

//首页影片列表
export const getMovieList = (select, params) => {
    return service.post(`/api/s1/getmovielist/${select}`, params)
}

/* 影片资讯 */
//资讯轮播
export const getMationBanner = () => {
    return service.post(`/api/z1/getmationbanner`)
}

//资讯列表
export const getMationList = params => {
    return service.post(`/api/z1/getmationlist`, params)
}