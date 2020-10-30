<!-- 首页 -->
<template>
  <div class="application_for_suspension">
    <div class="ad_img"><img src="~@/assets/images/banner_bt@2x.png"></div>
    <div class="user_info">
    	<div class="list">
    		<p class="zd_name">用户名称</p>
    		<p class="zd_desc">林**</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">具体地址</p>
    		<p class="zd_desc">苹果花园2-2-122</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">联系方式</p>
    		<p class="zd_desc">13800001234</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">申请原因</p>
    		<input type="text" class="zd_desc" v-model="message" placeholder="请输入申请原因" />
    	</div>
    	<div class="list" style="border-bottom:0;">
    		<p class="zd_name">请上传您的身份证（正反面）照片</p>
    	</div>
    	<div class="photo">
          <van-uploader v-model="fileList" :max-count="2" :upload-icon="img_jia" :after-read="onChangeAvatar">
				  <template #preview-cover="{file}">
				    <div class="preview-cover van-ellipsis">{{file.name}}</div>
				  </template>
				  </van-uploader>
    	</div>
    	<div class="button_submit" @click="submit_ok">提交申请</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "application_for_suspension",
  data() {
    return {
    	img_jia:require('../../assets/images/jia.jpg'),
    fileList:[],
     message:''
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
      console.log(e.content);
    	return false;
      this.$http.post('/api/app/public/img',e.content).then(data => {
        console.log(data.path);
      })
    },
  },
  created() {
    
  }
};
</script>
<style lang="scss" scoped>
.application_for_suspension{
	height:100%;
	background:#ededed;
	position:fixed;
	z-index:1;
 .ad_img{width:100%; float:left;
 	img{width:100%; height:auto; float:left;}
 }
}
</style>
