<template>
  <div class="loginContainer">
    <div class="card">
      <div class="header">
        南京大学软件学院支部管理系统
      </div>
      <div class="body">
        <div v-if="type==='login'">
          <LoginForm @changeType="handleChangeType"></LoginForm>
        </div>
        <div v-else>
          <RegistForm @changeType="handleChangeType"></RegistForm>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script lang="ts">
import { Vue, Component, Model } from 'vue-property-decorator'
import LoginForm from './form/LoginForm.vue'
import RegistForm from './form/RegistForm.vue'
@Component({
  components: {
    LoginForm,
    RegistForm
  }
})
export default class LoginContainer extends Vue {
  // @Model('type', {
  //   type: String,
  //   default: 'login'
  // })
  private type = 'login'

  private handleChangeType() {
    console.log(this)
    this.type = this.type === 'login' ? 'regist' : 'login'
  }

}
</script>
<style lang="scss" scoped>
  @import './LoginContainer.scss';
</style>
