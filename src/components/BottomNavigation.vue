<template>
  <div class="bottom" v-if="show">
    <div @click="goTo(-1)">
      <i class="van-icon van-icon-arrow-left"></i>
    </div>
    <div @click="goTo(1)">
      <i class="van-icon van-icon-arrow"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "BottomNavigation",
  data() {
    return {
      show: false
    };
  },
  watch: {
    $route() {
      this.show = false;
    },
    show() {
      this.$emit("change", this.show);
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$pub.browser.version.QQ && !this.$store.state.app) {
        this.scroll(direction => {
          if (history.length <= 1) {
            this.show = false;
            return;
          }
          if (direction == "down") {
            this.show = true;
          } else {
            this.show = false;
          }
        });
      }
    });
  },
  methods: {
    goTo(index) {
      history.go(index);
    },
    scroll(callback) {
      let beforeScrollTop = document.documentElement.scrollTop;
      window.addEventListener(
        "scroll",
        function() {
          let afterScrollTop = window.$(window).scrollTop(),
            delta = afterScrollTop - beforeScrollTop;
          if (delta === 0) return false;
          callback(delta > 0 ? "down" : "up");
          beforeScrollTop = afterScrollTop;
        },
        false
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.bottom {
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10000;
  text-align: center;
  line-height: 1;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    flex-grow: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
</style>