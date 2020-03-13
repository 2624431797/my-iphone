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

//首页影片详情页
export const getMovieDetail = id => {
    return service.post(`/api/v1/getmoviedetail/${id}`)
}

//首页影片购买页
export const getMoviePurchase = id => {
    return service.post(`/api/v1/getmoviepurchase/${id}`)
}
//首页影片购买页商品
export const getMoviePurchaseFood = id => {
    return service.post(`/api/v1/getmoviepurchasefood/${id}`)
}

//首页影片购买页面毛玻璃部分
export const getmoviepurchaseBanner = id => {
    return service.post(`/api/v1/getmoviepurchaseBanner/${id}`)
}

//根据日期查询数据
export const getMoviePurchaseTabList = (id, date) => {
    return service.post(`/api/v1/getdatemoviepurchase/${id}`, date)
}

//首页影片购买页根据id查询商品
export const getMovieGoodsById = id => {
    return service.post(`/api/v1/getmoviegoodsById/${id}`)
}

/* 影片影院 */
//影院列表
export const getCinemaList = params => {
    return service.post(`/api/a1/getCinemaList`, params)
}

//影院列表选择
export const getCinemaListChange = item => {
    return service.post(`/api/a1/getCinemaListChange`, item)
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

/* 影片我的 */
//影券
export const getMineCoupon = select => {
    return service.post(`/api/m1/getminecoupon/${select}`)
}

/* 登录注册 */
//登录接口
export const UserLogin = params => {
    return service.post(`/api/x1/userLogin`, params)
}

//验证码接口
export const getTestCode = () => {
    return service.post(`/api/x1/getTestCode`)
}