<template>
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="60px" class="loginForm">
        <el-form-item prop="username">
            <el-input placeholder="请输入用户名" v-model="loginForm.username" auto-complete="false"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input placeholder="请输入密码" v-model="loginForm.password" type="password" autocomplete="false"></el-input>
        </el-form-item>
        <el-form-item class="btnItem">
            <el-button class="button" type="primary" @click="handleSubmit('loginForm')">登录</el-button>
        </el-form-item>
        <el-form-item>
            <a href="#" @click="toRegist">没有账号？立即注册</a>
        </el-form-item>
    </el-form>
</template>
<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator'

@Component
export default class LoginForm extends Vue {
    // @Prop(function) changeType!: () => void

    loginForm = {
        username: '',
        password: '',
    }
    commenRules = {
        username: [
            {required: true, message:'请输入用户名', trigger: 'blur'}
        ],
        password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
        ]
    }
    loginRules = {
        ...this.commenRules
    }
    @Emit('changeType')
    toRegist() {
        console.log('to regist')
    }

    handleSubmit(formName: string) {
        this.$refs[formName].validate((valid: boolean) => {
            console.log(valid, this.loginForm)
            if (!valid) {
                return
            }
            // TODO 登陆
        })
    }



}
</script>
<style lang="scss" scoped>
@import './FormBtn.scss';
</style>
