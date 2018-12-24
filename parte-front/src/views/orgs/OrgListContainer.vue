<template>
  <div class="container">
    <div v-for="org in orglist" :key="org.id">
      <OrgListItem/>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import OrgListItem from './OrgListItem.vue'
@Component({
  components: {
    OrgListItem,
  }
})
export default class OrgListContainer extends Vue {
  private orglist = [
    {id: 1}, {id: 2}, {id: 3}
  ]
}
</script>
