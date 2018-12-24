<template>
  <el-tabs class="memberContainer" v-model="activeTab">
    <el-tab-pane label="支部班子" name="leaders">
      <div class="listHeader">
        <SearchInput v-model="value" />
        <el-button>创建职位</el-button>
      </div>
      <div class="listContainer">
        <div class="memberCardWrapper" v-for="leader in leaderList" :key="leader.id">
          <MemberCard v-bind:type="memberType.LEADER"/>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="支部成员" name="members">
      <div class="listHeader">
        <el-input />
        <el-button>创建成员</el-button>
      </div>
      <div class="listContainer">
        <div class="memberCardWrapper" v-for="member in leaderList" :key="member.id">
          <MemberCard v-bind:type="memberType.ORDINAL"/>
        </div>
      </div>
      
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MemberCard, { MEMBER_TYPE } from './MemberCard.vue'
import SearchInput from '@/components/input/SearchInput.vue'

@Component({
  components: {
    MemberCard,
    SearchInput
  }
})
export default class OrgMember extends Vue {
  private activeTab = 'leaders'
  private memberType = MEMBER_TYPE

  private leaderList = [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }]

  private value = ''

  private handleSearch(event: any) {
    console.log(event.target.value, event.keycode, this.value)
  }
}
</script>
<style>
  .memberContainer .el-tabs__nav-wrap::after {
    display: none;
  }
</style>
<style lang="scss" scoped>
.listHeader {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    // justify-content: space-between;
    .el-input {
      width: 180px;
    }
}
.listContainer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  
  .memberCardWrapper {
    margin-right: 20px;
    margin-top: 10px;
  }
}

</style>


