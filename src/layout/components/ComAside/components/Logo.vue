<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import { computed } from 'vue'
const img = new URL('../../../../assets/logo.svg', import.meta.url).href
const store = useMenuStore()
const asideWidth = computed(() => {
  return store.getMenuStatus()
})
</script>
<template>
  <div class="logo">
    <span v-if="!asideWidth">通用管理后台系统</span>
    <img :src="img" alt="" />
  </div>
</template>
<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  color: #ccc;
  height: 50px;
  justify-content: center;
  > img {
    width: 30px;
    height: 30px;
    margin: 0 10px;
  }
}
</style>
