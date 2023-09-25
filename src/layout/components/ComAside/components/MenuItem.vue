<script setup lang="ts">
defineProps<{
  menuDate: any
}>()
</script>
<template>
  <template v-for="(item, index) in menuDate" :key="index">
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
      <MenuItem
        :menuDate="item.children"
        v-if="item.children && item.children.length > 0"
      ></MenuItem>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<style lang="scss" scoped>
.menuItem {
}
</style>
