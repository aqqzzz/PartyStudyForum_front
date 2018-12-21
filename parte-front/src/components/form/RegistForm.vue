<template>
  <el-form :model="registForm" :rules="registRules" ref="registForm" label-width="60px" class="registForm">
    <el-form-item prop="username">
      <el-input placeholder="请输入用户名" v-model="registForm.username"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="请输入密码" v-model="registForm.password" type="password"></el-input>
    </el-form-item>
    <el-form-item prop="rePassword">
      <el-input placeholder="请再次输入您的密码" v-model="registForm.rePassword" type="password"></el-input>
    </el-form-item>
    <el-form-item class="btnItem">
      <el-button class="button" type="primary" @click="handleSubmit('registForm')">注册</el-button>
    </el-form-item>
    <el-form-item>
      <a href="#" @click="toLogin">已有账号？立即登录</a>
    </el-form-item>
  </el-form>
</template>
<script>
import { Vue, Component, Emit } from 'vue-property-decorator'
@Component
export default class RegistForm extends Vue {
  registForm = {
    username: '',
    password: '',
    rePassword: '',
  }

  validatePass = (rule, value, callback) => {
    // console.log(value, rule)
    if (!value) {
        callback('请输入密码')
    } else {
        if (this.registForm.rePassword) {
            this.$refs.registForm.validateField(['rePassword'])
        } else {
            callback()
        }
    }
  }

  validatePass2 = (rule, value, callback) => {
    if (!value) {
        callback('请再次输入密码')
    } else if (value !== this.registForm.password) {
        callback('两次输入密码不一致！')
    } else {
        callback()
    }
  }

  registRules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur'}
    ],
    password: [
        {validator: this.validatePass, trigger: "blur"}
    ],
    rePassword: [
        {validator: this.validatePass2, trigger: "blur"}
    ]
  }

  @Emit('changeType')
  toLogin() {
    console.log('toLogin')
  }

  handleSubmit(formName) {
    this.$refs[formName].validate((valid) => {
      if (!valid) {
        return
      }
      console.log('regist')
      // TODO regist
    })
  }
}
</script>
<style lang="scss" scoped>
@import './FormBtn.scss';
</style>

