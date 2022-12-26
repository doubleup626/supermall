<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :key="item"
      @click="itemClick(index)"
      :class="{ tabControlChange: index === currentIndex }">
      <div>{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: Array,
  },
  data() {
    return {
      currentIndex: 0,
      // currentTitle:""
    };
  },
  methods: {
    itemClick(i) {
      this.currentIndex = i;
      // this.currentTitle = x
      const eTitle = ['pop','new','sell']
      this.$emit('currentTitle',eTitle[i])
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  height: 44px;
}
.tabControlChange {
  color: var(--color-tint);
  border-bottom: 3px solid var(--color-tint);
}
</style>