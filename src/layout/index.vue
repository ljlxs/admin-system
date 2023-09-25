<script setup lang="ts">
import { computed } from 'vue'
import ComAside from './components/ComAside/index.vue'
import ComHeader from './components/ComHeader/index.vue'
import { useMenuStore } from '@/stores/menu'
const store = useMenuStore()
const asideWidth = computed(() => {
  return store.asideWidth
})
</script>

<template>
  <el-container class="layout">
    <el-aside :width="asideWidth"><ComAside /></el-aside>
    <el-container>
      <el-header><ComHeader /></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
//定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
//定义滑块 内阴影+圆角
::-webkit-scrollbar-thumb {
  border-radius: 1em;
  background-color: #ccc;
}
//定义滚动条轨道 内阴影+圆角
::-webkit-scrollbar-track {
  border-radius: 1em;
  background-color: rgba(50, 50, 50, 0.1);
}
.layout {
  height: 100%;
  // ::-webkit-scrollbar {
  //   width: 0;
  // }
  .el-header {
    padding: 5px;
    background: #23262e;
  }
  .el-aside {
    background: var(--junjun-topbar-bg);
    transition: all 0.4s linear;
    overflow-y: auto;
  }
  .el-main {
    padding: 10px;
    height: calc(100vh - 60px);
    background: var(--el-bg-color-page);
  }
}
</style>
