<script setup lang="ts">
import { Picture, PictureRounded, UserFilled } from '@element-plus/icons-vue'
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import type { AccountFormType } from '../types/login-type'
import { accountFormRules } from '../rules/index'
import { useGetImgCode } from '../composabol/index'
//图片验证码
const { imgCodeSrc, getImgCode } = useGetImgCode()

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<AccountFormType>({
  username: '',
  password: '',
  imgcode: '',
  saveUserName: false,
  saveUserPass: false
})
import { useHandleSaveUserOrPass } from '../composabol/account'
const { useSaveLocalUserOrPass, useGetLocalUserOrPass } = useHandleSaveUserOrPass(ruleForm)
// 验证码
// const {PictureText, currentTime, getPicture} = useGetPhoneCode(ruleForm)
// const {getLocalUser} = useHandleSaveUser(ruleForm)
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      // // 1. 点击登录按钮,判断是否保存用户名,如果保存用户名,则将用户名和保存的状态存储到本地
      // if (ruleForm.saveUserName) {
      //   utils.saveData('username', ruleForm.username)
      // }
      // // 如果勾选了记住密码
      // if (ruleForm.saveUserPass) {
      //   utils.saveData('password', ruleForm.password)
      // }
      useSaveLocalUserOrPass()
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

onMounted(() => {
  useGetLocalUserOrPass()
})
</script>

<template>
  <div class="account">
    <el-form
      ref="ruleFormRef"
      :rules="accountFormRules"
      :model="ruleForm"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item prop="username">
        <el-input
          size="large"
          :prefix-icon="UserFilled"
          v-model="ruleForm.username"
          placeholder="请输入手机号"
        />
      </el-form-item>
      <el-form-item prop="smscode">
        <el-input
          size="large"
          :prefix-icon="Picture"
          v-model="ruleForm.password"
          placeholder="请输入短信验证码"
        />
      </el-form-item>
      <el-form-item prop="imgcode">
        <el-input
          size="large"
          :prefix-icon="PictureRounded"
          v-model="ruleForm.imgcode"
          placeholder="请输入图片验证码"
        />
        <img class="img" @click="getImgCode" :src="imgCodeSrc" alt="" />
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="ruleForm.saveUserName" label="记住用户名" name="type" />
        <el-checkbox v-model="ruleForm.saveUserPass" label="记住密码" name="type" />
        <router-link style="margin-left: 40px" to="/resetpwd">忘记密码?</router-link>
      </el-form-item>
      <el-form-item prop="name">
        <el-button style="width: 100%" color="#fd100e" round @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.account {
  margin-top: 20px;
  .el-form {
    padding: 0 50px;
    ::v-deep(.el-form-item__content) {
      flex-wrap: nowrap;
    }
    .btn,
    .img {
      margin-left: 10px;
      height: 100%;
    }
    .img {
      width: 100px;
    }
  }
}
</style>
