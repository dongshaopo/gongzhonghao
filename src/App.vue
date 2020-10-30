<template>
  <div id="app" :class="{ 'has-bottom-nav': isBottomNavShow }">
    <!-- 保留状态页面 -->
    <keep-alive
      :include="[
        ...$store.state.keepAlivesFixed,
        $store.state.keepAlivesDynamic[0]
      ]"
    >
      <router-view v-if="isRouterAlive" />
    </keep-alive>
    <app-footer />
    <!--
    	<BottomNavigation @change="onBottomNavChange"></BottomNavigation>
    -->
    </div>
</template>
<script>
import appFooter from "./components/Footer";
import BottomNavigation from "./components/BottomNavigation";
// 打开手机端控制台
// import VConsole from "vconsole";
// new VConsole();

export default {
  components: {
    appFooter,
    BottomNavigation
  },
  provide() {
    return {
      // 注入根组件方法以供子级组件使用
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true,
      isBottomNavShow: false
    };
  },
  methods: {
    /**
     * app内置h5设置
     */
    appSet() {
      let { app, token } = this.$pub.app_js();
      this.$store.commit("SET_APP", app);
      if (app) {
        setTimeout(() => {
          this.$pub.registerWebViewJavascriptBridge(data => {
            this.$store.commit("SET_APP_DATE", data);
          });
        }, 500);
      }
      if (token) {
        if (token == "clear") {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("user_id");
        } else {
          localStorage.setItem("adminToken", token);
        }
      }
    },
    /**
     * 刷新页面
     * */
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
    onRefresh() {
      this.reload();
    },
    onBottomNavChange(show) {
      this.isBottomNavShow = show;
    }
  },
  created() {
    this.appSet();
    if (localStorage.adminToken) {
      this.$store.dispatch("getPerson");
    }
    if (document.documentElement.clientWidth >= 500) {
      let scale = 1.93;
      if (window.navigator.userAgent.indexOf("Android") > -1) {
        scale = document.documentElement.clientWidth / 375;
      }
      this.$store.commit("SET_PAD_SCALE", scale);
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  background: #fff;
  min-height: 100vh;
  box-sizing: border-box;
}
.has-bottom-nav {
  height: auto !important;
  padding-bottom: 100px;
}
</style>
