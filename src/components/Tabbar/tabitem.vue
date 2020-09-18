<template>
  <div class="tabitembox" @click="clickItem" :class="mark === 'code' ? 'none' : ''">
    <i class="tabicon iconfont" :class="[cla, {active : flag}]"></i>
    <span class="tabtit" :class="{active : flag}">{{tit}}</span>
    <div style="z-index: -1;" v-if="mark === 'code'" class="tab-circular"></div>
  </div>
</template>

<script>
export default {
  props: ["tit", "cla", "mark", "sel"],
  methods: {
    clickItem() {
      this.$emit("changeSel", this.mark);
      this.$router.push("/" + this.mark);
    }
  },
  computed: {
    flag() {
      return this.mark === this.sel ? true : false
    }
  }
};
</script>

<style lang="scss" scoped>
.tabitembox {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-top: 0.5px solid #d8d8d8;

  &.none {
    position: relative;
    border-top: 0.5px solid transparent;

    i {
      font-size: 26px;
    }

    span {
      font-weight: bold;
    }
  }

  .tabicon {
    font-size: 22px;
    color: #333;
    margin-bottom: 5px;
  }

  .tabtit {
    font-size: 12px;
    color: #333;
  }

  .active {
    color: #f03d37;
  }

  .tab-circular {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -40%;
    border-radius: 50%;
    border: 0.5px solid #d8d8d8;
    background: #fff;
  }
}
</style>