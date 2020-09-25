/* 自动播放音乐 */
export default {
    methods: {
        audioAutoPlay(id) {
            let music = document.getElementById(id)
            music.play()
            let play = function () {
                music.play()
                document.removeEventListener("touchstart", play, false)
            }
            music.play()
            document.addEventListener("WeixinJSBridgeReady", function () {
                play()
            }, false)
            document.addEventListener('YixinJSBridgeReady', function () {
                play()
            }, false)
            document.addEventListener("touchstart", play, false)
        },
        onBridgeReady() {
            console.log(" WeixinJSBridge.call('hideOptionMenu')")
            WeixinJSBridge.call('hideOptionMenu')
        },
        WeixinJSBridgeReady() {
            if (typeof WeixinJSBridge === "undefined") {
                console.log('WeixinJSBridge ==== undefined')
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false)
                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady)
                    document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady)
                }
            } else {
                this.onBridgeReady()
            }
        }
    }
}