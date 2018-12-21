<template>
  <div class="container">
    <DefaultHeader />
    <OrgListItem />
    <OrgListItem />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import OrgListItem from './OrgListItem.vue'
import DefaultHeader from '@/views/auth/DefaultHeader.vue'
@Component({
  components: {
    OrgListItem,
    DefaultHeader,
  }
})
export default class OrgListContainer extends Vue {

}
</script>
