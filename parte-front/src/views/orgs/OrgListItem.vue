<template>
  <div class="container">
    <div class="left">
      <div class="imgWrapper"></div>
    </div>
    <div class="right">
      <div class="header">
        <div class="title">{{orgItem.name}}</div>
        <div class="time">创建于：{{orgItem.createTime}}</div>
      </div>
      <div class="content">
        <div class="info">
          {{ orgItem.description}}
        </div>
        <div class="join">
          <el-button type="primary" id="addBtn">申请加入</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class OrgListItem extends Vue {
  private orgItem = {
    name: '2018第一党支部',
    createTime: '2018年3月',
    description: '2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部'
  }
}
</script>
<style lang="scss" scoped>
@import './OrgListItem.scss';
</style>

