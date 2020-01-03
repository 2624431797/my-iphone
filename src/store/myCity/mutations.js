export default {
    changeHt(state, payload) {
        // state状态  payload // 荷载 (存放参数)
        state.headerTitle = payload;
    },
    changeCity(state, payload) {
        state.cityTitle = payload.nm;
        state.cityId = payload.id;
    }
}