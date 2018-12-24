<template>
  <div :class="{'my_input': true, wrapClass: true}" >
    <i class="ai-search" @click="startSearch"/>
    <input class="input_area" :style="'width:' + isEditing ? 180 : 0" :value="value" @change="handleSearch"/>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Model, Prop } from 'vue-property-decorator'
@Component
export default class SearchInput extends Vue {
  private isEditing = false
  private style1 = {
    width: 180
  }
  private style2 = {
    width: 0
  }
  @Model('change', {
    type: String,
    default: ''
  })
  private value!: string

  @Prop({ default: '' }) 
  private placeholder!: string

  @Prop(String)
  private wrapClass!: string

  private get editInt() {
    return 
  }

  private startSearch() {
    // if (!this.isEditing) {
      this.isEditing = true
    // }
  }

  private handleSearch(ev: any) {
    this.$emit('change', ev.target.value)
  }
}
</script>
<style lang="scss" scoped>
.my_input {
  .ai-search {
    margin-right: 5px;
  }
  
}
</style>

