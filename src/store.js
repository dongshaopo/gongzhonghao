import Vue from "vue";
import Vuex from "vuex";
import http from "./util/http";
import { Toast } from "vant";
import router from "./router";
import wx from "weixin-js-sdk";
import pub from "./util/plugins";
import { CourseType, ShopType } from "./util/enums";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    personInfo: {}, // 个人信息
    group_footer: 0, // 底部tab
    config: { point_info: {} }, // 网站配置
    search_input: "", // 上次搜索
    search_history: [], // 搜索历史记录
    keywords: "", // 搜索title
    app: "", // 'android', 'ios'
    pay_address_id: "", //确认支付地址
    studyCardInfo: {}, //缓存学习卡卡号和密码信息
    alipay_id: "",
    isScale: '',
    getUserInfo: null, // 用户信息采集
    checkBoxVal: null,
    keepAlivesFixed: ['Oto', 'ClassHomework'],
    keepAlivesDynamic: [],
    keepAlivesDynamicHasRoot: false,
    appBridgeData: {
      data: null,
      isBridge: false
    },
    tab_list: [],
  },
  mutations: {
    SET_TAB_TITLE(state, val) {
      state.tab_list = val
    },
    SET_APP_DATE(state, val) {
      state.appBridgeData = {
        data: val,
        isBridge: !state.appBridgeData.isBridge
      }
    },
    /**
     * 操作keepAlive
     *  */
    SET_KEEPALIVE(state, ary) {
      state.keepAlivesDynamic = ary;
      if (ary.length == 0) { // 清空
        state.keepAlivesDynamicHasRoot = false;
      } else if (ary.length == 1) { // 压入根
        state.keepAlivesDynamicHasRoot = true;
      }
    },
    ADD_KEEPALIVE(state, name) {
      // 没有根，不允许压入，避免冗余数据
      if (!state.keepAlivesDynamicHasRoot) return;
      state.keepAlivesDynamic.push(name);
    },
    /**
     * 操作token
     *  */
    SET_USERINFO(state, person) {
      state.personInfo = person;
    },
    /**
     * 设置foot
     * @param {*} state
     * @param {String} name   路由
     */
    SET_FOOT(state, val) {
      state.group_footer = val;
    },
    /**
     * 保存网站配置参数项
     * @param {Object} app 配置参数
     */
    SET_CONFIG(state, app) {
      state.config = app;
      let link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = app.web_ico;
      document.getElementsByTagName("head")[0].appendChild(link);
      if (app.course_name) {
        // 修改课程类型名称
        for (const key in app.course_name) {
          if (key in CourseType.map) {
            CourseType.map[key] = app.course_name[key];
          }
        }
        // 修改商品类型名称
        for (const key in app.course_name) {
          if (key in ShopType.map) {
            ShopType.map[key] = app.course_name[key];
          }
        }
      }
    },
    /**
     * 储存搜索文本内容
     * @param {String} inp
     */
    SEARCH_INP(state, inp) {
      // 添加上次搜索记录
      state.search_input = inp;
    },
    /**
     * 清空搜索记录
     */
    SEARCH_EMPTY(state) {
      state.search_history = [];
    },
    /**
     * search页操作历史记录
     * @param {*} state
     * @param {最新记录} new_his
     */
    ADD_SEARCH_HISTORY(state, new_his) {
      // 添加搜索历史
      if (state.search_history.indexOf(new_his) != -1) {
        // 若搜索历史中已有该记录，则删除原纪录，添加新纪录到最前
        // 若没有。则直接添加
        var index = state.search_history.indexOf(new_his);
        state.search_history.splice(index, 1);
      }
      state.search_history.unshift(new_his);
      // 若历史记录为五个或更多时，删除最早的
      if (state.search_history.length > 5) {
        state.search_history.pop();
      }
    },
    /**
     * 设置app下的webview环境
     * @param {String} val
     */
    SET_APP(state, val) {
      state.app = val;
    },
    /**
     * oto、考试等用以暂存搜索标题的值
     * @param {String} val 搜索值
     */
    OTO_KEY(state, val) {
      if (val) {
        state.keywords = val;
      } else {
        state.keywords = "";
      }
    },
    SET_PAY_ADDRESS(state, id) {
      if (id) {
        state.pay_address_id = id;
      } else {
        state.pay_address_id = "";
      }
    },
    SET_STUDYCARD_INFO(state, info) {
      state.studyCardInfo = info;
    },
    SET_ALIPAY_ID(state, val) {
      state.alipay_id = val;
    },
    // 设置pad基准
    SET_PAD_SCALE(state, val) {
      state.isScale = val
    },
    SET_USER_INFO(state, val) {
      if (val) {
        state.getUserInfo = val.info
        if (val.checkBox) {
          state.checkBoxVal = val.checkBox
        }
      } else {
        state.getUserInfo = null;
        state.checkBoxVal = null;
      }
    }
  },
  actions: {
    /**
     * 更新个人信息
     * @param {*} content
     */
    async getPerson(content) {
      console.log('content');
      console.log('getPerson');
      //content.commit("SET_USERINFO", userInfo);
    },
    
    /**
     * 设置微信分享
     * @param {*} content
     * @param {Object} path  router to
     */
    async setShare(content, params) {
      if (!pub.isWeiXin()) {
        return;
      }
      // 默认配置
      let web_config;
      let excludeRoute = ["Index", "Course", "Record", "Practise", "Person"]; // 排除一级页面 增加返回首页参数
      if (params.share_type == 1) {
        web_config = content.state.config;
      } else {
        web_config = params;
        if (!web_config.mobile_logo && content.state.config.mobile_logo) {
          web_config.mobile_logo = content.state.config.mobile_logo;
        }
      }
      if (web_config.mobile_logo && content.state.config.mpLogin) {
        if (content.state.config.mpLogin.is_available != 1) {
          return;
        }
        let config = await http.post(`/api/app/getWechatSign`, {
          url: "https://" + window.location.host + params.route.fullPath //必须加 https://
        });
        wx.config({
          // debug: true,
          appId: config.appId,
          timestamp: config.timestamp, // 必填，生成签名的时间戳
          nonceStr: config.noncestr, // 必填，生成签名的随机串
          signature: config.sign, // 必填，签名
          jsApiList: ["onMenuShareAppMessage", "onMenuShareTimeline"] // 必填，需要使用的JS接口列表
        });
        wx.ready(() => {
          let link = "";
          if (excludeRoute.includes(params.route.name)) {
            link = config.url;
          } else {
            if (config.url.indexOf("?") != -1) {
              link = `${config.url}&share_source=1`;
            } else {
              link = `${config.url}?share_source=1`;
            }
          }
          // 朋友
          if (excludeRoute.includes(params.name)) {
            link = config.url;
          } else {
            if (config.url.indexOf("?") != -1) {
              link = `${config.url}&share_source=1`;
            } else {
              link = `${config.url}?share_source=1`;
            }
          }
          wx.onMenuShareAppMessage({
            title: web_config.web_title, // 分享标题
            desc: web_config.web_description, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: web_config.mobile_logo, // 分享图标
            success() {
              // alert('设置成功')
            },
            fail() {
              // alert('分享失败')
            }
          });
          // 朋友圈
          wx.onMenuShareTimeline({
            title: web_config.web_title, // 分享标题
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: web_config.mobile_logo, // 分享图标
            success: function () {
              // alert('设置微信分享成功')
            }
          });
        });
      } else {
        setTimeout(() => {
          //content.dispatch("setShare", params);
        }, 200);
      }
    },
    async setDistributeBind(context, distribute_uid) {
      console.log('setDistributeBind');
    }
  }
});
