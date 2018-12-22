<template>
  <div class="container">
    <OrgCard></OrgCard>
    <OrgMember></OrgMember>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import OrgMember from './components/OrgMember.vue'
import OrgCard from './components/OrgCard.vue'
@Component({
  components: {
    OrgCard,
    OrgMember,
  }
})
export default class OrgDetail extends Vue {

}
</script>
