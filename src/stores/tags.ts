import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TagsType, PayloadType } from '@/types/tags'
export const useTagsStore = defineStore('useTag', () => {
  const TagsList = ref<TagsType[]>([
    {
      name: '工作台',
      icon: 'Monitor',
      path: '/Index/Home'
    }
  ])
  // 添加数据
  const addTagsViewList = (tag: TagsType) => {
    const isFind = TagsList.value?.find((item) => item.path == tag.path)
    if (!isFind) {
      TagsList.value?.push(tag)
    }
  }
  // 删除
  const removeTagsView = (play: PayloadType) => {
    // 删除最后一项
    if (play.type === 'last') {
      const list = TagsList.value.filter((item) => item.path !== play.path)
      TagsList.value = list
      return
    }
    if (play.type === 'notLast') {
      TagsList.value.splice(play.index as number, 1)
    }
  }
  return { TagsList, addTagsViewList, removeTagsView }
})
