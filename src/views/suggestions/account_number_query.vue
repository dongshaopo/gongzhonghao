<!-- 首页 -->
<template>
  <div class="account_number_query">
    <div class="ad_img"><img src="~@/assets/images/banner_hhcx@2x.png"></div>
    <div class="user_info">
    	<div class="list">
    		<p class="zd_name">用户编码</p>
    		<p class="zd_desc">32432423</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">面积</p>
    		<p class="zd_desc">960M</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">用户名称</p>
    		<p class="zd_desc">林**</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">用户地址</p>
    		<p class="zd_desc">苹果花园2-2-122</p>
    	</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "account_number_query",
  data() {
    return {
     
    };
  },
  methods: {

  },
  created() {
    
  }
};
</script>
<style lang="scss" scoped>
.account_number_query{
 .ad_img{width:100%; float:left;
 	img{width:100%; height:auto; float:left;}
 }
 .user_info{border-top:15px solid #ededed; width:100%; float:left;
 .photo{width:100%; float: left;}
 .img_but{width:80px; height:80px; margin:0px 0px 30px 30px; background:url(../../assets/images/jia.jpg) no-repeat; background-size:80px 80px; overflow: hidden;
 line-height:500px; float: left;}
 .list_text{
 	width:calc(100% - 60px);
 		float:left;
 		margin-left:30px;
 		margin-right:30px;
		background:#F8F8F8;;
		textarea{margin: 0px; padding:0px; border:0px; outline:none; background:none; color:#333; font-size:28px; width:100%; height:150px; padding:10px; box-sizing: border-box; resize:none; border-radius:10px;}
 }
 	.list{
 		width:100%; float:left; border-bottom:1px solid #f8f8f8; display:flex;
 		.zd_name{height:88px; line-height:88px; float: left; padding-left:30px; font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;}
 		.zd_desc{flex:1; height:88px; line-height:88px; text-align: right; padding-right:30px; font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;}
 	}
 	.button_submit{
 		width:100%;
 		float: left;
 		line-height:82px;
 		text-align: center;
		height: 82px;
		background: linear-gradient(0deg, #FF6D00, #FF6D00, #FF8901);
		font-size: 28px;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #fff;
 	}
 }
}
</style>
