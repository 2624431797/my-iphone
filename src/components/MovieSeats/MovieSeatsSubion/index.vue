<template>
    <section class="movieseatssubbox">
        <div class="movieseatssubion-wrapper-container">
            <div class="movieseatssubion-cinema-wrapper">
                <div 
                    class="movieseatssubion-seat-wrapper" 
                    style="left: -218px"
                    id="seatssubion"
                    @mousedown="handlerDown" 
                    @mousemove="handlerMove" 
                    @mouseup="handlerEnd"
                    @touchstart="handlerDown"
                    @touchmove.prevent="handlerMove"
                    @touchend="handlerEnd"    
                >
                    <div class="movieseatssubion-seat-wrapper-screen">
                        {{theatres}}
                    </div>
                    <div class="movieseatssubion-seat-wrapper-screen-center">
                        银幕中央
                        <div class="movieseatssubion-seat-wrapper-screen-center-mid-line"></div>
                    </div>
                    <div class="movieseatssubion-inner-seat-wrapper" ref="innerSeatWrapper" >
                        <div v-for="row in seatRow" :key="row.id">
                            <!--这里的v-if很重要，如果没有则会导致报错，因为seatArray初始状态为空-->
                            <div 
                                v-for="col in seatCol"
                                :key="col.id"
                                class="movieseatssubion-inner-seat-wrapper-seat"
                                :style="{width : seatSize + 'px', height : seatSize + 'px'}"
                                v-if="seatArray.length > 0"
                            >
                                <div 
                                    class="inner-seat"
                                    @click="handlerChooseSeat(row - 1, col - 1)"
                                    v-if="seatArray[row - 1][col - 1] !== -1"
                                    :class="seatArray[row - 1][col - 1] === 2 ? 'bought-seat' : (seatArray[row - 1][col - 1] === 1 ? 'selected-seat' : 'unselected-seat')"
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="movieseatssubion-seat-wrapper">
                <div class="illustration-img-wrapper unselected-seat"></div>
                <span class="illustration-text"> 可选</span>
                <div class="illustration-img-wrapper selected-seat"></div>
                <span class="illustration-text"> 已选</span>
                <div class="illustration-img-wrapper bought-seat"></div>
                <span class="illustration-text"> 锁定</span>
            </div>
            <div class="movieseatssubion-btn-wrapper">
                <!-- 智能选择 -->
                <span>智能推荐:</span>
                <template v-for="(item,index) in smartChooseMaxNum">
                    <div 
                        class="movieseatssubion-btn-buy movieseatssubion-smart" 
                        @click="handlerSmartChoose(index + 1)"
                        :key="item.id"
                    >
                        {{index + 1}}人
                    </div>
                </template>
            </div>
            <div v-if="newArrLength" class="movieseatssubion-seat-price">
                <div class="movieseatssubion-seat-price-left">
                    <span>影票单价:</span>
                    <b>{{MoviePriceState}} 元</b>
                </div>
                <div class="movieseatssubion-seat-price-right">
                    <span>影票总价:</span>
                    <b>{{MoviePriceSumReal}} 元</b>
                </div>
            </div>
            <div class="movieseatssubion-btn-bottom">
                <div class="movieseatssubion-btn-buy-set" @click="handlerResetSeat">
                    <i class="iconfont icon-zhongzhi"></i>
                </div>
                <div class="movieseatssubion-btn-buy-pay" @click="handlerBuySeat">
                    确认购买
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Toast, Dialog } from 'vant'

