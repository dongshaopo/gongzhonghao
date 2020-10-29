<!-- 首页 -->
<template>
  <div class="electronic_invoice">
    <div class="ad_img"><img src="~@/assets/images/banner_sqdzfp@2x.png"></div>
    <div class="user_info">
    	<div class="list">
    		<p class="zd_name">单位名称</p>
    		<input class="zd_desc" v-model="abc" placeholder="请输入单位名称"></input>
    	</div>
    	<div class="list">
    		<p class="zd_name">税号</p>
    		<input class="zd_desc" placeholder="请输入税号"></input>
    	</div>
    	<div class="list">
    		<p class="zd_name">单位地址</p>
    		<input class="zd_desc" placeholder="请输入单位地址"></input>
    	</div>
    	<div class="list">
    		<p class="zd_name">电话号码</p>
    		<input class="zd_desc" placeholder="请输入电话号码"></input>
    	</div>
    	<div class="list">
    		<p class="zd_name">开户银行</p>
    		<input class="zd_desc" placeholder="请输入开户银行"></input>
    	</div>
    	<div class="list">
    		<p class="zd_name">银行账号</p>
    		<input class="zd_desc" placeholder="请输入银行账号"></input>
    	</div>
    	<div class="list">
    		<p class="zd_name">单位地址</p>
    		<input class="zd_desc" placeholder="请输入单位地址"></input>
    	</div>
    	<div class="list">
    		<p class="zd_name">缴费金额</p>
    		<p class="zd_desc">2568.8元</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">请点击链接<a href="#" class="links">下载电子发票</a></p>
    	</div>
    </div>
    <div class="button_submit" @click="submit_ok">提交申请</div>
  </div>
</template>
<script>
export default {
  name: "electronic_invoice",
  data() {
    return {
     abc:'',
    };
  },
  methods: {
		submit_ok(){
			let formdata={};
  		formdata.abc=this.abc;
  		if(this.abc=='')
  		{
  			this.$toast('请输入内容');
  			return false;
  		}
  		this.$http.post('/api/app/aaa', formdata).then(data => {
        console.log(data.path);
      })
		}
  },
  created() {
    
  }
};
</script>
<style lang="scss" scoped>
.electronic_invoice{
 .ad_img{width:100%; float:left;
 	img{width:100%; height:auto; float:left;}
 }
 .user_info{border-top:15px solid #ededed; width:100%; float:left; border-bottom:25px solid #ededed;
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
 		.zd_name{height:88px; line-height:88px; float: left; padding-left:30px; font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;
 		.links{color:#1D72E5;}
 		}
 		.zd_desc{flex:1; height:88px; line-height:88px; text-align: right; padding-right:30px; font-size: 30px;font-family: Source Han Sans CN;font-weight: 400; border:none; outline:none;}
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
		margin-top:100px;
 	}
}
</style>
