<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import { useTagsStore } from '@/stores/tags'
import { computed, ref, watch } from 'vue'
import MenuItem from './MenuItem.vue'
import { getMenuData } from '@/api/user'
import type { MenuResponseType } from '@/types/menu'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = useMenuStore()
const TagesStore = useTagsStore()
const menuList = ref<MenuResponseType[]>()
const isCollapse = computed(() => {
  return store.getMenuStatus()
})
const MenuData = async () => {
  const res = await getMenuData()
  menuList.value = res.data
}
MenuData()
const isTags = (path: string) => {
  const whiteList = ['/login', '404', '401']
  return whiteList.includes(path)
}
watch(
  route,
  (to) => {
    if (isTags(to.path)) return
    const { fullPath, meta } = to
    // console.log('to', to)

    if (!fullPath || !meta.icon || !meta.title) return
    TagesStore.addTagsViewList({
      name: meta.title as string,
      icon: meta.icon as string,
      path: fullPath
    })
  },
  {
    immediate: true,
    deep: true
  }
)
</script>
<template>
  <el-menu
    background-color="#23262E"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#ccc"
    :collapse="isCollapse"
    router
  >
    <MenuItem :menuDate="menuList"></MenuItem>
  </el-menu>
</template>
<style scoped lang="scss">
.el-menu {
  border-right: none;
}
</style>
