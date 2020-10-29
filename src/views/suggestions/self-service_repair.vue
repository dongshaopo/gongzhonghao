<!-- 首页 -->
<template>
  <div class="self-service_repair">
    <div class="ad_img"><img src="~@/assets/images/banner_zzbx@2x.png"></div>
    <div class="user_info">
    	<div class="list">
    		<p class="zd_name">用户名称</p>
    		<p class="zd_desc">林**</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">联系方式</p>
    		<input class="zd_desc" placeholder="请输入联系方式"></input>
    	</div>
    	<div class="list">
    		<p class="zd_name">家庭地址</p>
    		<p class="zd_desc">苹果花园10-2-1201</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">维修师傅</p>
    		<p class="zd_desc">张师傅</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">所属公司</p>
    		<p class="zd_desc">新公司</p>
    	</div>
    	<div class="list" style="border-bottom:0;">
    		<p class="zd_name">诉求内容</p>
    	</div>
    	<div class="list_text">
    		<textarea
			  v-model="message"
			  type="textarea"
			  placeholder="请输入您要诉求的内容（不少于15字）"
			/></textarea>
    	</div>
    	<div class="list" style="border-bottom:0;">
    		<p class="zd_name">上传图片</p>
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
  name: "self-service_repair",
  data() {
    return {
     message:'',
    };
  },
  methods: {
  	submit_ok(){
  		let formdata={};
  		formdata.message=this.message;
  		if(this.message=='')
  		{
  			this.$toast('请输入内容');
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
.self-service_repair{
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
		textarea{margin:0px; border:0px; outline:none; background:none; color:#333; font-size:28px; width:100%; height:150px; padding:15px; box-sizing: border-box; resize:none; border-radius:10px;}
 }
 	.list{
 		width:100%; float:left; border-bottom:1px solid #f8f8f8; display:flex;
 		.zd_name{height:88px; line-height:88px; float: left; padding-left:30px; font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;}
 		.zd_desc{flex:1; height:88px; line-height:88px; text-align: right; padding-right:30px; font-size: 30px;font-family: Source Han Sans CN;font-weight: 400; border:0px; outline:none;}
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
