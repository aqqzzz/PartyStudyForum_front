<template>
  <div class="baseContainer">
    <div class="right">
      <div class="imgWrapper"></div>
    </div>
    <div class="left">
      <div class="header">
        <div>2018第一党支部</div>
        <el-button type="primary">申请加入</el-button>
      </div>
      <div class="extraInfo">
         <span>支部书记：伍佳艺</span>
         <span>创建于：2018年11月</span>
      </div>
     
      <div class="description">
        2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部2018第一党支部
      </div>
    </div>
    
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class OrgCard extends Vue {

}
</script>

<style lang="scss" scoped>
  $light-color: rgba(0, 0, 0, 0.54);
  $dark-color:  rgba(0, 0, 0, 0.84);
  .baseContainer {
    width: 100%;
    min-height: 150px;
    
    .left {
      width: 100%;
      margin-right: 200px;
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        div:first-child {
          font-size: 21px;
          font-weight: 600;
          color: $dark-color;
        }
        div:nth-child(2) {
          font-size: 14px;
          color: $light-color;
        }
      }

      .extraInfo {
        margin: 5px 0;
        color: $light-color;
        > span {
          margin-right: 45px;
        }
      }

    }
    .right {
      float: right;
      width: 150px;
      height: 150px;
      margin-left: 24px;

      .imgWrapper {
        width: 100%;
        height: 100%;
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.54);
      }
    }
  }
</style>


