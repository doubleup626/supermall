<template>
  <div class="view">
    <div v-for="item in recommends" :key="item" class="view_item" @click="itemClick">
      <img :src="item.image" />
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: Array,
  },
  methods:{
    itemClick(){
        // console.log('点击');
    }
  }
};
</script>

<style>

.view{
    display: flex;
    height: 120px;
    flex-flow:raw nowrap;
    justify-content: space-around;
    align-items:center;
    
}
.view img{
    height: 80px;
    /* width:40px; */
}
.view div{
    text-align: center;
    font-size: small;
}

</style>