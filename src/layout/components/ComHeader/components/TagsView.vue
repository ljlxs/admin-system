<script setup lang="ts">
import { useTagsStore } from '@/stores/tags'
import type { TagsType } from '@/types/tags'
import { useRouter } from 'vue-router'
const store = useTagsStore()
const router = useRouter()
const tags = (row: string) => {
  router.push(row)
}
// 点击删除tabs
const iconEel = (item: TagsType, index: number) => {
  console.log(store.TagsList)
  const lastIndex = store.TagsList.length - 1
  const isLast = index === lastIndex
  const path = store.TagsList[index].path
  store.removeTagsView({
    index,
    type: isLast ? 'last' : 'notLast',
    path: item.path
  })
  if (isLast) {
    console.log(store.TagsList[lastIndex - 1].path)
    const lastPath = store.TagsList[lastIndex - 1].path
    tags(lastPath)
  } else if (item.path === path) {
    tags(store.TagsList[index].path)
  } else {
    tags(store.TagsList[index].path)
  }
}
</script>
<template>
  <div class="TagsView">
    <div
      @click="tags(item.path)"
      class="tags-item"
      :class="{ active: item.path === $route.path }"
      v-for="(item, index) in store.TagsList"
      :key="index"
    >
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.name }}</span>
      <el-icon v-if="index != 0" @click.stop="iconEel(item, index)"><Close /></el-icon>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.active {
  background: #298efc;
  color: #ffffff;
}
.TagsView {
  flex: 1;
  color: #ccc;
  padding-left: 20px;
  display: flex;
  align-items: center;
  .tags-item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 25px;
    margin: 0 5px;
    > span {
      margin: 0 5px;
      font-size: 14px;
    }
  }
}
</style>
