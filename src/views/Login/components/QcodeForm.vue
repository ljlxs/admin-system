<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const qcodeSrc = ref('')
const time = ref(0)
let trime: number
const codeQ = () => {
  qcodeSrc.value = new URL('../../../assets/qcode.png', import.meta.url).href
  clearInterval(trime)
  time.value = 5
  trime = setInterval(() => {
    time.value--
    checkLogin()
    if (time.value <= 0) {
      clearInterval(trime)
      time.value = 0
    }
  }, 1000)
}
codeQ()
const checkLogin = () => {}
//当页面卸载时清除计时器防止内存泄露
onUnmounted(() => {
  clearInterval(trime)
})
</script>

<template>
  <div class="qcode">
    <div class="code">
      <img class="img" :class="{ 'end-img': time <= 0 }" :src="qcodeSrc" alt="" />
      <div v-if="time <= 0" class="code-text">当前二维码已失效，点击重新加载</div>
    </div>
    <div class="code-bom">使用微信或者移动端扫码登录</div>
  </div>
</template>

<style scoped>
.qcode {
  .code {
    width: 55%;
    height: 55%;
    position: relative;
    margin: 20px auto;
    .img {
      width: 100%;
      height: 100%;
      display: block;
    }
    .end-img {
      filter: brightness(10%);
    }
    .code-text {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 14px;
      color: #fff;
      text-align: center;
    }
  }
  .code-bom {
    text-align: center;
    color: #afb2c6;
    font-size: 14px;
  }
}
</style>
