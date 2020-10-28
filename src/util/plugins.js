import store from "../store";
import router from "../router";
import order from "./order";
import coursePlay from './play'
import * as filter from './filter'
const plugins = {
  //等保,type==1说明需要验证,val是要验证的值,返回true验证通过，否则给出提示语
  guarantee(type, val) {
    var regTest = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    var msg = '密码必须包含数字和大小写字母任意两种组合，长度6-16位';
    if (type == 1) {
      if (!regTest.test(val)) {
        return msg;
      }
      else {
        return true;
      }
    }
    else {
      return true;
    }
  },
  isText(_value) {//字符串是空就输出空，防止undefined
    _value = "" + _value;
    if (_value == "null" || _value == null || _value == "" || _value == "undefined") {
      return '';
    }
    return _value;
  },
  /**
   * 手机号检测
   * @param {Number} s 手机号
   */
  isPoneAvailable(s) {
    if (s != null) {
      var length = s.length;
      if (length == 11 && /^1\d{10}$/.test(s)) {
        return true;
      } else {
        return false;
      }
    }
  },
  // 课程播放
  play(data) {
    return coursePlay({
      router, store, data,
    })
  },
  /**
   * 格式化时间
   * @param {Number} timestamp 时间戳
   */
  formatTime(val, fmt = 'yyyy/MM/dd hh:mm:ss') {
    return filter.formatTime(val, fmt)
  },
  /**
   * 注册连接app的方法
   * @param {Function} callbacks  回调方法
   */
  registerWebViewJavascriptBridge(callbacks) {
    if (store.state.app == "ios") {
      iosEvent(callbacks);
    } else {
      androidEvent(callbacks);
    }

    function androidEvent(callbacks) {
      function connectWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) {
          callback(window.WebViewJavascriptBridge);
        } else {
          document.addEventListener(
            "WebViewJavascriptBridgeReady",
            function () {
              callback(window.WebViewJavascriptBridge);
            },
            false
          );
        }
      }
      connectWebViewJavascriptBridge(function (bridge) {
        bridge.init(function (message, responseCallback) {
          let data = {
            init: "success"
          };
          if (responseCallback) {
            responseCallback(data);
          }
        });
        //demo 的js注册方法给native调用
        bridge.registerHandler("functionInJs", function (
          data,
          responseCallback
        ) {
          if (responseCallback) {
            let responseData = "Javascript Says Right back aka!";
            responseCallback(responseData);
          }
          callbacks(data);
        });
      });
    }

    function iosEvent(callbacks) {
      function setupWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) {
          return callback(window.WebViewJavascriptBridge);
        }
        if (window.WVJBCallbacks) {
          return window.WVJBCallbacks.push(callback);
        }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement("iframe");
        WVJBIframe.style.display = "none";
        WVJBIframe.src = "wvjbscheme://__BRIDGE_LOADED__";
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function () {
          document.documentElement.removeChild(WVJBIframe);
        }, 0);
      }
      setupWebViewJavascriptBridge(function (bridge) {
        // 日志
        // var uniqueId = 1
        // function log(message, data) {
        //     var log = document.getElementById('log')
        //     var el = document.createElement('div')
        //     el.className = 'logLine'
        //     el.innerHTML = uniqueId++ + '. ' + message + ':<br/>' + JSON.stringify(data)
        //     if (log.children.length) {
        //         log.insertBefore(el, log.children[0])
        //     } else {
        //         log.appendChild(el)
        //     }
        // }
        // 注册
        bridge.registerHandler("functionInJs", function (
          data,
          responseCallback
        ) {
          responseCallback(data);
          if (callbacks) {
            callbacks(data);
          }
        });
        // bridge.callHandler('ObjC Echo', { 'key': 'value' }, function responseCallback(responseData) {
        //     console.log("JS received response:", responseData)
        // })
      });
    }
  },
  /**
   * app内部方法
   * @param {String} name  方法名称  必选   // 登录：'login'、 退出web：'closeAppPage'
   * @param {Object} params  方法需要的参数, 非必选
   */
  appAction(name, params) {
    window.WebViewJavascriptBridge.callHandler("action", {
      name,
      params
    });
  },
  /**
   * h5跳转到app页面
   * @param {String} name 路由名
   * @param {Object} params 参数
   */
  InAppPage(name, params) {
    if (store.state.app) {
      this.appAction(name, params);
    } else {
      router.push({
        name,
        query: params
      });
    }
  },
  /**
   * 新开web页面
   * @param {String} url 路径（必选）  例 'detail?id=322'
   */
  appJump(url) {
    window.WebViewJavascriptBridge.callHandler("action", {
      name: "web",
      url
    });
  },
  // 两周
  initDays() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    let weekIndex = new Date().getDay();
    if (weekIndex == 0) weekIndex = 7;
    let cur_month_day = new Date(year, month, 0).getDate();
    let prev_month_day = new Date(year, month - 1, 0).getDate(); //上月天数
    // let next_month_day = new Date(year, month + 1, 0).getDate(); //下月天数
    // 年初和年尾
    if (month - 1 == 0) {
      prev_month_day = new Date(year - 1, 12, 0).getDate();
      // next_month_day = new Date(year, month + 1, 0).getDate();
    } else if (month + 1 == 13) {
      prev_month_day = new Date(year, month - 1, 0).getDate();
      // next_month_day = new Date(year + 1, 1, 0).getDate();
    }
    let d_value = 14 - weekIndex; //差值
    let days = [];
    if (day + d_value > cur_month_day) {
      // 包含下个月
      let d = 14 - (day + d_value - cur_month_day);
      for (let i = 0; i < d; i++) {
        days[i] = {
          year,
          month,
          day: cur_month_day - (d - i - 1)
        };
      }
      days[d] = {
        year: month + 1 > 12 ? year + 1 : year,
        month: month + 1 > 12 ? 1 : month + 1,
        day: 1
      };
      for (let i = d + 1; i < 14; i++) {
        days[i] = {
          year: days[i - 1].year,
          month: days[i - 1].month,
          day: days[i - 1].day + 1
        };
      }
    } else if (weekIndex - day > 0) {
      // 包含上个月
      let d = weekIndex - day;
      for (let i = 0; i < d; i++) {
        days[i] = {
          year: month - 1 < 1 ? year - 1 : year,
          month: month - 1 < 1 ? 12 : month - 1,
          day: prev_month_day - (d - i - 1)
        };
      }
      days[d] = {
        year,
        month,
        day: 1
      };
      for (let i = d + 1; i < 14; i++) {
        days[i] = {
          year,
          month,
          day: days[i - 1].day + 1
        };
      }
    } else {
      // 本月
      days[0] = {
        year,
        month,
        day: day - weekIndex + 1
      };
      for (let i = 1; i < 14; i++) {
        days[i] = {
          year,
          month,
          day: days[i - 1].day + 1
        };
      }
    }
    let currentWeek = 1,
      flag = 0;
    days.forEach((item, index) => {
      if (item.day == day) {
        flag = 1;
      }
      if (index == 7) {
        currentWeek = 0;
      }
      item.disable = flag; // 0 今天之前 1 之后
      item.currentWeek = currentWeek; // 本周 下周
    });
    // days: [{month: 4, day: 1}...]
    // day: today
    return {
      days,
      day
    };
  },
  // app环境
  app_js() {
    let app = 0;
    // let app = 'ios'
    let token = "";
    let arrcookie = document.cookie.split("; "); // 获取cookie字符串
    for (var i = 0; i < arrcookie.length; i++) {
      let arr = arrcookie[i].split("=");
      if (arr[0] == "token") {
        // token
        token = arr[1];
      } else if (arr[0] == "deviceType") {
        // 设备类型 'ios' 'android'
        app = arr[1];
      }
    }
    return {
      app,
      token
    };
  },
  /**
   * 对象转字符串
   * @param {Object} obj 对象、数组
   * @param {String} str 间隔符
   * @param {String} attr 遍历属性值
   * @param {Number} len 截点
   */
  objToStr(obj, str = ",", attr, len) {
    let result = "";
    if (attr) {
      for (let i = 0; i < obj.length; i++) {
        if (len && len < i) {
          result += "等";
          break;
        }
        if (obj[i][attr]) {
          result += obj[i][attr] + str;
        }
      }
    } else {
      for (let i in obj) {
        if (obj[i]) {
          result += obj[i] + str;
        }
      }
    }
    if (result) result = result.substr(0, result.length - 1);
    return result;
  },
  /**
   * 登录跳转检测
   * @param {Boolean} isCheck 检测是否登录后，执行login()
   * @param {String} action 跳转方式
   */
  checkLogin(isCheck = true, action = "push") {
    if (isCheck) {
      if (!localStorage.adminToken) {
        // 将login的上下文window改为当前对象plugin
        login.call(this);
        return false;
      } else {
        return true;
      }
    } else {
      login.call(this);
    }

    // login函数上下文环境为window
    function login() {
      if (store.state.app) {
        this.appAction("login");
      } else {
        // 通过分享进入的登录完成返回原页面
        if (router.currentRoute.query.share_source) {
          window.sessionStorage.redirect_url = JSON.stringify({
            name: router.currentRoute.name,
            query: router.currentRoute.query
          })
        }
        router[action]({
          name: "SmsLogin"
        });
      }
    }
  },
  /**
   * @param {*} res 登录数据处理
   */
  loginSave(res) {
    localStorage.setItem("adminToken", res.remember_token);
    localStorage.setItem("user_id", res.id);
    store.dispatch("getPerson");
    if (res.back_num) {
      router.go(res.back_num);
    } else {
      if (sessionStorage.redirect_url) {
        router.push(JSON.parse(sessionStorage.redirect_url));
      } else {
        router.push({
          name: "Person"
        });
      }
    }
    if (sessionStorage.redirect_url) sessionStorage.removeItem('redirect_url')
  },
  /**
   * 登录完成是否需要信息采集
   * @param {Object} res  登录接口返回数据
   */
  needCollect(res) {
    if (res.need_collect_data) {
      if (res.back_num) {
        res.back_num--;
      }
      sessionStorage.setItem("login_info", JSON.stringify(res));
      router.push({
        name: "GetUserInfo"
      });
    } else {
      this.loginSave(res);
    }
  },
  /**
   * 跳转支付页面
   * @param {Object} params 参数
   * @param {String} action 'push' 'replace'
   */
  toPay(query, action = "push") {
    let name = "Pay";
    if (store.state.app == "ios" && query.type != 12) {
      name = "AppPay";
    }
    router[action]({
      name,
      query
    });
  },
  /**
   * 跳转订单
   * @param {String} type  1 约课、 14 会员、 12 图书  其他 我的学习
   */
  ToOrder(type) {
    // replace
    let name = "Record";
    let query = {
    };
    if (type == "1") {
      name = "Record";
    } else if (type == "14") {
      name = "Person";
    } else if (type == "12") {
      name = "Order";
      query.order_type = 4;
    } else {
      name = "MyStudy";
    }
    if (store.state.app) {
      let params = {
      };
      if (type == "1") {
        name = "homePage";
        params.router = "Record";
      } else if (type == "14") {
        name = "homePage";
        params.router = "Person";
      } else if (type == "12") {
        // 图书
        this.appJump(`order?order_type=4`);
        this.appAction("paySuccessRouterCompleteCallback");
        return;
      } else {
        name = "myLearned";
      }
      this.appAction(name, params);
      this.appAction("paySuccessRouterCompleteCallback");
    } else {
      this.show_wx('set')
      router.replace({
        name,
        query
      });
    }
  },
  /**
   * 打开客服
   */
  openUrl() {
    window.location.href = store.state.config.customer_service_link;
  },
  /**
   * 购买有效期
   * */
  getExpireDay(end_days) {
    if (end_days > 2) {
      return "（还剩<font>" + end_days + "</font>天到期）";
    } else {
      switch (end_days) {
        case 0:
          return "（<font>今天</font>到期）";
        case 1:
          return "（<font>明天</font>到期）";
        default:
          return "（<font>后天</font>到期）";
      }
    }
  },
  /**
   * 微信弹窗
   * */
  show_wx(action) {
    if (action == 'set') {
      window.localStorage.setItem('user_payed', 1)
    } else if (action == 'get') {
      return window.localStorage.getItem('user_payed')
    } else {
      window.localStorage.removeItem('user_payed')
    }
  },
  /**
   * 微信环境检测
   */
  isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  },
  download(name, url) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", url + "?" + new Date().getTime());
    xhr.responseType = "blob";
    xhr.onprogress = evt => {
      this.downloadPercent = (evt.loaded * 100) / evt.total;
    };
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let blob = xhr.response;
        let blobUrl = URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = blobUrl;
        link.download = name;
        link.click();
      }
    };
    xhr.send();
  },
  // px 转 vw
  px2vw(pxVal) {
    return (100 / 750) * parseInt(pxVal) + "vw";
  },
  // 双师大小版播放type
  getPlayType(type, course_item) {
    let query = {}
    if (course_item.course_type == 16) {
      if (type == "big") {
        query.type = 1;
      } else {
        query.type = 2;
      }
    }
    return query
  },
  /**
   * pad height换算
   * height: 设计图高度值
   * */
  scaleHeight(height) {
    if (store.state.isScale) {
      return (height * store.state.isScale) / 75 + 'rem'
    } else {
      return height / 75 + 'rem'
    }
  },
  showTrySee(courseType) {
    switch (parseInt(courseType)) {
      case 7:
      case 9:
      case 10:
        return false;
      default:
        return true;
    }
  },
  noPlayBcak(state) {
    switch (parseInt(state)) {
      case 3:
      case 5:
        return true;
      // break;
      default:
        return false;
    }
  },
  showPlayType(courseType) {
    switch (parseInt(courseType)) {
      case 5:
      case 8:
      case 9:
      case 10:
        return false;
      default:
        return true;
    }
  },
  showDuration(courseType) {
    switch (parseInt(courseType)) {
      case 5:
      case 8:
      case 9:
      case 10:
        return false;
      default:
        return true;
    }
  },
  showProgress(courseType) {
    switch (parseInt(courseType)) {
      case 7:
      case 9:
      case 10:
        return false;
      default:
        return true;
    }
  },
  order,
  browser: {
    version: (function () {
      let u = navigator.userAgent;
      let ua = navigator.userAgent.toLocaleLowerCase();
      return {
        trident: u.indexOf("Trident") > -1, // IE内核
        presto: u.indexOf("Presto") > -1, // opera内核
        webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, // 火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // IOS终端
        android: u.indexOf("Android") > -1 || u.indexOf("Mac") > -1, // 安卓终端
        iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1, // 是否为iphone或QQHD浏览器
        iPad: u.indexOf("iPad") > -1, // 是否为iPad
        webApp: u.indexOf("Safari") == -1, // 是否web应用程序，没有头部与底部
        QQbrw: u.indexOf("MQQBrowser") > -1, // QQ浏览器
        weiXin: u.indexOf("MicroMessenger") > -1, // 微信
        QQ: ua.match(/QQ/i) == "qq", // QQ
        weiBo: ua.match(/WeiBo/i) == "weibo", // 微博
        ucLowEnd: u.indexOf("UCWEB7.") > -1, //
        ucSpecial: u.indexOf("rv:1.2.3.4") > -1,
        webview:
          !(u.match(/Chrome\/([\d.]+)/) || u.match(/CriOS\/([\d.]+)/)) &&
          u.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        ucweb: (function () {
          try {
            return (
              parseFloat(
                u
                  .match(/ucweb\d+\.\d+/gi)
                  .toString()
                  .match(/\d+\.\d+/)
                  .toString()
              ) >= 8.2
            );
          } catch (e) {
            if (u.indexOf("UC") > -1) {
              return true;
            }
            return false;
          }
        })(),
        Symbian: u.indexOf("Symbian") > -1,
        ucSB: u.indexOf("Firofox/1.") > -1
      };
    })()
  },
  /**
   * 拷贝
   * */
  deepClone(target) {
    let result;
    if (typeof target === 'object') {
      if (Array.isArray(target)) {
        result = [];
        for (let i in target) {
          // 递归克隆数组中的每一项
          result.push(this.deepClone(target[i]))
        }
      } else if (target === null) {
        result = null;
      } else if (target.constructor === RegExp) {
        result = target;
      } else {
        result = {};
        for (let i in target) {
          result[i] = this.deepClone(target[i]);
        }
      }
    } else {
      result = target;
    }
    return result;
  },
  /**
   * 级联属性格式化
   * */
  formatTree(data, attr_name = 'child', insertEmpty = false) {
    let list = data, newArr = [];
    list.forEach(item => {
      let tab_item = {
        text: item.name,
        id: item.id
      };
      item[attr_name] &&
        item[attr_name].forEach(it => {
          // 二级全部传一级id
          if (it.id == 0) {
            it.id = item.id;
          }
          if (tab_item.children) {
            tab_item.children.push({ text: it.name, id: it.id });
          } else {
            tab_item.children = [{ text: it.name, id: it.id }];
          }
        });
      newArr.push(tab_item);
    });
    if (insertEmpty) {
      newArr.push({ id: "", text: "", children: [] });
    }
    return newArr
  }
};
export default plugins;
