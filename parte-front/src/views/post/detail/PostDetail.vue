<template>
  <div class="PostDetail">
    <div class="header" contenteditable="true">{{post.title}}</div>
    <div class="subHeader" contenteditable="true">{{post.subTitle}}</div>
    <div class="profile">
      <div class="avatar" :style="`background:url(${post.user.avatar});`"></div>
      <div class="info">
        <div>{{post.user.name}}</div>
        <div>{{post.createTime}}</div>
      </div>
    </div>
    <div class="content">
      <QuillEditor 
        v-model="post.content"
        ref="myQuillEditor"
        :options="editorOption"
      >
        <div 
          id="toolbar" 
          slot="toolbar" 
          :style="`height:${isEditing ? 'initial' : 0};padding:${isEditing ? '0 0 24px 0' : 0};overflow:${isEditing ? 'initial' : 'hidden'};`"
        >
          <!-- Add font size dropdown -->
          <select class="ql-size">
            <option value="small">小</option>
            <option selected>正常</option>
            <option value="large">大</option>
            <option value="huge">特大</option>
          </select>
          <!-- Add a bold button -->
          <button class="ql-bold">加粗</button>
          <button class="ql-italic">斜体</button>
          <!-- Add subscript and superscript buttons -->
          <button class="ql-list" value="ordered"></button>
          <button class="ql-list" value="bullet"></button>
          <button class="ql-link"></button>
          <button class="ql-image"></button>
        </div>
      </QuillEditor>
    </div>
    <div class="controlGroup">
      <i class="ai-edit" @click="handleChangeEditing"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator'
import Quill from 'quill'
import { quillEditor as QuillEditor, IQuillEditor } from 'vue-quill-editor'
import { ImageDrop } from 'quill-image-drop-module'
Quill.register('modules/imageDrop', ImageDrop)
@Component({
  components: {
    QuillEditor
  }
})
export default class PostDetail extends Vue {

  private post = {
    title: '习大大重要讲话',
    subTitle: '习大大12月20日电视讲话',
    createTime: new Date().valueOf(),
    content: '讲话的内容主要包括.'.repeat(100),
    user: {
      name: '五加意',
      avatar: '1',
    }
  }
  private isEditing = false
  private content = ''
  private editorOption = {
    modules: {
      toolbar: '#toolbar',
      imageDrop: true,
      imageResize: {
        displayStyles: {
          backgroundColor: 'black',
          border: 'none',
          color: 'white'
        },
        modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
      }
    },
    placeholder: '请输入内容'
  }
 
  protected updated() {
    const w: any = window
    const editor: IQuillEditor = this.$refs.myQuillEditor as any
    w.a = editor
    // editor.quill
    console.dir(this.$el)
  }
  private getEditor() {
    const editor: IQuillEditor = this.$refs.myQuillEditor as any
    return editor
  }

  private handleChangeEditing() {
    this.isEditing = !this.isEditing
    this.getEditor().quill.enable(this.isEditing)
  }


}
</script>

<style lang="css">
  .ql-container {
    font-size: 21px;
  }
  .ql-editor {
    padding: 0;
  }
  .ql-editor.ql-blank::before {
    left: 0;
  }
  .ql-container.ql-snow,
  .ql-toolbar.ql-snow {
    border: none !important;
  }
</style>

<style lang="scss" scoped>

  .PostDetail {

    color: rgba(0,0,0,.84);
    margin-top: 20px;
    max-width: 740px;
    padding: 20px 20px 40px 20px;
    margin: 0 auto;
    .header {
      margin-bottom: 8px;
      font-size: 42px;
      line-height: 1.04;
      letter-spacing: -.015em;
      font-weight: 600;
      outline: none;
    }
    .subHeader {
      font-size: 28px;
      line-height: 1.22;
      letter-spacing: -.012em;
      color: rgba(0,0,0,.54);
      margin: 4px 0 24px 0;
      outline: none;
    }
    .profile {
      display: flex;
      align-items: center;
      margin: 24px 0;
      font-size: 17px;
      line-height: 20px;;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(0,0,0,.54);
        flex: 0 0 50px;
        margin-right: 15px;
      }
      .info {
        font-size: 16px;
        line-height: 20px;
        & > div:first-of-type {
          margin-bottom: 4px;
        }
        & > div:last-of-type {
          color: rgba(0,0,0,.54);
        }
      }
    }
    .content {
      font-size: 21px;
      line-height: 1.58;
      letter-spacing: -.003em;
      margin-top: 32px;
    }
    .controlGroup {
      display: flex;
      position: fixed;
      left: 0;
      bottom: 0;
      i {
        font-size: 32px;
        margin: 8px;
      }
    }
  }
</style>

