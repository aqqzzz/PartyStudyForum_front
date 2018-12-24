<template>
  <div class="cardContainer">
    <div class="left">
      <div class="imgWrapper"></div>
    </div>
    <div class="right">
      <div class="header">
        {{headerText}}
      </div>
      <div class="extraInfo">
        {{extraText}}
      </div>
      <div class="operation">
        <span><i class="ai-edit" />编辑</span>
        <span><i class="ai-minus-circle-o" />删除</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export const MEMBER_TYPE = {
  LEADER: 0,
  ORDINAL: 1,
}
@Component
export default class MemberCard extends Vue {
  @Prop(Number) private type!: number

  private data = {
    roleTitle: '宣传委员',
    username: '张文玘',
    studentId: 'MF1832246',
  }

  get cardType() {
    return this.type
  }

  get headerText() {
    return this.cardType === MEMBER_TYPE.LEADER ? this.data.roleTitle : this.data.username
  }

  get extraText() {
    return this.cardType === MEMBER_TYPE.LEADER ? `${this.data.username} ${this.data.studentId}` : this.data.studentId
  }
}
</script>
<style lang="scss" scoped>
@import './constant.scss';
  .cardContainer {
    width: 200px;
    height: 70px;
    display: inline-flex;
    .left {
      width: 70px;
      height: 70px;
      flex-shrink: 0;
      margin-right: 10px;

      .imgWrapper {
        width: 100%;
        height: 100%;
        border-radius: 3px;
        background-color: $light-color;
      }
    }
    .right {
      flex-grow: 1;
      color: $dark-color;
      position: relative;
      .header {
        font-size: 14px;
      }
      .extraInfo {
        margin-top: 5px;
        font-size: 12px;
        color: $light-color;
      }
      .operation {
        font-size: 12px;
        position: absolute;
        bottom: 0;
        > span {
          margin-right: 5px;
          cursor: pointer;
        }
      }
    }
  }
</style>

