<!-- 首页 -->
<template>
  <div class="index-page">
    <div class="index_top_bj">
    	<img class="bimg" src="~@/assets/images/banner3@2x.png">
	    <div class="index_server_box">
	    	<li @click="index_server('account_number_query')">
	    		<span class="img"><img src="~@/assets/images/hhcx@2x.png"></span>
	    		<span class="text">户号查询</span>
	    	</li>
	    	<li @click="index_server('heating_fee_query')">
	    		<span class="img"><img src="~@/assets/images/cnfcx@2x.png"></span>
	    		<span class="text">采暖费查询</span>
	    	</li>
	    	<li @click="index_server('service_master')">
	    		<span class="img"><img src="~@/assets/images/fwsf@2x.png"></span>
	    		<span class="text">服务师傅</span>
	    	</li>
	    	<li @click="index_server('electronic_invoice')">
	    		<span class="img"><img src="~@/assets/images/dzfp@2x.png"></span>
	    		<span class="text">电子发票</span>
	    	</li>
	    </div>
    </div>
    <!-- 轮播 -->
    <div class="index_banner">
        <van-swipe :autoplay="0">
          <van-swipe-item key="0">
            <ul class="index_kinds">
		        <li @click="index_server('self-service_repair')">
		          <img class="bimg" src="~@/assets/images/zzbx@2x.png">
		          <font>自助报修</font>
		        </li>
		        <li @click="index_server('repair_record')">
		          <img class="bimg" src="~@/assets/images/wxjl@2x.png">
		          <font>维修记录</font>
		        </li>
		        <li @click="index_server('application_for_suspension')">
		          <img class="bimg" src="~@/assets/images/zxbtsq@2x.png">
		          <font>在线报停<br>申请</font>
		        </li>
		        <li @click="index_server('recovery_heat')">
		          <img class="bimg" src="~@/assets/images/hfyrsq@2x.png">
		          <font>恢复用热<br>申请</font>
		        </li>
		        <li @click="index_server('community_report')">
		          <img class="bimg" src="~@/assets/images/xqbzsq@2x.png">
		          <font>既有小区<br>报装申请</font>
		        </li>
		        <li @click="index_server('name_change')">
		          <img class="bimg" src="~@/assets/images/ghgmsq@2x.png">
		          <font>过户更名 <br>申请</font>
		        </li>
		        <li @click="index_server('heating_area_modification')">
		          <img class="bimg" src="~@/assets/images/grmjxgsq@2x.png">
		          <font>供热面积<br>修改申请</font>
		        </li>
		        <li @click="bannerClick('sign_a_contract')">
		          <img class="bimg" src="~@/assets/images/htqd@2x.png">
		          <font>合同签订</font>
		        </li>
		      </ul>
          </van-swipe-item>
          <van-swipe-item key="12">
           <ul class="index_kinds">
		        <li @click="bannerClick('suggestions')">
		          <img class="bimg" src="~@/assets/images/tsjy@3x.png">
		          <font>投诉建议</font>
		        </li>
		      </ul>
          </van-swipe-item>
        </van-swipe>
    </div>
    <ServerInfo :min_title="1"></ServerInfo>
    <div class="serverInfo">
    	<ul class="ul_more">
    		<span class="title">常见问题</span>
    		<span class="more">更多</span>
    	</ul>
    	<ul class="common_problem">
    		<li v-for="(item,index) in questionsList">
    			<img src="~@/assets/images/faq@2x.png" class="icon">
    			<span class="name">{{item.name}}</span>
    		</li>
    	</ul>
   	</div>
   	<div class="ededed_footer">
   		<span>客服热线：</span>
   		<span class="blue">0632-8112345</span>
   	</div>
   	<van-popup v-model="showPopup" position="bottom">
   			<van-picker
   				title="请选择绑定热地址"
          :columns="columns"
          :default-index="attrsSelect"
          show-toolbar
          @cancel="showPopup = false"
          @confirm="onConfirmAttrs"
        />
        
   	</van-popup>
  </div>
