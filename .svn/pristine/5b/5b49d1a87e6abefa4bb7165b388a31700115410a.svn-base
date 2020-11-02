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
          <van-uploader class="update_a" v-model="fileLista" :max-count="1" :upload-icon="img_jia" :after-read="onChangeAvatar">
				  <template #preview-cover="{file}">
				    <div class="preview-cover van-ellipsis">{{file.name}}</div>
				  </template>
				  </van-uploader>
				  <van-uploader class="update_b" v-model="fileListb" :max-count="1" :upload-icon="img_jia" :after-read="onChangeAvatar">
				  <template #preview-cover="{file}">
				    <div class="preview-cover van-ellipsis">{{file.name}}</div>
				  </template>
				  </van-uploader>
				  <van-uploader class="update_c" v-model="fileListc" :max-count="1" :upload-icon="img_jia" :after-read="onChangeAvatar">
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
  name: "heating_area_modification",
  data() {
    return {
    	img_jia:require('../../assets/images/jia.jpg'),
    fileLista:[],
    fileListb:[],
    fileListc:[],
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
.heating_area_modification{
 	height:100%;
	background:#ededed;
	position:fixed;
	z-index:1;
 .ad_img{width:100%; float:left;
 	img{width:100%; height:auto; float:left;}
 }
}
</style>