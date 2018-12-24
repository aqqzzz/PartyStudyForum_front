<template>
    <div class="Header">
      <div class="title">南京大学软件学院</div>
      <div class="profile">
        
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Header extends Vue {
    
}
</script>

<style lang="scss" scoped>
.Header {
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  padding-left: 60px;
  background: #c12125;

  .title {
    font-size: 22px;
    color: #fff;
  }
  .profile {

  }
}
</style>

