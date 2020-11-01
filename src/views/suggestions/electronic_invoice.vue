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
}
</style>
