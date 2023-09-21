<script setup lang="ts">
import { Picture, PictureRounded, UserFilled } from '@element-plus/icons-vue'
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import type { AccountFormType } from '../types/login-type'
import { accountFormRules } from '../rules/index'
import { useGetImgCode } from '../composabol/index'
import { accountLogin } from '@/api/user'
import utils from '@/utils/utils'
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
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useUserStore()
const { useSaveLocalUserOrPass, useGetLocalUserOrPass } = useHandleSaveUserOrPass(ruleForm)
// 验证码
// const {PictureText, currentTime, getPicture} = useGetPhoneCode(ruleForm)
// const {getLocalUser} = useHandleSaveUser(ruleForm)
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (!valid) {
      for (const key in fields) {
        console.log('key', key)
        utils.showError(fields[key][0].message!)
      }
      return
    }
    useSaveLocalUserOrPass()
    utils.openLoading()
    try {
      const res = await accountLogin({
        imgcode: ruleForm.imgcode,
        password: ruleForm.password,
        username: ruleForm.username
      })
      if (res.code == 888) {
        store.setToken(res.token)
        store.setUser(res.data!)
        router.push('/')
      }
    } finally {
      // 关闭loading
      utils.closeLoading()
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
      <el-form-item prop="password">
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
