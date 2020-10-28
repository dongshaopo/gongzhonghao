<template>
  <div class="footer-btn">
    <div class="defaults-btn" v-if="title" @click="submit">
      <van-button size="large" type="primary">{{ title }}</van-button>
      <slot name="icon"></slot>
    </div>
    <slot v-else name="btn"></slot>
  </div>
</template>

<script>
export default {
  name: "FooterBtn",
  props: {
    title: {
      type: String
    }
  },
  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>

<style lang="scss" scoped>
.footer-btn {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 110px;
  background: #fff;
  box-shadow: 0px -4px 12px 0px rgba(245, 245, 245, 0.7);
  z-index: 99;
  .defaults-btn {
    height: 88px;
    margin: 11px 30px;
    color: rgba(255, 255, 255, 1);
    position: relative;
    > button {
      display: block;
      width: 100%;
      box-sizing: border-box;
      font-family: PingFangSC-Medium;
      font-weight: 500;
    }
  }
}
</style>
