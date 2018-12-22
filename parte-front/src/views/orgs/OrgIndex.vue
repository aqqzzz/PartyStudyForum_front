<template>
    <div class="container">
        <!-- header -->
        <!-- navbar -->
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class OrgIndex extends Vue {

}
</script>
