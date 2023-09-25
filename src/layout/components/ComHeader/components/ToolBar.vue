<script setup lang="ts">
import { useUserStore } from '@/stores/user'
const store = useUserStore()
</script>
<template>
  <div class="ToolBar">
    <div class="icon-item">
      <el-icon><Search /></el-icon>
    </div>
    <div class="icon-item">
      <el-icon><BellFilled /></el-icon>
    </div>
    <div class="icon-item">
      <el-icon><FullScreen /></el-icon>
    </div>
    <div class="icon-item">
      <el-icon><Sunny /></el-icon>
    </div>
    <div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            :size="30"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
          {{ store.userInfo?.name }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ToolBar {
  height: 100%;
  display: flex;
  color: #cccccc;
  align-items: center;

  .icon-item {
    margin: 0 10px;
  }
  :focus-visible {
    outline: none;
  }
  .el-dropdown-link {
    color: #cccccc;
    display: flex;
    align-items: center;
    padding-right: 10px;

    .el-avatar {
      margin-right: 10px;
    }
  }
  .el-icon:hover {
    color: var(--el-color-primary);
  }
}
</style>
