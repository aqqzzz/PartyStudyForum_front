<template>
  <div class="PostList">
    <PostItem v-for="post in postList" v-bind:key="post.id"></PostItem>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PostItem from './PostItem.vue'
@Component({
  components: {
    PostItem
  }
})
export default class PostList extends Vue {
  private postList = [{
    id: 1,
  }, {
    id: 2,
  }]
}
</script>

<style lang="scss" scoped>
  .PostList {
    margin-top: 20px;
  }
</style>

