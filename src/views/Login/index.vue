<script lang="ts" setup>
//背景样式
import { ref } from 'vue'
import type { ComponentMap } from '@/views/Login/types/login-type'
import { PhoneCodeForm, AccountForm, QcodeForm } from './components'

const bgColor = 'linear-gradient(0deg, #2196f3, #00bcd4, #00bcd4, #03a9f4)'
const tabList = ref<ComponentMap[]>([
  { name: '免密登录', componentName: PhoneCodeForm },
  { name: '账号登录', componentName: AccountForm },
  { name: '扫码登录', componentName: QcodeForm }
])
const currentTab = ref<number>(0)
</script>
<template>
  <div class="hind">
    <div class="login">
      <div class="left">
        <img src="../../assets/logo.svg" alt="" />
      </div>
      <div class="right">
        <div class="tab">
          <div
            class="tabs"
            :class="{ red: currentTab == index }"
            v-for="(item, index) in tabList"
            :key="index"
            @click="currentTab = index"
          >
            {{ item.name }}
          </div>
        </div>
        <div>
          <component :is="tabList[currentTab].componentName"></component>
        </div>
      </div>
    </div>
    <div class="copyright">版权所有：禄游管理系统</div>
  </div>
</template>
<style lang="scss" scoped>
.red {
  color: red;
}

.hind {
  position: fixed;
  width: 100%;
  height: 100%;
  background: v-bind(bgColor);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .login {
    width: 800px;
    height: 400px;
    display: flex;
    background: #fff;
    box-shadow: 0 0 20px 2px #000055;

    .left {
      width: 40%;
      height: 100%;
      background: #fff;
      border-right: 1px solid #f8f8f8;
      text-align: center;

      > img {
        width: 80%;
        height: 100%;
      }
    }
    .right {
      flex: 1;
      margin-top: 25px;
      .tab {
        display: flex;
      }
      .tabs {
        flex: 1;
        text-align: center;
        cursor: pointer;
      }
    }
  }

  .copyright {
    width: 100%;
    text-align: center;
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 60px;
  }
}
</style>
