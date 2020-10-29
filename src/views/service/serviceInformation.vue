<!-- 首页 -->
<template>
  <div class="serviceInformation">
  	<headers class="headers" :title="{name:'服务信息'}"></headers>
    <ServerInfo :min_title="0"></ServerInfo>
  </div>
</template>
<script>
import headers from "@/components/Header.vue";
import ServerInfo from "@/components/serverInfo";
export default {
  name: "serviceInformation",
  components: {
  	headers,
    ServerInfo
  },
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
.serviceInformation{
 
}
</style>
