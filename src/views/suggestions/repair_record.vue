<!-- 首页 -->
<template>
  <div class="repair_record">
	    <fixed-tab>
      <van-tabs
        slot="content"
        :line-width="15"
        :line-height="2"
        @change="onTabChange"
      >
        <van-tab
          v-for="(item, index) in tabs"
          :key="index"
          :title="item.name"
        ></van-tab>
      </van-tabs>
    </fixed-tab>
    <Empty
      :empty_type="{name:'暂无维修记录'}"
      v-if="dataList.length == 0"
      style="margin-top:150px;"
    />
    <div v-else class="content">
      <ul
        class="item"
        v-for="(item, index) in dataList"
        :key="index"
      >
      <li>
      	<span class="userName">{{item.user_name}}</span>
      	<span class="mobile">{{item.mobile}}</span>
      	<span class="statusA" v-if="item.status==1">已完成</span>
      	<span class="statusB" v-else>未处理</span>
      </li>
      <li class="bjeee">
      	<span class="message">{{item.message}}</span>
      	<span class="address">{{item.address}}</span>
      	<span></span>
      </li>
      <li class="date_details">
      	<span class="updated_at">{{item.updated_at|formatTime("yyyy-MM-dd hh:mm:ss")}}</span>
      	<span class="details">查看</span>
      	<span></span>
      </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "repair_record",
  data() {
    return {
     tabs: [
        { name: "全部", status: 0 },
        { name: "未处理", status: 1 },
        { name: "已完成", status: 2 }
      ],
      params: {
        status: 0
      },
      dataList:[]
    };
  },
  methods: {
		onTabChange(index) {
      this.params.status = this.tabs[index].status;
      this.requestList();
    },
    requestList() {
	    var data=[
	        {
	            "id":1,
	            "status":2,
	            "address":"花园路小区",
	            "message":"电表坏了",
	            "mobile":"13222222222",
	            "user_name":"张师傅",
	            "updated_at":"1603963449",
	        },
	        {
	            "id":2,
	            "status":1,
	            "address":"花园路小区",
	            "message":"电表坏了",
	            "mobile":"13222222222",
	            "user_name":"张师傅",
	            "updated_at":"1603963449",
	        },
	        {
	            "id":3,
	            "status":2,
	            "address":"花园路小区",
	            "message":"电表坏了",
	            "mobile":"13222222222",
	            "user_name":"张师傅",
	            "updated_at":"1603963449",
	        },
	        {
	            "id":4,
	            "status":2,
	            "address":"花园路小区",
	            "message":"电表坏了",
	            "mobile":"13222222222",
	            "user_name":"张师傅",
	            "updated_at":"1603963449",
	        },
	        {
	            "id":5,
	            "status":1,
	            "address":"花园路小区",
	            "message":"电表坏了",
	            "mobile":"13222222222",
	            "user_name":"张师傅",
	            "updated_at":"1603963449",
	        },
	        {
	            "id":6,
	            "status":2,
	            "address":"花园路小区",
	            "message":"电表坏了",
	            "mobile":"13222222222",
	            "user_name":"张师傅",
	            "updated_at":"1603963449",
	        },
	        {
	            "id":7,
	            "status":1,
	            "address":"花园路小区",
	            "message":"电表坏了",
	            "mobile":"13222222222",
	            "user_name":"张师傅",
	            "updated_at":"1603963449",
	        }
	    ];
      this.dataList = data;
      /*
     	this.$http.get("/api/app/coupon",this.params).then(data => {
        this.dataList = data;
      });
     	*/
    }
  },
  created() {
    this.requestList();
  }
};
</script>
<style lang="scss" scoped>
.repair_record{
 .content{width:100%; float: left;
 .item{width:100%; float:left; border-top:15px solid #ededed; padding:30px; box-sizing:border-box;
 li{width:100%; float:left; background:#fff; font-family: Source Han Sans CN;
 .userName{
	font-size: 32px;
	font-weight: 500;
	line-height: 42px;
	float:left;
	}
	.mobile{
	font-size:28px;
	font-weight:400;
	line-height:42px;
	float:left;
	color:#999;
	padding-left:20px;
	}
	.statusA{
	font-size: 30px;
	font-weight: 400;
	line-height: 42px;
	float:right;
	color:#23A956;
	}
	.statusB{
	font-size: 30px;
	font-weight: 400;
	line-height: 42px;
	float:right;
	color:#F70A0A;
	}
 }
 .date_details{display:flex; margin-top:20px;}
 .updated_at{flex:1; font-size:26px; line-height:58px;}
 .details{float:right; font-size:26px; line-height:58px; height:58px;border: 1px solid #999;border-radius:29px; padding:0px 40px;}
 .bjeee{background:#f8f8f8; display:flex; padding:20px 0px; margin-top:20px;}
 .message{font-size:30px; line-height:42px; font-weight:400; flex:1; padding:0px 10px;}
 .address{font-size:30px; line-height:42px; font-weight:400; flex:1; padding:0px 10px; text-align:right;}
 }
 }
}
</style>
