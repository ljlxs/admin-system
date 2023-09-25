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
//定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
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
.active {
  background: #298efc;
  color: #ffffff;
}
.TagsView {
  width: 100%;
  flex: 1;
  color: #ccc;
  height: 100%;
  padding-left: 20px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  .tags-item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 25px;
    margin: 0 5px;
    min-width: 100px;
    > span {
      margin: 0 5px;
      font-size: 14px;
    }
  }
}
</style>
