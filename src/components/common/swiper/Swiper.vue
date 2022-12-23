<template>
  <div class="block">
    <el-carousel  height="200px">
      <el-carousel-item v-for="item in banners" :key="item">
        <img :src="item.image" @click="imgClick(item.image)"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    banners: Array,
  },
  methods:{
    imgClick(x){
        console.log(x);
    }
  }
};
</script>

<style>
img {
  height: 100%;
  width:100%;
}
</style>