<template>
  <div class="header">
    <header>
      <div class="back" v-if="returnShow" @click="goBack">
        <img
          v-if="backStyle == 'white'"
          src="@/assets/images/icon_head_back_white@2x.png"
        />
        <img v-else src="@/assets/images/return.png" />
      </div>
      <h3>{{ title.name }}</h3>
      <div class="right" @click="parentHandler">
        <slot name="right-sum"></slot>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Object,
    },
    returnShow: {
      type: Boolean,
      default: true,
    },
    goBackHandler: {
      type: Function,
    },
    backStyle: {
      type: String,
      default: 'black',
    },
  },
  data() {
    return {}
  },
  methods: {
    goBack() {
      if (this.goBackHandler) {
        this.goBackHandler()
        return
      }
      if (this.title.backUrl) {
        this.$router.replace({
          name: this.title.backUrl,
        })
        return
      }
      // 无法返回的时候 推向首页
      if (window.history.length <= 1 || this.title.share) {
        this.$router.push({
          path: '/',
        })
        return
      }
      this.$router.go(-1)
    },
    parentHandler() {
      this.$emit('toGet')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 88px;
  line-height: 88px;
  background: #fff;
  header {
    height: 88px;
    position: fixed;
    z-index: 999;
    width: 100%;
    background: #fff;
    .back {
      // float: left;
      position: absolute;
      // line-height: 100%;
      width: 80px;
      text-align: center;
      img {
        width: 18px;
        height: 32px;
      }
    }
    h3 {
      font-size: 36px;
      color: #595959;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      @include eps;
      max-width: 500px;
    }
    .right {
      height: 100%;
      float: right;
      font-size: 30px;
      color: #595959;
      padding: 0 20px;
    }
  }
}
</style>
