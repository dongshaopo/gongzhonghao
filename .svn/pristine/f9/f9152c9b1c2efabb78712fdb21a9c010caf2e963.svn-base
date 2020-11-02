import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./util/http";
import plugins from "./util/plugins";
import Vant from "vant";
import qrcode from "qrcode";
import * as filters from "./util/filter";
import G_component from "@/components/global";
import "vant/lib/index.css";
import "./util/flexiable";
import "./css/common.scss";
import "./css/vant.scss";
import "./util/extension";
import "swiper/dist/css/swiper.css";

// vantUI
Vue.use(Vant);
import { ImagePreview } from "vant";
// vue-quill-editor
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
Vue.use(VueQuillEditor, {
  placeholder: "这一刻想说的…",
});
// 全局组件
Vue.use(G_component);

Vue.prototype.$http = http;
Vue.prototype.$pub = plugins;
Vue.prototype.$qrcode = qrcode;
Vue.prototype.$imgPreview = ImagePreview;
Vue.config.productionTip = false;

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
// ios微信打开网页键盘弹起后页面上滑，导致弹框里的按钮响应区域错位
(function () {
  let myFunction;
  let top = 0
  window.$("body").on("focusin", "input,textarea", function () {
    clearTimeout(myFunction);
    top = window.$(document).scrollTop();
  });
  window.$("body").on("focusout", "input,textarea", function () {
    clearTimeout(myFunction);
    myFunction = setTimeout(function () {
      window.scrollTo({
        top: top || 0,
        left: 0,
        behavior: "smooth",
      }); // =======当键盘收起的时候让页面回到原始位置
    }, 200);
  });
})();
Vue.prototype.$storage = function (storage = localStorage) {
  let that = this;
  if (this._storage) {
    return this._storage;
  }
  this._storage = {
    set: (key, data) => {
      let rawData = storage.getItem(key);
      if (rawData) {
        rawData = JSON.parse(rawData);
      } else {
        rawData = {};
      }
      rawData[that.$store.state.personInfo.id] = data;
      storage[key] = JSON.stringify(rawData);
    },
    get: (key) => {
      let rawData = storage.getItem(key);
      if (rawData) {
        let data = JSON.parse(rawData)[that.$store.state.personInfo.id];
        return data;
      }
    },
  };
  return this._storage;
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
