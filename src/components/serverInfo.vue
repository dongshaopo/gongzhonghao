<template>
  <div class="serverInfo" :class="min_title==1?'bt_10':''">
    	<ul class="ul_more" v-if="min_title==1">
    		<span class="title">服务信息</span>
    		<span class="more" @click="$router.push({name:'serviceInformation'})">更多</span>
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
</template>
<script>
export default {
  name: "serverInfo",
  props: {
    min_title: {
      type: Number
    }
  },
  data() {
    return {
    };
  },
  mounted() {
    
  },
  methods: {
    serverInfo(index){
    	
    },
  }
};
</script>
<style lang="scss" scoped>
.bt_10{
	border-top:15px solid #ededed;
}
.serverInfo{
	width:100%; float:left;
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
	.serverInfo_box{width:100%; float:left; padding-bottom:40px;
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
}
</style>