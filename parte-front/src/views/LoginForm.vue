<template>
    <div class="loginContainer">
        <div class="card">
            <div class="header">
                南京大学软件学院支部管理系统
            </div>
            <div class="body">
                <el-form v-if="type==='login'" :model="loginForm" :rules="commenRules" ref="loginForm" label-width="60px" class="loginForm">
                    <el-form-item props="username">
                        <el-input placeholder="请输入用户名" v-model="loginForm.username" auto-complete="false"></el-input>
                    </el-form-item>
                    <el-form-item props="password">
                        <el-input placeholder="请输入密码" v-model="loginForm.password" type="password" autocomplete="false"></el-input>
                    </el-form-item>
                    <el-form-item class="btnItem">
                        <el-button class="loginBtn" type="primary" @click="handleSubmit('loginForm')">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <a href="#" @click="handleChangeType">没有账号？立即注册</a>
                    </el-form-item>
                </el-form>
                <el-form v-else :model="registForm" :rules="registRules" ref="registForm" label-width="60px" class="registForm">
                    <el-form-item props="username">
                        <el-input placeholder="请输入用户名" v-model="registForm.username"></el-input>
                    </el-form-item>
                    <el-form-item props="password">
                        <el-input placeholder="请输入密码" v-model="registForm.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item props="rePassword">
                        <el-input placeholder="请再次输入您的密码" v-model="registForm.rePassword" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="loginBtn" type="primary" @click="handleSubmit('registForm')">注册</el-button>
                    </el-form-item>
                    <el-form-item>
                        <a href="#" @click="handleChangeType">已有账号？立即登录</a>
                    </el-form-item>
                </el-form>
            </div>
            
        </div>
        
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class LoginForm extends Vue {
    type = "login"
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
        ...this.commenRules,
        password: [
            {validator: this.validatePass, trigger: "blur"}
        ],
        rePassword: [
            {validator: this.validatePass2, trigger: "blur"}
        ]
    }

    handleChangeType() {
        if (this.type === 'login') {
            this.type = 'regist'
        } else {
            this.type = 'login'
        }
    }

    handleSubmit(formName: string) {
        this.$refs[formName].validate((valid: boolean) => {
            console.log(valid, this.loginForm)
            if (!valid) {
                return
            }
            if (this.type === 'login') {
                // TODO 登陆
            } else {
                // TODO 注册
            }
        })
    }



}
</script>
<style lang="scss" scoped>
@import './LoginForm.scss';
</style>