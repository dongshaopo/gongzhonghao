/**
 *  序列化时间
 * @param {String} val 时间戳
 * @param {String} fmt 格式化类型
 *   'yyyy-MM-dd hh:mm:ss' => 2019-12-10 10:10:00
 */
const formatTime = (val, fmt = "yyyy/MM/dd hh:mm:ss") => {
  if (!val && val !== 0) return "";
  let date = new Date(val * 1000);
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

const formatDate = val => {
  return formatTime(val, "yyyy/MM/dd");
};

/**
 * 格式化价格
 * @param {Number} 价格
 * @param {Number} toFix 保留位数
 */
const toFixPrice = (val, toFix = 2) => {
  let price = 0;
  if (val) {
    if (toFix == 2) {
      price = (val / 100).toFixed(2);
    }
    if (toFix == 1) {
      price = (val / 100).toFixed(1);
    }
    if (toFix == 0) {
      price = val / 100;
    }
    if (toFix == -1) {
      // 保留两位小数 不四舍五入
      price = val;
      price = price.toString();
      let index = price.indexOf(".");
      if (index !== -1) {
        price = price.substring(0, 2 + index + 1);
      } else {
        price = price.substring(0);
      }
      price = parseFloat(price).toFixed(2);
    }
    // 只取整数位 不四舍五入
    if (toFix == -2) {
      price = parseInt(val / 100);
    }
  }
  return price;
};

/**
 * 去最后两位数值 不满两位补0
 * */
const priceSubstr = price => {
  if (price >= 100) {
    let p = String(price);
    let sub_p = p.substr(p.length - 2);
    if (sub_p == "00") {
      return "";
    } else {
      return "." + sub_p;
    }
  } else if (price >= 10) {
    return "." + price;
  } else {
    return "." + "0" + price;
  }
};

/**
 * 题库倒计时
 * @param {Number} t 时间差
 * @param {Number} type 返回类型
 * */
const timeMeter = (t, type = 1) => {
  let time = Number(t);
  let h = time / 3600 < 10 ? "0" + parseInt(time / 3600) : parseInt(time / 3600);
  if (h != "00") time = time - h * 3600;
  let m = time / 60 < 10 ? "0" + parseInt(time / 60) : parseInt(time / 60);
  let s = time % 60 < 10 ? "0" + (time % 60) : time % 60;
  if (type == 1) {
    return h + ":" + m + ":" + s;
  } else if (type == 2) {
    return m + "分" + s + "秒";
  }
};

/**
 * 团时间
 * @param {Number} d 时间差
 * */
const spellMeter = d => {
  if (d < 0) {
    return 0 + "分" + 0 + "秒";
  } else {
    let h = parseInt(d / 3600);
    let m = parseInt((d - h * 3600) / 60);
    let s = (d - h * 3600) % 60;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    if (h) {
      return `${h}:${m}:${s}`;
    } else {
      if (m) {
        return `${m}:${s}`;
      } else {
        return `${s}`;
      }
    }
  }
};

/**
 * 拼团活动时间
 * @param {Number} d_time 时间差
 * */
const compuTime = d_time => {
  if (d_time < 0) {
    return `00:00:00`;
  } else {
    let time_distance = d_time;
    let int_day = Math.floor(time_distance / 86400);
    time_distance -= int_day * 86400;
    let int_hour = Math.floor(time_distance / 3600);
    time_distance -= int_hour * 3600;
    let int_minute = Math.floor(time_distance / 60);
    time_distance -= int_minute * 60;
    let int_second = Math.floor(time_distance);
    if (int_hour < 10) int_hour = "0" + int_hour;
    if (int_minute < 10) int_minute = "0" + int_minute;
    if (int_second < 10) int_second = "0" + int_second;
    if (int_day) {
      return `${int_day}天 ${int_hour} : ${int_minute} : ${int_second}`;
    } else {
      if (int_hour != "00") {
        return `${int_hour} : ${int_minute} : ${int_second}`;
      } else {
        return `${int_minute} : ${int_second}`;
      }
    }
  }
};

/**
 * 题库做题、时限
 * @param {Number} answer_time 秒
 * */
const practiseTime = answer_time => {
  if (answer_time) {
    let time = answer_time;
    if (time % 60 == 0) {
      return time / 60 + "分钟";
    } else {
      return parseInt(time / 60) + 1 + "分钟";
    }
  }
  return "0分钟";
};

/**
 * 关键信息处理
 *  @param {Number} start_num 保留前几位
 * @param  {Number} start_num 保留后几位
 * */
const identityCode = (val, start_num = 3, end_num = 4) => {
  let str = val;
  if (typeof str == "string" || typeof str == "number") {
    str = str.toString();
    str =
      str.substr(0, start_num) + "****" + str.substr(str.length - end_num, str.length);
  }
  return str;
};

export {
  formatTime,
  formatDate,
  toFixPrice,
  timeMeter,
  spellMeter,
  compuTime,
  priceSubstr,
  identityCode,
  practiseTime
};
