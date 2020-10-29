<!-- 首页 -->
<template>
  <div class="index-page">
    <div class="index_top_bj">
    	<img class="bimg" src="~@/assets/images/banner3@2x.png">
	    <div class="index_server_box">
	    	<li @click="index_server(1)">
	    		<span class="img"><img src="~@/assets/images/hhcx@2x.png"></span>
	    		<span class="text">户号查询</span>
	    	</li>
	    	<li @click="index_server(2)">
	    		<span class="img"><img src="~@/assets/images/cnfcx@2x.png"></span>
	    		<span class="text">采暖费查询</span>
	    	</li>
	    	<li @click="index_server(3)">
	    		<span class="img"><img src="~@/assets/images/fwsf@2x.png"></span>
	    		<span class="text">服务师傅</span>
	    	</li>
	    	<li @click="index_server(4)">
	    		<span class="img"><img src="~@/assets/images/dzfp@2x.png"></span>
	    		<span class="text">电子发票</span>
	    	</li>
	    </div>
    </div>
    <!-- 轮播 -->
    <div class="index_banner">
        <van-swipe :autoplay="false">
          <van-swipe-item :key="0">
            <ul class="index_kinds">
		        <li :key="0" @click="bannerClick(0)">
		          <img class="bimg" src="~@/assets/images/zzbx@2x.png">
		          <font>自助报修</font>
		        </li>
		        <li :key="1" @click="bannerClick(1)">
		          <img class="bimg" src="~@/assets/images/wxjl@2x.png">
		          <font>维修记录</font>
		        </li>
		        <li :key="2" @click="bannerClick(2)">
		          <img class="bimg" src="~@/assets/images/zxbtsq@2x.png">
		          <font>在线报停<br>申请</font>
		        </li>
		        <li :key="3" @click="bannerClick(3)">
		          <img class="bimg" src="~@/assets/images/hfyrsq@2x.png">
		          <font>恢复用热<br>申请</font>
		        </li>
		        <li :key="4" @click="bannerClick(4)">
		          <img class="bimg" src="~@/assets/images/xqbzsq@2x.png">
		          <font>既有小区<br>报装申请</font>
		        </li>
		        <li :key="5" @click="bannerClick(5)">
		          <img class="bimg" src="~@/assets/images/ghgmsq@2x.png">
		          <font>过户更名 <br>申请</font>
		        </li>
		        <li :key="5" @click="bannerClick(6)">
		          <img class="bimg" src="~@/assets/images/grmjxgsq@2x.png">
		          <font>供热面积<br>修改申请</font>
		        </li>
		        <li :key="7" @click="bannerClick(7)">
		          <img class="bimg" src="~@/assets/images/htqd@2x.png">
		          <font>合同签订</font>
		        </li>
		      </ul>
          </van-swipe-item>
          <van-swipe-item :key="1">
           <ul class="index_kinds">
		        <li :key="8" @click="bannerClick(8)">
		          <img class="bimg" src="~@/assets/images/htqd@2x.png">
		          <font>投诉</font>
		        </li>
		      </ul>
          </van-swipe-item>
        </van-swipe>
    </div>
    <div class="serverInfo">
    	<ul class="ul_more">
    		<span class="title">服务信息</span>
    		<span class="more">更多</span>
    	</ul>
    	<ul class="serverInfo_box">
	        <li :key="1" @click="serverInfo(1)">
	          <img class="bimg" src="~@/assets/images/fwwd@2x.png">
	          <font>服务网点</font>
	        </li>
	        <li :key="2" @click="serverInfo(2)">
	          <img class="bimg" src="~@/assets/images/fybz@2x.png">
	          <font>费用标准</font>
	        </li>
	        <li :key="3" @click="serverInfo(3)">
	          <img class="bimg" src="~@/assets/images/flzc@2x.png">
	          <font>法律政策</font>
	        </li>
	        <li :key="4" @click="serverInfo(4)">
	          <img class="bimg" src="~@/assets/images/jfzn@2x.png">
	          <font>交费指南</font>
	        </li>
	      </ul>
    </div>
    <div class="serverInfo">
    	<ul class="ul_more">
    		<span class="title">常见问题</span>
    		<span class="more">更多</span>
    	</ul>
   	</div>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
    };
  },
  methods: {
  	index_server(){
  		
  	},
    bannerClick(index){
    	
    },
    serverInfo(index){
    	
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
	.van-swipe__indicator{background:#ccc; width:20px;}
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
	.serverInfo_box{width:100%; float:left; padding-bottom:40px;}
	li{
		width:50%;
		float:left;
		margin-top:30px;
		img{width:84px; height:84px; float: left; margin-left:80px; margin-right:20px;}
		font{
		float:left;
		margin-top:22px;
		height: 42px;
		font-size: 30px;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #333333;
		line-height: 42px;
		}
	}
	li:nth-child(2n){
		img{margin-left:0px;}
	}
}
</style>
