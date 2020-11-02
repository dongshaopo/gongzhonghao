const order = {
  status: {
    // 虚拟物品，无拼团
    virtual_0: [
      { condition: { order_status: 1, pay_status: 1 }, descID: 1 },
      { condition: { order_status: 2, pay_status: 2 }, descID: 5 },
      {
        condition: [
          { order_status: 1, pay_status: 3 },
          { order_status: 2, pay_status: 3 }
        ],
        descID: 7
      },
      {
        condition: [
          { order_status: 1, pay_status: 4 },
          { order_status: 2, pay_status: 4 }
        ],
        descID: 8
      },
      {
        condition: [
          { order_status: 1, pay_status: 6 },
          { order_status: 2, pay_status: 6 }
        ],
        descID: 9
      },
      { condition: { order_status: 3, pay_status: 1 }, descID: 12 },
      { condition: { order_status: 3, pay_status: 5 }, descID: 10 },
      {
        condition: {
          order_status: 2,
          pay_status: 8
        },
        descID: 14
      }
    ],
    // 实体物品，无拼团
    entity_0: [
      { condition: { order_status: 1, pay_status: 1 }, descID: 1 },
      {
        condition: [
          { order_status: 1, pay_status: 2, ship_status: 1 },
          {
            order_status: 2,
            pay_status: 8,
            ship_status: 1
          }
        ],
        descID: 3
      },
      {
        condition: { order_status: 1, pay_status: 2, ship_status: 3 },
        descID: 4
      },
      {
        condition: { order_status: 2, pay_status: 2 },
        descID: 5
      },
      {
        condition: [
          { order_status: 1, pay_status: 3 },
          { order_status: 2, pay_status: 3 }
        ],
        descID: 7
      },
      {
        condition: [
          { order_status: 1, pay_status: 4 },
          { order_status: 2, pay_status: 4 }
        ],
        descID: 8
      },
      {
        condition: [
          { order_status: 1, pay_status: 6 },
          { order_status: 2, pay_status: 6 }
        ],
        descID: 9
      },
      { condition: { order_status: 3, pay_status: 1 }, descID: 12 },
      { condition: { order_status: 3, pay_status: 5 }, descID: 10 },
      {
        condition: {
          order_status: 2,
          pay_status: 8
        },
        descID: 14
      }
    ],
    // 虚拟物品，有拼团
    virtual_1: [
      { condition: { order_status: 1, pay_status: 1 }, descID: 1 },
      {
        condition: { order_status: 1, pay_status: 2, group_status: 2 },
        descID: 2
      },
      {
        condition: { order_status: 2, pay_status: 2, group_status: 1 },
        descID: 6
      },
      {
        condition: [
          { order_status: 1, pay_status: 3 },
          { order_status: 2, pay_status: 3 }
        ],
        descID: 7
      },
      {
        condition: [
          { order_status: 1, pay_status: 4 },
          { order_status: 2, pay_status: 4 }
        ],
        descID: 8
      },
      {
        condition: [
          { order_status: 1, pay_status: 6 },
          { order_status: 2, pay_status: 6 }
        ],
        descID: 9
      },
      {
        condition: [
          { order_status: 3, pay_status: 5, group_status: 1 },
          { order_status: 3, pay_status: 5, group_status: null }
        ],
        descID: 10
      },
      {
        condition: [
          { order_status: 3, pay_status: 2, group_status: 3 },
          { order_status: 3, pay_status: 5, group_status: 3 }
        ],
        descID: 11
      },
      { condition: { order_status: 3, pay_status: 1 }, descID: 12 },
      {
        condition: {
          order_status: 2,
          pay_status: 8
        },
        descID: 14
      }
    ],
    // 实体物品，有拼团
    entity_1: [
      { condition: { order_status: 1, pay_status: 1 }, descID: 1 },
      {
        condition: { order_status: 1, pay_status: 2, group_status: 2 },
        descID: 2
      },
      {
        condition: {
          order_status: 1,
          pay_status: 2,
          ship_status: 1,
          group_status: 1
        },
        descID: 13
      },
      {
        condition: {
          order_status: 1,
          pay_status: 2,
          ship_status: 3,
          group_status: 1
        },
        descID: 4
      },
      {
        condition: {
          order_status: 2,
          pay_status: 2,
          ship_status: 4,
          group_status: 1
        },
        descID: 6
      },
      {
        condition: [
          { order_status: 1, pay_status: 3 },
          { order_status: 2, pay_status: 3 }
        ],
        descID: 7
      },
      {
        condition: [
          { order_status: 1, pay_status: 4 },
          { order_status: 2, pay_status: 4 }
        ],
        descID: 8
      },
      {
        condition: [
          { order_status: 1, pay_status: 6 },
          { order_status: 2, pay_status: 6 }
        ],
        descID: 9
      },
      {
        condition: [
          { order_status: 3, pay_status: 5, group_status: 1 },
          { order_status: 3, pay_status: 5, group_status: null }
        ],
        descID: 10
      },
      {
        condition: [
          { order_status: 3, pay_status: 2, group_status: 3 },
          { order_status: 3, pay_status: 5, group_status: 3 }
        ],
        descID: 11
      },
      { condition: { order_status: 3, pay_status: 1 }, descID: 12 },
      {
        condition: {
          order_status: 2,
          pay_status: 8
        },
        descID: 14
      }
    ]
  },
  desc: {
    1: {
      list: "待支付",
      detail_title: "待支付",
      detail_more: "待支付"
    },
    2: {
      copy: true, // 是否拷贝一份该对象，并导出；解决format后，内容重复的问题
      list: "拼团中",
      detail_title: "拼团中",
      detail_more: "拼团中"
    },
    3: {
      list: "待发货",
      detail_title: "等待商家发货",
      detail_more: "买家已付款，等待商家发货"
    },
    4: {
      list: "已发货",
      detail_title: "支付成功，商家已发货"
    },
    5: {
      list: "交易完成",
      detail_title: "交易完成",
      detail_more: "订单交易完成"
    },
    6: {
      list: "已成团，交易完成",
      detail_title: "已成团，交易完成",
      detail_more: "订单交易完成"
    },
    7: {
      list: "退款申请中",
      detail_title: "退款申请中",
      detail_refund: "退款申请中"
    },
    8: {
      list: "退款中",
      detail_title: "退款中",
      detail_refund: "退款中"
    },
    9: {
      list: "退款失败",
      detail_title: "退款失败",
      detail_refund: "退款失败"
    },
    10: {
      list: "退款成功，交易关闭",
      detail_title: "交易关闭",
      detail_more: "退款成功",
      detail_refund: "退款成功"
    },
    11: {
      list: "未成团，交易关闭",
      detail_title: "交易关闭",
      detail_more: "超时未成团，系统会自动将所支付的款项原路返还"
    },
    12: {
      list: "超时未支付，交易关闭",
      detail_title: "交易关闭",
      detail_more: "超时未支付"
    },
    13: {
      list: "已成团，待发货",
      detail_title: "拼团成功，等待商家发货",
      detail_more: "买家已付款，等待商家发货"
    },
    14: {
      list: "部分退款",
      detail_title: "部分退款",
      detail_more: "部分退款"
    }
  }
};

