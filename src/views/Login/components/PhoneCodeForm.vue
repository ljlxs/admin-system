<script setup lang="ts">
// import type { FormInstance, FormRules } from 'element-plus'
import { Picture, PictureRounded, UserFilled } from '@element-plus/icons-vue'
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import type { RuleForm } from '../types/login-type'
import utils from '@/utils/utils'
import { phoneCodeFormRules } from '../rules/index'
import { useGetPhoneCode, useHandleSaveUser } from '../composabol/phone-code'
//图片验证码
import { useGetImgCode } from '../composabol/index'

//图片验证码
const { imgCodeSrc, getImgCode } = useGetImgCode()

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  userCellPhone: '',
  smscode: '',
  imgcode: '',
  saveUserName: false
})

// 验证码
const { PictureText, currentTime, getPicture } = useGetPhoneCode(ruleForm)
const { getLocalUser } = useHandleSaveUser(ruleForm)
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      // 1. 点击登录按钮,判断是否保存用户名,如果保存用户名,则将用户名和保存的状态存储到本地
      if (ruleForm.saveUserName) {
        utils.saveData('userCellPhone', ruleForm.userCellPhone)
      } else {
        utils.removeData('userCellPhone')
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

onMounted(() => {
  getLocalUser()
})
</script>

<template>
  <div class="phoneFrom">
    <el-form
      ref="ruleFormRef"
      :rules="phoneCodeFormRules"
      :model="ruleForm"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item prop="username">
        <el-input
          size="large"
          :prefix-icon="UserFilled"
          v-model="ruleForm.userCellPhone"
          placeholder="请输入手机号"
        />
      </el-form-item>
      <el-form-item prop="smscode">
        <el-input
          size="large"
          :prefix-icon="Picture"
          v-model="ruleForm.smscode"
          placeholder="请输入短信验证码"
        />
        <el-button :disabled="currentTime != 0" class="btn" type="primary" @click="getPicture">{{
          PictureText
        }}</el-button>
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
.phoneFrom {
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
