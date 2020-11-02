<!-- 首页 -->
<template>
  <div class="service_master">
    <ul class="ul_mian">
    	<li class="title">在供暖期间，您的小区现场维修师傅是</li>
    	<li class="usin_img"><img src="~@/assets/images/touxiang@2x.png"></li>
    	<li class="name">孙师傅</li>
    	<li class="desc">统一编号：090001</li>
    	<li class="desc">服务星级:
    	<van-rate
  v-model="value"
  :size="15"
  color="#ffbe01"
  void-icon="star"
  void-color="#fff0b6"
  :readonly="true"
/>
    	</li>
    	<li class="desc">所属公司：滕州市热力有限公司</li>
    	<li class="desc_center">在供暖期间，我将向您提供24小时维修服务！</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "service_master",
  data() {
    return {
    	value:3,
    };
  },
  methods: {
  	
  },
  created() {
    
  }
};
</script>
<style lang="scss" scoped>
.service_master{
	width:100%; position:fixed;
	background:#ededed; height:100%;
 .ul_mian{width:100%; float: left; background:#fff; padding-bottom:60px;
 	li{width:100%; padding:0px 30px; box-sizing:border-box; text-align: center; float: left; font-size:30px; font-family: Source Han Sans CN;font-weight: 400; line-height:40px; margin-top:20px;}
 	.title{margin-top:30px; line-height:40px;}
 	.usin_img{margin-top:20px;
 		img{width:290px; height:290px;}
 	}
 	.name{margin-top:15px;}
 	.desc{font-size:24px; text-align:left; padding-left:20%;}
 	.desc_center{font-size:24px;}
 }
}
</style>
