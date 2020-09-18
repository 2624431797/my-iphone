<template>
  <section class="codebox">
    <mt-header title="时之恋人">
      <router-link to="/" slot="left">
        <mt-button icon="back" />
      </router-link>
    </mt-header>
    <div class="img-container">
      <img src="http://pic.netbian.com/uploads/allimg/200528/121205-159063912551bb.jpg" alt="404" />
    </div>
  </section>
</template>

<script>
export default {
  name: "code",
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style scoped lang="scss">
.codebox {
  width: 100%;

  .mint-header {
    background: #e54847;
  }
}
</style>