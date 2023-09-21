<script setup lang="ts">
import ComAside from './components/ComAside/index.vue'
import ComHeader from './components/ComHeader/index.vue'
</script>

<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px"><ComAside /></el-aside>
      <el-container>
        <el-header><ComHeader /></el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100%;
  .el-header {
    padding: 5px;
    background: #23262e;
  }
  .el-aside {
    height: calc(100vh - 60px);
  }
  .el-main {
    padding: 10px;
    height: calc(100vh - 60px);
    background: var(--el-bg-color-page);
  }
}
</style>