export default {
    data(){
        return {                                                                                                                                                                                                                                                                                                                                                          
            seatArray : [],             //影院座位的二维数组,-1为非座位，0为未购座位，1为已选座位(绿色),2为已购座位(红色)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                //影院座位的二维数组,-1为非座位，0为未购座位，1为已选座位(绿色),2为已购座位(红色)
            seatRow : 12,               //影院座位行数
            seatCol : 24,               //影院座位列数
            seatSize : '',              //座位尺寸
            smartChooseMaxNum : 5,      //推荐选座最大数量
            flags: false,
            theatres : "",
            moviePrice : null,
            moviePriceSum : 0,
            position: { x: 0, y: 0 },
            nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
            newArrNum : [],
            newArrLength : 0
        }
    },
    watch : {
        MoviePriceSumReal(newVal, oldVal){
            this.handlerCunChu()
        }
    },
    computed : {
        MoviePriceState(){
            return this.moviePrice = this.$store.state.myCart.moviePrice
        },
        MoviePriceSumReal(){
            return this.MoviePriceState * this.newArrLength
        }
    },
    methods : {
        //初始座位数组
        handlerinitSeatArray(){
            let seatArray = Array(this.seatRow).fill(0).map(() => Array(this.seatCol).fill(0))
            this.seatArray = seatArray
            this.seatSize = this.$refs.innerSeatWrapper ? parseInt(parseInt(window.getComputedStyle(this.$refs.innerSeatWrapper).width, 10) / this.seatCol, 10) : 0
            //初始化不是座位的地方
            this.handlerInitNonSeatPlace()
        },
        //初始化不是座位的地方
        handlerInitNonSeatPlace(){
            for(let i = 0;i < 9; i++){
                this.seatArray[i][0] = -1;
            }
            for(let i = 0;i < 7; i++){
                this.seatArray[i][this.seatArray[0].length - 1] = -1
                this.seatArray[i][this.seatArray[0].length - 2] = -1
            }
            for(let i = 0;i < 9; i++){
                this.seatArray[i][this.seatArray[0].length - 3] = -1
            }
            for(let i = 0;i < this.seatArray[0].length; i++){
                this.seatArray[3][i] = -1
            }
        },
        //推荐选座,参数是推荐座位数目
        handlerSmartChoose(num){
            //找到影院座位水平垂直中间位置的后一排
            let rowStart = parseInt((this.seatRow - 1) / 2, 10) + 1
            //先从中间排往后排搜索
            let backResult = this.handlerSearchSeatByDirection(rowStart, this.seatRow - 1, num)
            if(backResult.length > 0){
                this.handlerSearchChooseSeat(backResult)
                return
            }
            //再从中间排往前排搜索
            let forwardResult = this.handlerSearchSeatByDirection(rowStart - 1, 0, num)
            if(forwardResult.length > 0) {
                this.handlerSearchChooseSeat(forwardResult)
                return
            }
            //提示用户无合法位置可选
            Dialog.alert({
                message: '无合法位置可选'
            })
        },
        //推荐座位
        handlerSearchSeatByDirection(fromRow, toRow, num){
            let currentDirectionSearchResult = []
            let largeRow = fromRow > toRow ? fromRow : toRow, smallRow = fromRow > toRow ? toRow : fromRow
            for(let i = smallRow; i <= largeRow; i++){
                //每一排的搜索,找出该排里中轴线最近的一组座位
                let tempRowResult = [], minDistanceToMidLine = Infinity
                for(let j = 0;j <= this.seatCol - num; j++){
                //如果有合法位置
                    if(this.handlerCheckRowSeatContinusAndEmpty(i, j, j + num - 1)){
                        //计算该组位置距离中轴线的距离:该组位置的中间位置到中轴线的距离
                        let resultMidPos = parseInt((j + num / 2), 10);
                        let distance = Math.abs(parseInt(this.seatCol / 2) - resultMidPos);
                        //如果距离较短则更新
                        if(distance<minDistanceToMidLine){
                            minDistanceToMidLine = distance
                            //该行的最终结果
                            tempRowResult = this.handlerGenerateRowResult(i, j, j + num - 1)
                        }
                    }
                }
                //保存该行的最终结果
                currentDirectionSearchResult.push({
                    result : tempRowResult,
                    offset : minDistanceToMidLine
                })
            }
            //处理后排的搜索结果:找到距离中轴线最短的一个
            //注意这里的逻辑需要区分前后排，对于后排是从前往后，前排则是从后往前找
            let isBackDir = fromRow < toRow;
            let finalReuslt = [], minDistanceToMid = Infinity;
            if(isBackDir){
                //后排情况,从前往后
                currentDirectionSearchResult.forEach(item => {
                    if(item.offset < minDistanceToMid){
                        finalReuslt = item.result
                        minDistanceToMid = item.offset
                    }
                })
            }
            else{
                //前排情况，从后往前找
                currentDirectionSearchResult.reverse().forEach((item)=>{
                    if(item.offset < minDistanceToMid){
                        finalReuslt = item.result
                        minDistanceToMid = item.offset
                    }
                })
            }
            //直接返回结果
            return finalReuslt
        },
        //推荐座位
        handlerSearchChooseSeat(result){
            let oldArray = this.seatArray.slice();
            for(let i = 0;i < result.length; i++){
                //选定座位
                oldArray[result[i][0]][result[i][1]] = 1
            }
            this.seatArray = oldArray
        },
        //推荐座位
        handlerCheckRowSeatContinusAndEmpty(rowNum, startPos, endPos){
            let isValid = true;
            for(let i = startPos; i <= endPos; i++){
                if(this.seatArray[rowNum][i] !== 0){
                    isValid = false
                    break
                }
            }
            return isValid
        },
        //推荐座位
        handlerGenerateRowResult(row, startPos, endPos){
            let result = []
            for(let i = startPos ; i <= endPos; i++){
                result.push([row, i])
            }
            return result
        },
        //重置座位
        handlerResetSeat(){
            //将所有座位的值变为0
            let oldArray = this.seatArray.slice();
            for(let i = 0;i < this.seatRow; i++){
                for(let j = 0;j < this.seatCol; j++){
                    if(oldArray[i][j] !== -1){
                        oldArray[i][j] = 0
                    }
                }
            }
            this.seatArray = oldArray
            this.newArrLength = 0
        },
        //选定且购买座位
        handlerBuySeat(){
            //遍历seatArray，将值为1的座位变为2
            let oldArray = this.seatArray.slice();
            for(let i = 0;i < this.seatRow; i++){
                for(let j = 0; j < this.seatCol; j++){
                    if(oldArray[i][j] === 1){
                        oldArray[i][j] = 2
                    }
                }
            }
            this.seatArray = oldArray
            if(this.MoviePriceSumReal){
                //vuex存储
                this.$store.commit("changePriceSeats", {priceTotal : this.MoviePriceSumReal})
                Toast.loading({
                    message: '确认支付中',
                    forbidClick: true,
                    duration: 2000
                })
                setTimeout(() => {
                    this.$router.push("/apppay")
                }, 1800)
            }
            else{
                Toast.fail('请选择座位')
            }
        },
        //处理座位选择逻辑
        handlerChooseSeat(row, col){
            let seatValue = this.seatArray[row][col]
            let newArray = this.seatArray
            //如果是已购座位，直接返回
            if(seatValue === 2) return
            //如果是已选座位点击后变未选
            if(seatValue === 1){
                newArray[row][col] = 0
            }
            else if(seatValue === 0){
                newArray[row][col] = 1
            }
            //必须整体更新二维数组，Vue无法检测到数组某一项更新,必须slice复制一个数组才行
            this.seatArray = newArray.slice()
            this.handlerWatchSeats()
        },
        // 实现移动端拖拽
        handlerDown(){
            this.flags = true
            var touch
            if(event.touches){
                touch = event.touches[0]
            }
            else {
                touch = event
            }

            this.position.x = touch.clientX
            //this.position.y = touch.clientY

            this.dx = seatssubion.offsetLeft
            //this.dy = seatssubion.offsetTop
        },
        handlerMove(){
            if(this.flags){
                var touch 
                if(event.touches){
                    touch = event.touches[0];
                }
                else {
                    touch = event
                }

                this.nx = touch.clientX - this.position.x
                //this.ny = touch.clientY - this.position.y

                this.xPum = this.dx + this.nx
                //this.yPum = this.dy + this.ny
                
                /* 限制出界逻辑 */
                if(this.xPum <= 0 || this.xPum >= -436){
                    seatssubion.style.left = this.xPum + "px"
                }
                if(this.xPum > 0){
                    seatssubion.style.left = 0 + "px"
                }
                if(this.xPum < -436){
                    seatssubion.style.left = -436 + "px"
                }
                //seatssubion.style.top = this.yPum + "px"

                window.addEventListener("touchmove", function(){
                    event.preventDefault()
                }, false)
            }
        },
        //鼠标释放时候的函数
        handlerEnd(){
            this.flags = false;
        },
        handlerGetParams(){
            this.theatres = this.$route.params.theatre
        },
        //计算总价
        handlerWatchSeats(){
            let newArr = this.seatArray
            for(let x = 0;x < this.seatRow; x++){
                for(let y = 0; y < this.seatCol; y++){
                    this.newArrNum.push(newArr[x][y])
                }
            }
            let newSeatArr = this.newArrNum
            this.newArrNum = []
            let iArr = newSeatArr.filter(item => {
                return item > 0
            })
            this.newArrLength = iArr.length
        },
        //
        handlerCunChu(){
            sessionStorage.setItem("MoviePriceState", this.MoviePriceState)
            sessionStorage.setItem("MoviePriceSumReal", this.MoviePriceSumReal)
        }
    },
    mounted(){
        this.handlerinitSeatArray()
        this.handlerGetParams()
    }
}
</script>

