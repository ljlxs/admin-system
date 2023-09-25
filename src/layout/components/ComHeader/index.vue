<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import { computed } from 'vue'
import ToolBar from './components/ToolBar.vue'
import TagsView from './components/TagsView.vue'
const store = useMenuStore()
const handleChangeMenu = () => {
  store.toggleAsideWidth()
}
const asideWidth = computed(() => {
  return store.getMenuStatus()
})
</script>
<template>
  <div class="ComHeader">
    <div class="icon" @click="handleChangeMenu">
      <el-icon v-if="asideWidth"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </div>
    <TagsView />
    <ToolBar />
  </div>
</template>
<style scoped lang="scss">
.ComHeader {
  display: flex;
  height: 100%;
  align-items: center;
  .icon {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
