<template>
  <div class="Index">
    <Header />
    <div class="navbar">
      <div>帖子</div>
      <div>支部</div>
    </div>
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/header/Header.vue'
import PostItem from '../post/PostItem.vue'
@Component({
  components: {
    Header,
    PostItem
  },
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.Index {
  max-width: 1032px;
  margin: 0 auto;
  .navbar {
    height: 50px;
    display: flex;
    align-items: center;
    & > div {
      color: rgba(0,0,0,.84);
      margin-right: 24px;
      font-size: 16px;
    }
  }
  .body {
    margin-top: 48px;

  }
}
</style>