// 检测条件
function checkCondition(data, condition) {
  let flag = true;
  for (const key in condition) {
    if (data[key] != condition[key]) {
      flag = false;
      break;
    }
  }
  return flag;
}

// 获取描述
function getDesc(data, dict) {
  for (const i of dict) {
    let flag = false;
    if (i.condition.length) {
      for (const item of i.condition) {
        if (checkCondition(data, item)) {
          flag = true;
          break;
        }
      }
    } else {
      flag = checkCondition(data, i.condition);
    }
    if (flag) {
      const textObj = order.desc[i.descID].copy
        ? Object.assign({}, order.desc[i.descID])
        : order.desc[i.descID];
      return { id: i.descID, text: textObj };
    }
  }
  return { id: 0, text: {} };
}

// 获取描述数据
function getDescData(data) {
  let obj = {};
  if (!data.spell_id) {
    if (data.is_virtual == 1) obj = getDesc(data, order.status.virtual_0);
    else obj = getDesc(data, order.status.entity_0);
  } else {
    if (data.is_virtual == 1) obj = getDesc(data, order.status.virtual_1);
    else obj = getDesc(data, order.status.entity_1);
  }
  return obj;
}

export default {
  getListDescData(data) {
    const obj = getDescData(data);
    switch (obj.id) {
      case 2:
        obj.text.list = `拼团中，还差${data.user_num - data.join_num}人`;
        break;
    }
    return obj;
  },
  getDetailDescData(data) {
    const obj = getDescData(data);
    switch (obj.id) {
      case 2:
        obj.text.detail_more = `还差${data.user_num -
          data.join_num}人，邀请好友拼团`;
        break;
    }
    return obj;
  }
};
