export default {
    //获取登录状态
    userLogin({commit}, flag) {
        commit("userStatus", flag)
    },
}