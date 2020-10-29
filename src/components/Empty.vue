<template>
  <div class="empty">
    <template v-if="empty_type.new">
      <img class="new" :src="empty_type.img" />
      <p class="new">{{empty_type.name}}</p>
    </template>
    <template v-else>
      <img :src="empty_type.img || require('@/assets/images/empty.png')" :style="empty_type.style" />
      <p>{{ empty_type.name }}</p>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    empty_type: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.empty {
  @extend %flex-center;
  flex-direction: column;
  position: relative;
  img {
    width: 300px;
    height: 300px;
  }
  p {
    font-size: 30px;
    color: #8c8c8c;
    margin-top: 40px;
  }

  img.new {
    width: 713px;
    height: auto;
  }
  p.new {
    position: absolute;
    color: #666;
    font-size: 30px;
    top: 340px;
  }
}
</style>
