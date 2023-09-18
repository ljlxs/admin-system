<script setup lang="ts">
// import type { FormInstance, FormRules } from 'element-plus'
import { Picture, UserFilled } from '@element-plus/icons-vue'
const ruleForm = {
  name: '',
  verification: '',
  type: false
}
</script>

<template>
  <div class="phoneFrom">
    <el-form ref="ruleFormRef" :model="ruleForm" class="demo-ruleForm" status-icon>
      <el-form-item prop="name">
        <el-input :prefix-icon="UserFilled" v-model="ruleForm.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="name">
        <el-input
          :prefix-icon="Picture"
          v-model="ruleForm.verification"
          placeholder="请输入短信验证码"
        />
        <el-button class="btn" type="primary">获取验证码</el-button>
      </el-form-item>
      <el-form-item prop="name">
        <el-input
          :prefix-icon="Picture"
          v-model="ruleForm.verification"
          placeholder="请输入图片验证码"
        />
        <el-button class="btn" type="primary">获取验证码</el-button>
      </el-form-item>
      <el-form-item prop="name">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="记住用户名" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item prop="name">
        <el-button style="width: 100%" color="#fd100e" round>登录</el-button>
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
    .btn {
      margin-left: 10px;
    }
  }
}
</style>
