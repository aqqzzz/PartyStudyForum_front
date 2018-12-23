
declare module 'vue-quill-editor' {
  import { Component } from 'vue'
  const module: any
  export type IQuillEditor = Component & {
    quill: {
      getContents: () => any,
      setContents: (contents: any) => void,
      enable: (enable: boolean) => void
    }
  } 
  export const quillEditor: IQuillEditor
  export default module
}