<!-- 首页 -->
<template>
  <div class="bind">
    <div class="ad_img"><img src="~@/assets/images/banner2@2x.png"></div>
    <div class="user_addres">
    	<van-tabs v-model="active">
		  <van-tab title="用户卡">
		  	<div class="user_info" style="padding-bottom:0;">
		  		<div class="list">
		    		<p class="zd_name">小区</p>
		    		<p class="zd_descd" @click="selectVal('xiaoqu')">{{xiaoqu}}</p>
		    	</div>
		    	<div class="list">
		    		<p class="zd_name">用户卡号</p>
		    		<input class="zd_desc" placeholder="请输入用户卡号"></input>
		    	</div>
		  	</div>
		  </van-tab>
		  <van-tab title="地址卡">
		  	<div class="user_info" style="padding-bottom:0;">
		  		<div class="list">
		    		<p class="zd_name">小区</p>
		    		<p class="zd_descd" @click="selectVal('xiaoqu')">{{xiaoqu}}</p>
		    	</div>
		    	<div class="list">
		    		<p class="zd_name">楼号</p>
		    		<p class="zd_descd" @click="selectVal('louhao')">{{louhao}}</p>
		    	</div>
		    	<div class="list">
		    		<p class="zd_name">单元</p>
		    		<p class="zd_descd" @click="selectVal('danyuan')">{{danyuan}}</p>
		    	</div>
		    	<div class="list">
		    		<p class="zd_name">楼层</p>
		    		<p class="zd_descd" @click="selectVal('louceng')">{{louceng}}</p>
		    	</div>
		    	<div class="list">
		    		<p class="zd_name">室号</p>
		    		<p class="zd_descd" @click="selectVal('shihao')">{{shihao}}</p>
		    	</div>
		    	<div class="list">
		    		<p class="zd_name">用户卡号</p>
		    		<input class="zd_desc" placeholder="请输入用户卡号"></input>
		    	</div>
		  	</div>
		  </van-tab>
		</van-tabs>
    </div>
    <van-popup v-model="showPopup" position="bottom">
   			<van-picker
   				v-if="labelType=='xiaoqu'"
          :columns="columns_1"
          :default-index="attrsSelect"
          show-toolbar
          @cancel="showPopup = false"
          @confirm="onConfirmAttrs"
        />
        <van-picker
   				v-if="labelType=='louhao'"
          :columns="columns_2"
          :default-index="attrsSelect"
          show-toolbar
          @cancel="showPopup = false"
          @confirm="onConfirmAttrs"
        />
        <van-picker
   				v-if="labelType=='danyuan'"
          :columns="columns_3"
          :default-index="attrsSelect"
          show-toolbar
          @cancel="showPopup = false"
          @confirm="onConfirmAttrs"
        />
        <van-picker
   				v-if="labelType=='louceng'"
          :columns="columns_4"
          :default-index="attrsSelect"
          show-toolbar
          @cancel="showPopup = false"
          @confirm="onConfirmAttrs"
        />
        <van-picker
   				v-if="labelType=='shihao'"
          :columns="columns_5"
          :default-index="attrsSelect"
          show-toolbar
          @cancel="showPopup = false"
          @confirm="onConfirmAttrs"
        />
   	</van-popup>
   	<div class="button_submit" @click="submit_ok">查询</div>
  </div>
</template>
<script>
import headers from "@/components/Header.vue";
export default {
  name: "bind",
  components: {
    headers,
  },
  data() {
    return {
     active:parseInt(this.$route.query.type),
     img_jia:require('../../assets/images/jia.jpg'),
      fileLista:[],
      fileListb:[],
      fileListc:[],
    attrsSelect:-1,
     showPopup:false,
     columns_1: [
        {text: '小区信息1',id:1},
        {text: '小区信息2',id:2},
        {text: '小区信息3',id:3},
      ],
      columns_2: [
        {text: '1栋',id:1},
        {text: '2栋',id:2},
        {text: '3栋',id:3},
      ],
      columns_3: [
        {text: '1单元',id:1},
        {text: '2单元',id:2},
        {text: '3单元',id:3},
      ],
      columns_4: [
        {text: '1层',id:1},
        {text: '2层',id:2},
        {text: '3层',id:3},
      ],
      columns_5: [
        {text: '101',id:1},
        {text: '202',id:2},
        {text: '303',id:3},
      ],
      labelType:'',
      xiaoqu:'请选择小区',
      louhao:'请选择楼号',
      danyuan:'请选择单元号',
      louceng:'请选择楼层',
      shihao:'请选择室号',
    };
  },
  methods: {
  	onConfirmAttrs(value,index){//确认
  		this.showPopup=false;
  		if(this.labelType=='xiaoqu')
  		{
  			this.xiaoqu=value.text;
  		}
  		else if(this.labelType=='louhao')
  		{
  			this.louhao=value.text;
  		}
  		else if(this.labelType=='danyuan')
  		{
  			this.danyuan=value.text;
  		}
  		else if(this.labelType=='louceng')
  		{
  			this.louceng=value.text;
  		}
  		else
  		{
  			this.shihao=value.text;
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
  		formdata.abc=this.shihao;
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
.bind{
	position:fixed;
	left:0;
	top:0;
	z-index:1;
	height:100%;
	background:#ededed;
	.button_submit{position:initial; float:left; margin-top:50px;}
 .ad_img{width:100%; float:left;
 	img{width:100%; height:auto; float:left;}
 	}
 	.user_addres{width:100%; float:left; margin-top:50px;
 	/deep/ .van-tab--active{background:#ff6d00; color:#fff;}
 	}
}
</style>
