class Enum {
  constructor(map) {
    this.map = map;
  }

  getOptions() {
    let options = [];
    for (let key in this.map) {
      options.push({ key: key, value: this.map[key] });
    }
    return options;
  }

  getValue(key) {
    return this.map[key];
  }

  getObject() {
    let obj = {};
    for (let key in this.map) {
      obj[key] = this.map[key];
    }
    return obj;
  }
}

const CourseType = new Enum({
  1: "一对一",
  2: "大班课",
  3: "小班课",
  4: "公开课",
  5: "点播课",
  7: "面授课",
  8: "音频课",
  9: "系统课",
  10: "图文课",
  11: "会员课",
  15: "分组课",
  16: "线上双师课"
});

const ShopType = new Enum({
  1: "一对一",
  2: "大班课",
  3: "小班课",
  4: "公开课",
  5: "视频课",
  7: "面授课",
  8: "音频课",
  9: "系统课",
  10: "图文课",
  11: "充值余额",
  12: "图书",
  13: "文库",
  14: "会员",
  15: "分组课",
  16: "线上双师课"
});

const LiveStatus = new Enum({
  0: "未开始",
  1: "直播中",
  2: "已结束",
  3: "回放",
  4: "暂无回放"
});

const SexType = new Enum({
  0: "男",
  1: "女",
  3: "保密"
});

const OrderStatus = new Enum({
  1: "交易中",
  2: "交易完成",
  3: "交易关闭"
});

const PayStatus = new Enum({
  1: "待支付",
  2: "已支付",
  3: "退款申请中",
  4: "退款中",
  5: "退款成功",
  6: "退款失败"
});

const PayType = new Enum({
  1: "微信",
  2: "支付宝",
  3: "虚拟币支付",
  4: "苹果支付",
  5: "学习卡兑换",
  6: "赠送",
  7: "优惠券支付",
  8: "线下支付"
});

const ScopeType = new Enum({
  1: "全部课程可用",
  2: "指定分类可用",
  3: "指定课程可用"
});

const PlayType = new Enum({
  1: "未开始",
  2: "直播中",
  3: "已结束",
  4: "已结束",
  5: "已结束"
});

const MyPlayType = new Enum({
  1: "未开始",
  2: "直播中",
  4: "回放"
});

const OrderType = new Enum({
  1: "约课订单",
  2: "课程订单",
  3: "会员订单",
  4: "图书订单",
  5: "拼团订单"
});

const QuesType = new Enum({
  1: "单选",
  2: "判断",
  3: "多选",
  4: "不定项",
  5: "简答题",
  6: "材料题"
});

const CorrectType = new Enum({
  1: "错别字",
  2: "答案解析不匹配",
  3: "解析错误",
  4: "其他"
});

// 发货状态
const ShipStatus = new Enum({
  1: "待发货",
  2: "无需发货",
  3: "已发货",
  4: "已收货"
});

// 积分类型
const IntegralType = new Enum({
  1: "注册",
  2: "完善资料",
  3: "提交作业",
  4: "订单评价",
  5: "收藏",
  6: "分享",
  7: "成功交易",
  8: "签到"
});

// 金币行为类型
const CurrencyActionType = new Enum({
  1: "充值",
  2: "购买课程",
  3: "课程退款",
  4: "购买约课",
  5: "取消约课",
  6: "平台增加",
  7: "平台扣减"
});

const LetterSort = new Enum({
  "1": "A",
  "2": "B",
  "3": "C",
  "4": "D",
  "5": "E",
  "6": "F",
  "7": "G",
  "8": "H",
  "9": "I",
  "10": "J",
  "11": "K",
  "12": "L",
  "13": "M",
  "14": "N",
  "15": "O",
  "16": "P",
  "17": "Q",
  "18": "R",
  "19": "S",
  "20": "T",
  "21": "U",
  "22": "V",
  "23": "W",
  "24": "X",
  "25": "Y",
  "26": "Z"
});

const PractiseType = new Enum({
  1: "随机练习",
  2: "套卷练习",
  3: "专项练习"
});

export {
  CourseType,
  ShopType,
  LiveStatus,
  SexType,
  OrderStatus,
  PayStatus,
  PayType,
  ScopeType,
  PlayType,
  MyPlayType,
  OrderType,
  QuesType,
  CorrectType,
  ShipStatus,
  IntegralType,
  CurrencyActionType,
  LetterSort,
  PractiseType
};
