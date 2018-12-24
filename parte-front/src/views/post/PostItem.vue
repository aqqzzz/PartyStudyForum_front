<template>
  <div class="PostItem">
    <div class="left">
      <div class="header">学习Python：从零到英雄</div>
      <div class="body">首先，什么是python？据创建者Guido van Rossum说，Python是：</div>
      <div class="footer">12月27日 · 5人阅读</div>
    </div>
    <div v-if="avatar" class="right">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class PostItem extends Vue {}
</script>

<style lang="scss" scoped>
.PostItem {
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header {
    font-weight: 600;
    height: 28px;
    line-height: 28px;
    font-size: 24px;
    color: rgba(0,0,0,.84);
  }
  .body {
    margin-top: 2px;
    line-height: 20px;
    font-size: 16px;
    color: rgba(0, 0, 0, .54);
  }
  .footer {
    line-height: 20px;
    font-size: 15px;
    color: rgba(0, 0, 0, .54);
    margin-top: 12px;
  }
}
</style>

