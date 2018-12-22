<template>
  <el-tabs v-model="activeTab" @tab-click="handleTabClick">
    <el-tab-pane label="支部班子" name="leaders">
      支部班子
    </el-tab-pane>
    <el-tab-pane label="支部成员" name="members">
      支部成员
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class OrgMember extends Vue {
  private activeTab = 'leaders'

  handleTabClick(tab: any, event: any) {

  }
}
</script>
