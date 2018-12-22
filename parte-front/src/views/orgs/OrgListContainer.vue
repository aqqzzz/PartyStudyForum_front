<template>
  <div class="container">
    <OrgListItem />
    <OrgListItem />
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

}
</script>
