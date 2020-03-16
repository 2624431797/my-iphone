export default {
    // state状态  payload // 荷载 (存放参数)
    changePriceSeats(state, payload){
        state.seatsTotal = payload.priceTotal
    }
}