<!-- 首页 -->
<template>
  <div class="serviceInformation">
    <ul class="user_list">
    		<li v-for="(item,index) in listData">
    			<img src="~@/assets/images/photo.png" class="icon">
    			<span class="name">{{item.name}}</span>
    		</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "serviceInformation",
  data() {
    return {
     listData:[
    		{
    			id:1,
    			name:'低保或特困家庭采暖交费规定'
    		},
    		{
    			id:2,
    			name:'供热时间'
    		},
    		{
    			id:3,
    			name:'管网、冲水、打压时间'
    		},
    		{
    			id:4,
    			name:'申请报停的条件及时间'
    		}
    	],
    };
  },
  methods: {
    
  },
  created() {
    
  }
};
</script>
<style lang="scss" scoped>
.serviceInformation{
 .user_list{width:100%; float:left;
	li{width:100%; float:left; position:relative; padding:20px 30px; box-sizing: border-box; display:flex; border-bottom:1px solid #eee;}
	li:before{content:''; position:absolute; top:56px; right:30px; width:15px; height:26px; background:url(../../assets/images/jt_xq@2x.png) no-repeat; background-size:15px 26px;}
	.icon{width:100px; height:100px; float:left; margin-top:1px;}
	.name{
		@include lines-eps(1);
		flex: 1;
		padding-left:20px;
		float:left;
		height:100px;
		font-size: 24px;
		font-family: Source Han Sans CN;
		font-weight: 400;
		line-height: 100px;
		padding-right:35px;
	}
	}
}
</style>
