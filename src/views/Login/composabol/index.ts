import { ref } from 'vue'
export function useGetImgCode() {
  const imgCodeSrc = ref(new URL('../../../assets/code.png', import.meta.url).href)
  const getImgCode = () => {}
  return {
    imgCodeSrc,
    getImgCode
  }
}
