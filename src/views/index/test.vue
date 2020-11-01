<!-- 首页 -->
<template>
  <div class="test">
    <headers class="headers" :title="{ name: '提交成功' }":goBackHandler="goBack"></headers>
    ffffffffffffff
    <div @click="$router.push({name:'test',})">fdsfd</div>
  </div>
</template>
<script>
import headers from "@/components/Header.vue";
export default {
  name: "text",
  components: {
    headers,
  },
  data() {
    return {
     
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    
  }
};
</script>
<style lang="scss" scoped>
.text{
 font-size:20px;
}
</style>
