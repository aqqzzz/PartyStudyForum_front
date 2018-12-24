<template>
  <div class="container">
    <OrgHeader></OrgHeader>
    <OrgMember></OrgMember>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import OrgMember from './components/OrgMember.vue'
import OrgHeader from './components/OrgHeader.vue'
@Component({
  components: {
    OrgHeader,
    OrgMember,
  }
})
export default class OrgDetail extends Vue {

}
</script>
