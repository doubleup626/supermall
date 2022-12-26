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
    /* box-shadow: 1px 1px 3px  rgba(red, green, blue, alpha); */
    background-color: rgb(241, 241, 241);
}
.view img{
    height: 80px;
    /* width:40px; */
    border-radius: 50%;
}
.view div{
    text-align: center;
    font-size: small;
}

</style>