</template>
<script>
import ServerInfo from "@/components/serverInfo";
export default {
  name: "Index",
  components: {
    ServerInfo
  },
  data() {
    return {
    	columns: [
        {text: '某某城市1号',id:1},
        {text: '某某城市2号',id:2},
        {text: '某某城市3号',id:3},
        {text: '某某城市4号',id:4},
        {text: '某某城市5号',id:5},
        {text: '某某城市6号',id:6},
        {text: '某某城市7号',id:7},
        {text: '某某城市8号',id:8},
      ],
    	attrsColums:[],
    	attrsSelect:-1,
    	labelType:'',
    	showPopup:false,
    	autoFalse:0,
    	questionsList:[
    		{
    			id:1,
    			name:'低保或特困家庭采暖交费规定'
    		},
    		{
    			id:2,
    			name:'供热时间'
    		},
    		{
    			id:3,
    			name:'管网、冲水、打压时间'
    		},
    		{
    			id:4,
    			name:'申请报停的条件及时间'
    		}
    	],
    };
  },
  methods: {
  	onConfirmAttrs(value,index){//确认
  		this.showPopup = false;
      console.log(value);
      console.log(index);
      this.bannerClick(this.labelType);
  	},
  	index_server(type){
  		this.labelType=type;
  		this.showPopup=true;
  	},
    bannerClick(item){
    	this.$router.push({
	      name: item,
	    });
    },
  },
  created() {
    
  }
};
</script>
<style lang="scss" scoped>
.index-page {
 font-size:20px;
 padding-bottom:120px;
 width:100%; float: left;
 /deep/ .van-picker__title{font-size:30px; height:70px; line-height:70px;}
}
.index_top_bj{width:100%; float:left; position:relative; z-index:1;}
.index_top_bj .bimg{width:100%; height:auto; float:left;}
.index_server_box{width:90%;position:absolute; background:#fff; min-height:170px; border-radius:20px; box-shadow:0 15px 15px 0 hsla(0,0%,81.2%,.35); left:5%; bottom:-100px; display:flex; list-style:none; flex-direction:row;justify-content: center; align-items:center;}
.index_server_box li{
	flex:1; list-style:none; text-align:center;
}
.index_server_box span{display:block;}
.index_server_box .img{display:block;}
.index_server_box .text{height:42px;font-size:26px;font-family:Source Han Sans CN;font-weight:400;color:#333;line-height:42px;}
.index_server_box img{height:60px;}
.index_banner{width:100%; float: left; margin-top:100px; position:relative; padding-bottom:30px;}
.index_kinds{
	padding:20px 0;
  position: relative;
  background-color: #fff;
  width:100%;
  float:left;
}
.index_kinds ul{
	 width: 100%;
	 height: 100%;
	 display: flex;
	 flex-wrap: wrap;
}
.index_kinds li{
	float:left;
	@extend %flex-center;
	flex-direction: column;
	background: #fff;
	border-radius: 20px;
	width: 25%;
	margin-top:40px;
}
.index_kinds img{
  width: 54px;
  height: 54px;
  display: block;
}
.index_kinds font{
	height:68px;
	line-height:34px;
  margin-top: 18px;
  font-size: 26px;
  font-weight: 400;
  color: #333;
  text-align:center;
  padding-bottom:50px;
  justify-content: center;
  align-items: center;
  display:flex;
}
.index_banner{
/deep/ .van-swipe__indicators{
	bottom:0px;
	.van-swipe__indicator{background:#ccc; width:20px; height:5px; border-radius:5px;}
	.van-swipe__indicator--active{background:#FF2411;}
}
}
.serverInfo{
	width:100%; float:left; border-top:15px solid #ededed;
	.ul_more{width:100%; float:left; margin-top:30px;
	.title{
		height: 42px;
		font-size: 30px;
		font-family: Source Han Sans CN;
		font-weight: bold;
		color: #333333;
		line-height: 42px;
		float: left; padding-left:30px;
		}
	.more{
		height: 42px;
		font-size: 26px;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #999999;
		line-height: 42px; float: right; padding-right:30px;
		}
	}
	.common_problem{width:100%; float:left;
	li{width:100%; float:left; position:relative; padding:20px 30px; box-sizing: border-box; display:flex;}
	li:before{content:''; position:absolute; top:29px; right:30px; width:15px; height:26px; background:url(../../assets/images/jt_xq@2x.png) no-repeat; background-size:15px 26px;}
	.icon{width:40px; height:40px; float:left; margin-top:1px;}
	.name{
		@include lines-eps(1);
		flex: 1;
		padding-left:20px;
		float:left;
		height:42px;
		font-size: 28px;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #7D7D7D;
		line-height: 42px;
		padding-right:35px;
	}
	}
}
.ededed_footer{background:#ededed; width:100%; float:left; text-align: center;
	height:100px;
	font-size: 28px;
	font-family: Source Han Sans CN;
	font-weight: 400;
	line-height: 100px;
	.blue{color:#0471ED;}
}
</style>
