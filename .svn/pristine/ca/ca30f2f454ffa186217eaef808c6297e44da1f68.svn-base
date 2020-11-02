import plugins from "./plugins";
import { Guid } from "./guid";
import { Toast, Dialog } from "vant";

let flag = false;

Toast.allowMultiple();
const buildConfig = require("../build/" + process.env.BUILD_ENV + ".js");

const Http = function () {
  let DeviceID = localStorage.DeviceID;
  if (!DeviceID) {
    DeviceID = Guid.NewGuid().ToString("D");
    localStorage.DeviceID = DeviceID;
  }
  this.DeviceID = DeviceID;
  this.toast = Toast
};

Http.prototype.fetch = function (
  url,
  method,
  params = {},
  deviceType,
  callback,
  successHandler
) {
  url = buildConfig.BASE_URL + url;
  let config = {
    method: method,
    mode: "cors"
  };
  config.headers = {
    DeviceType: deviceType ? deviceType : "H5",
    DeviceID: this.DeviceID
  };
  let toast = null
  // 是否隐藏loading
  if (params.hideLoadingToast) {
    delete params.hideLoadingToast
  } else {
    toast = Toast.loading({
      className: "toast-loading",
      duration: 0
    });
  }
  if (localStorage.adminToken) {
    config.headers.Authorization = "Bearer " + localStorage.adminToken;
  } else if (sessionStorage.adminToken) {
    config.headers.Authorization = "Bearer " + sessionStorage.adminToken;
  }
  if (params instanceof FormData) {
    config.body = params;
  } else {
    if (method == "get" || method == "head") {
      if (url.indexOf("?") > 0) {
        url += "&";
      } else {
        url += "?";
      }
      for (let key in params) {
        let value = params[key];
        if (typeof value == "function" || value === undefined || value === "") {
          continue;
        }
        url += key + "=" + params[key] + "&";
      }
    } else {
      config.body = JSON.stringify(params);
    }
    config.headers["Content-Type"] = "application/json";
  }
  return new Promise((resolve, reject) => {
    fetch(url, config).then(async res => {
      if (toast) toast.clear(true);
      if (res.status == 200) {
        let data = await res.json();
        if (data.code == 200) {
          resolve(data.data || data);
          if (successHandler) {
            successHandler(data);
          }
        } else {
          if (data.code == 202 || data.code == 209) {
            if (!flag) {
              flag = true;
              Toast({
                message: data.msg,
                duration: 1000,
                onClose: () => {
                  localStorage.removeItem("adminToken");
                  localStorage.removeItem("user_id");
                  plugins.checkLogin(false);
                  setTimeout(() => {
                    flag = false;
                  }, 500);
                }
              });
            }
          } else if (data.code == 203 || data.code == 204) {
            resolve(data);
          } else {
            if (data.code == 301) {
              Dialog.alert({
                message: data.msg,
                className: "check-msg",
                confirmButtonText: "我知道了",
                closeOnClickOverlay: true
              });
            } else {
              Toast({
                message: data.msg,
                duration: 1000,
                forbidClick: true,
                onClose() {
                  if (callback) {
                    // LivePlay.vue
                    callback(data);
                  }
                }
              });

            }
          }
        }
      } else {
        reject(res.statusText);
      }
    });
  });
};

Http.prototype.get = function (
  url,
  params,
  deviceType = "H5",
  callback,
  successHandler
) {
  return this.fetch(url, "get", params, deviceType, callback, successHandler);
};
// deviceType设备类型 混合开发ios和安卓下单和微信内部支付使用需要改变
Http.prototype.post = function (url, params, deviceType = "H5") {
  return this.fetch(url, "post", params, deviceType);
};

Http.prototype.put = function (url, params) {
  return this.fetch(url, "put", params);
};

Http.prototype.delete = function (url, params) {
  return this.fetch(url, "delete", params);
};

export default new Http();
