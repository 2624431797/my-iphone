export default {
    userStatus(state, flag) {
        state.isLogin = flag
    },
    userObj(state, payload){
        state.userName = payload.username
        state.userImg = payload.userimg
    }
}