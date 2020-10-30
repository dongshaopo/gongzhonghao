<!-- 首页 -->
<template>
  <div class="community_report">
    <div class="ad_img"><img src="~@/assets/images/banner_xqbz@2x.png"></div>
    <div class="user_info">
    	<div class="list">
    		<p class="zd_name">用户名称</p>
    		<p class="zd_desc">林**</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">身份证号</p>
    		<p class="zd_desc">370123199210250001</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">联系方式</p>
    		<p class="zd_desc">13800001234</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">类型</p>
    		<p class="zd_descd" @click="selectVal('labelType')">{{testVal_01}}</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">所属小区</p>
    		<p class="zd_descd" @click="selectVal('xiaoqu')">{{testVal_02}}</p>
    	</div>
    	<div class="list">
    		<p class="zd_name">具体地址</p>
    		<p class="zd_desc">苹果花园2-2-122</p>
    	</div>
    	<div class="list" style="border-bottom:0;">
    		<p class="zd_name">请依次上传您的身份证(正/反)、房产证照片</p>
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
    <van-popup v-model="showPopup" position="bottom">
   			<van-picker
   				v-if="labelType=='labelType'"
          :columns="columns_1"
          :default-index="attrsSelect"
          show-toolbar
          @cancel="showPopup = false"
          @confirm="onConfirmAttrs"
        />
        <van-picker
   				v-if="labelType=='xiaoqu'"
          :columns="columns_2"
          :default-index="attrsSelect"
          show-toolbar
          @cancel="showPopup = false"
          @confirm="onConfirmAttrs"
        />
   	</van-popup>
  </div>
</template>
<script>
export default {
  name: "community_report",
  data() {
    return {
    img_jia:require('../../assets/images/jia.jpg'),
    fileList:[],
    attrsSelect:-1,
     showPopup:false,
     columns_1: [
        {text: '居民（个人住房）',id:1},
        {text: '非居民（商业住房）',id:2},
      ],
      columns_2: [
        {text: '小区信息1',id:1},
        {text: '小区信息2',id:2},
        {text: '小区信息3',id:3},
      ],
      labelType:'',
      testVal_01:'',
      testVal_02:'',
    };
  },
  methods: {
  	onConfirmAttrs(value,index){//确认
  		this.showPopup=false;
  		if(this.labelType=='xiaoqu')
  		{
  			this.testVal_02=value.text;
  		}
  		else
  		{
  			this.testVal_01=value.text;
  		}
      console.log(value);
      console.log(index);
  	},
  	selectVal(type){
  		this.labelType=type;
  		this.showPopup=true;
  	},
		submit_ok(){
  		let formdata={};
  		formdata.testVal_01=this.testVal_01;
  		if(this.testVal_01=='')
  		{
  			this.$toast('请选择类型');
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
.community_report{
 	height:100%;
	background:#ededed;
	position:fixed;
	z-index:1;
 .ad_img{width:100%; float:left;
 	img{width:100%; height:auto; float:left;}
 }
}
</style>