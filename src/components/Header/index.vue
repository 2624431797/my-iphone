<template>
  <section class="headerbox">
    <mt-header :title="ititle">
      <mt-button class="header-city el-icon-place" v-if="iStatus" slot="left">
        <router-link to="/appcity">
          {{newcityname}}
          <i class="el-icon-arrow-down" />
        </router-link>
      </mt-button>
      <mt-button class="header-more" icon="more" slot="right" @click="handlerIsShow"></mt-button>
    </mt-header>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </section>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        { name: "首页", method: this.handlerLinkMain },
        { name: "登录", method: this.handlerLinkLogin },
        { name: "订单", method: this.handlerLinkCart },
        { name: "我的", method: this.handlerLinkMine }
      ],
      sheetVisible: false,
      newcityname: "",
      iStatus: false,
      select: "",
      ititle: "影片"
    };
  },
  methods: {
    handlerIsShow() {
      this.sheetVisible = !this.sheetVisible;
    },
    handlerGetCity() {
      this.newcityname = sessionStorage.getItem("app-city");
    },
    handlerGetSelect() {
      const approval = window.location.hash;
      const billCode = approval.split("/");
      this.select = billCode[1];
      if (this.select === "movie") return (this.ititle = "影片");
      return (this.ititle = "影院");
    },
    handlerScrollAuto() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (this.select === "cinema") {
        this.iStatus = false;
      } else if (scrollTop >= 380 && !this.iStatus) {
        this.iStatus = true;
      } else if (scrollTop < 380 && this.iStatus) {
        this.iStatus = false;
      }
    },
    handlerLinkMain() {
      this.$router.push("/");
    },
    handlerLinkLogin() {
      this.$router.push("/applogin");
    },
    handlerLinkCart() {
      this.$router.push("/appcart");
    },
    handlerLinkMine() {
      this.$router.push("/mine");
    }
  },
  created() {
    this.handlerGetCity();
    this.handlerGetSelect();
    window.addEventListener("scroll", this.handlerScrollAuto);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handlerScrollAuto);
  }
};
</script>

<style lang="scss">
.headerbox {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  .mint-header {
    width: 100%;
    color: #fff;
    font-size: 16px;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    .header-city {
      margin-left: 10px;
      .mint-button-text {
        a {
          font-size: 14px;
          color: #fff;
        }
      }
    }
    .header-more {
      margin-right: 7px;
      i {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .mint-actionsheet {
    li {
      font-size: 16px;
    }
    a {
      font-size: 16px;
    }
  }
}
</style>