<style lang="scss">
    .movieseatssubbox{
        width: 100%;
        height: 100%;
        overflow: hidden;
        .movieseatssubion-wrapper-container{
            height: 100%;
            padding: 8px 12px;
            .movieseatssubion-cinema-wrapper{
                position: relative;
                height: 580px;
                .movieseatssubion-seat-wrapper{
                    position: absolute;
                    width: 782px;
                    height: 560px;
                    margin: 0 auto;
                    border: 1px dotted #c5c5c5;
                    background: #f2f1f6;
                    overflow: hidden;
                    touch-action: none;
                    .movieseatssubion-seat-wrapper-screen{
                        width: 300px;
                        height: 30px;
                        margin: 0 auto;
                        color: #585858;
                        line-height: 30px;
                        text-align: center;
                        background-color: #e3e3e3;
                        border-radius: 0 0 30px 30px;
                    }
                    .movieseatssubion-seat-wrapper-screen-center{
                        position: absolute;
                        left: 50%;
                        top: 60px;
                        padding: 5px;
                        font-size: 13px;
                        color: #636363;
                        border: 1px solid #b1b1b1;
                        background-color: #f6f6f6;
                        border-radius: 5px;
                        transform: translateX(-50%);
                        .movieseatssubion-seat-wrapper-screen-center-mid-line{
                            position: absolute;
                            width: 1px;
                            height: 800px;
                            left: 50%;
                            top: 100%;
                            border-left: 1px dashed #919191;
                            transform: translateX(-50%);
                        }
                    }
                    .movieseatssubion-inner-seat-wrapper{
                        position: absolute;
                        width: 100%;
                        top: 120px;
                        bottom: 0;
                        .movieseatssubion-inner-seat-wrapper-seat{
                            float: left;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .inner-seat{
                                width: 60%;
                                height: 60%;
                                cursor: pointer; 
                            }
                            .selected-seat{
                                background: url('../../../assets/selected.png') center center no-repeat;
                                background-size: 100% 100%;
                            }
                            .unselected-seat{
                                background: url('../../../assets/unselected.png') center center no-repeat;
                                background-size: 100% 100%;
                            }
                            .bought-seat{
                                background: url('../../../assets/bought.png') center center no-repeat;
                                background-size: 100% 100%;
                            }
                        }
                    }
                }
            }
            .movieseatssubion-seat-wrapper{
                width: 100%;
                height: 30px;
                text-align: center;
                margin-bottom: 10px;
                .illustration-img-wrapper{
                    display: inline-block;
                    position: relative;
                    width: 20px;
                    height: 20px;
                    top: 50%;
                    margin-left: 20px;
                    transform: translateY(-50%);
                }
                .selected-seat{
                    background: url('../../../assets/selected.png') center center no-repeat;
                    background-size: 100% 100%;
                }
                .unselected-seat{
                    background: url('../../../assets/unselected.png') center center no-repeat;
                    background-size: 100% 100%;
                }
                .bought-seat{
                    background: url('../../../assets/bought.png') center center no-repeat;
                    background-size: 100% 100%;
                }
            }
            .movieseatssubion-btn-wrapper{
                width: 100%;
                height: 30px;
                margin: 12px auto;
                text-align: center;
                span{
                    float: left;
                    margin-left: 5px;
                    line-height: 30px;
                }
                .movieseatssubion-btn-buy{
                    display: inline-block;
                    height: 100%;
                    padding:0 10px;
                    margin-right: 10px;
                    line-height: 30px;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .movieseatssubion-smart{
                    border: 1px solid #d7d7d7;
                }
            }
            .movieseatssubion-seat-price{
                display: flex;
                height: 50px;
                justify-content: space-between;
                .movieseatssubion-seat-price-left, .movieseatssubion-seat-price-right{
                    width: 50%;
                    text-align: center;
                    line-height: 50px;
                    span{
                        margin-right: 6px;
                        font-weight: bold;
                    }
                    b{
                        font-size: 16px;
                        color: #33c1af;
                    }
                }
            }
            .movieseatssubion-btn-bottom{
                display: flex;
                width: 100%;
                height: 50px;
                justify-content: space-between;
                .movieseatssubion-btn-buy-set{
                    display: flex;
                    width: 30%;
                    justify-content: center;
                    align-items: center;
                    i{
                        font-size: 30px;
                        font-weight: bold;
                    }
                }
                .movieseatssubion-btn-buy-pay{
                    width: 70%;
                    height: 40px;
                    margin-top: 5px;
                    color: #fff;
                    text-align: center;
                    line-height: 40px;
                    background: #f90;
                    border-radius: 15px;
                }
            }
        }
    }
</style>