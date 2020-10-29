<!-- 首页 -->
<template>
  <div class="heating_area_modification">
    <div class="ad_img"><img src="~@/assets/images/banner_grmjxg@2x.png"></div>
    <div class="user_info">
    	<div class="list">
    		<p class="zd_name">原户户名</p>
    		<p class="zd_desc">林**</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">具体地址</p>
    		<p class="zd_desc">苹果花园2-2-122</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">原有面积</p>
    		<p class="zd_desc">126m</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">修改后面积</p>
    		<input type="text" placeholder="请输入修改后面积" class="zd_desc" v-model="testVal_01" />
    	</div>
    	<div class="list">
    		<p class="zd_name">联系方式</p>
    		<input type="text" placeholder="请输入联系方式" class="zd_desc" />
    	</div>
    	<div class="list">
    		<p class="zd_name">申请原因</p>
    		<input type="text" placeholder="请输入申请原因" class="zd_desc" />
    	</div>
    	<div class="list" style="border-bottom:0;">
    		<p class="zd_name">请依次上传您的身份证(正/反)、房产证照片</p>
    	</div>
    	<div class="photo">
          <input
          	 class="img_but"
            type="file"
            accept="image/*"
            @change="onChangeAvatar"
          />
    	</div>
    	<div class="button_submit" @click="submit_ok">提交申请</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "heating_area_modification",
  data() {
    return {
      testVal_01:'',
      testVal_02:'',
    };
  },
  methods: {
		submit_ok(){
  		let formdata={};
  		formdata.testVal_01=this.testVal_01;
  		if(this.testVal_01=='')
  		{
  			this.$toast('请输入修改后面积');
  			return false;
  		}
  		this.$http.post('/api/app/aaa', formdata).then(data => {
        console.log(data.path);
      })
  	},
    onChangeAvatar(e) {
      const formdata = new FormData()
      formdata.append('file', e.target.files[0])
      this.$http.post('/api/app/public/img', formdata).then(data => {
        console.log(data.path);
      })
    },
  },
  created() {
    
  }
};
</script>
<style lang="scss" scoped>
.heating_area_modification{
 	height:100%;
	background:#ededed;
	position:fixed;
	z-index:1;
 .ad_img{width:100%; float:left;
 	img{width:100%; height:auto; float:left;}
 }
 .user_info{border-top:15px solid #ededed; width:100%; float:left; background:#fff;
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
 		.zd_desc{flex:1; height:88px; line-height:88px; text-align: right; padding-right:30px; font-size: 30px;font-family: Source Han Sans CN;font-weight: 400; outline:none; border:0px;}
 		.zd_descd{flex:1; height:88px; line-height:88px; text-align: right; padding-right:80px; font-size: 30px;font-family: Source Han Sans CN;font-weight: 400; outline:none; border:0px; position: relative;}
 		.zd_descd:before{content:''; width:24px; height:14px; position:absolute; top:35px; right:30px; background:url(../../assets/images/down124_14.png) no-repeat; background-size:24px 14px;}
 	}
 	.button_submit{
 		width:100%;
 		position:fixed;
 		z-index:2;
 		left:0px;
 		bottom:50px;
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