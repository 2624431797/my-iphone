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

//首页轮播
export const getBannerList = () => {
    return service.post(`/api/s1/getBannerList`)
}

//首页影片列表
export const getMovieList = (select, params) => {
    return service.post(`/api/s1/getmovielist/${select}`, { params: params })
}




//保存管理员
export const initUserList = (id, data) => {
    return service.post(`/api/v1/inituserlist/${id}`, data)
}

//新增管理员
export const addUserList = (data) => {
    return service.post(`/api/v1/adduserlist`, data)
}

//查找管理员
export const searchUserList = params => {
    return service.post(`/api/v1/searchuserlist`, { params: params })
}