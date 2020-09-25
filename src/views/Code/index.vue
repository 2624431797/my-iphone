<template>
  <section class="codebox">
    <div class="container">
      <div class="bg">
        <vue-particles
          color="#ffe7a6"
          :particleOpacity="0.2"
          :particlesNumber="100"
          shapeType="circle"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="0"
          :lineLinked="false"
          :lineOpacity="0"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="false"
          hoverMode="grab"
          :clickEffect="false"
          clickMode="push"
        />
      </div>
      <van-nav-bar title="摘星星给你" left-arrow @click-left="handlerBack">
        <template #right>
          <van-icon
            :name="musicStatus ? ' iconfont icon-music2yinle' : ' iconfont icon-music-'"
            size="18"
            @click="handlerMusic"
          />
          <audio id="music" ref="music" src="./music/0.mp3" loop="loop" preload="auto" />
        </template>
      </van-nav-bar>
      <div class="user-container">
        <div class="img" @click="musicStatus = true"></div>
        <div class="txt">摘星星给你</div>
      </div>
      <div class="star-container">
        <div ref="moveLeftBox" class="star-content star-left">
          <div class="btn-content left-btn" @click="handlerMove('left')">
            <i class="van-icon van-icon-arrow" :class="leftArrow ? 'active-static' : 'active-left'"></i>
          </div>
          <div ref="activeBorder" class="main-content main-left">
            <van-tabs v-model="activeTab" animated>
              <van-tab title="所念">
                <van-swipe class="my-swipe" indicator-color="white" @change="handlerSwiperChange">
                  <van-swipe-item>
                    <van-image width="100%" height="382px" :src="require('./image/0.jpg')" />
                  </van-swipe-item>
                  <van-swipe-item>
                    <van-image width="100%" height="382px" :src="require('./image/1.jpg')" />
                  </van-swipe-item>
                  <van-swipe-item>
                    <van-image width="100%" height="382px" :src="require('./image/2.jpg')" />
                  </van-swipe-item>
                </van-swipe>
                <div class="text">{{ swiperText || "缤纷独角兽" }}</div>
              </van-tab>
              <van-tab title="星辰"></van-tab>
            </van-tabs>
          </div>
        </div>
        <div ref="moveRightBox" class="star-content star-right">
          <div class="btn-content right-btn" @click="handlerMove('right')">
            <i
              class="van-icon van-icon-arrow-left"
              :class="rightArrow ? 'active-static' : 'active-right'"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <Tabbar />
  </section>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import Music from "@/mixins/music.js";

import "./style/index.scss";

export default {
  name: "Qcode",
  data() {
    return {
      activeTab: 0,
      musicStatus: false,
      moveLeftStatus: false,
      moveRightStatus: false,
      leftArrow: true,
      rightArrow: true,
      swiperText: ""
    };
  },
  mixins: [Music],
  components: {
    Tabbar
  },
  watch: {
    musicStatus(newVal) {
      if (newVal) {
        this.audioAutoPlay("music");
      } else {
        this.$refs.music.pause();
      }
    }
  },
  methods: {
    handlerBack() {
      this.$router.go(-1);
    },
    handlerMusic() {
      this.musicStatus = !this.musicStatus;
    },
    handlerMove(direction) {
      this.$nextTick(() => {
        /* 右 */
        if (direction === "right") {
          this.rightArrow = !this.rightArrow;
          if (!this.moveRightStatus) {
            this.moveRightStatus = true;
            this.$refs.moveRightBox.style.transform = `translateX(0%)`;
            if (this.moveLeftStatus) {
              this.leftArrow = !this.leftArrow;
              this.moveLeftStatus = false;
              this.$refs.moveLeftBox.style.transform = `translateX(-100%)`;
            }
          } else {
            this.moveRightStatus = false;
            this.$refs.moveRightBox.style.transform = `translateX(100%)`;
          }
          /* 右 */
          /* 左 */
        } else if (direction === "left") {
          this.leftArrow = !this.leftArrow;
          if (!this.moveLeftStatus) {
            this.moveLeftStatus = true;
            this.$refs.moveLeftBox.style.transform = `translateX(0%)`;
            if (this.moveRightStatus) {
              this.rightArrow = !this.rightArrow;
              this.moveRightStatus = false;
              this.$refs.moveRightBox.style.transform = `translateX(100%)`;
            }
          } else {
            this.moveLeftStatus = false;
            this.$refs.moveLeftBox.style.transform = `translateX(-100%)`;
          }
          /* 左 */
        }
      });
    },
    handlerSwiperChange(index) {
      this.$nextTick(() => {
        let swiperList = ["缤纷独角兽", "青蛇", "天鹅之梦"];
        this.swiperText = swiperList[index];
      });
    }
  },
  mounted() {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        //网页被挂起
        this.musicStart = false;
        this.changeMusicPlay();
      } else {
        // 网页被呼起
        this.musicStart = true;
        this.changeMusicPlay();
      }
    });
  }
};
</script>

<style scoped lang="scss">
</style>