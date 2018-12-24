
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
  export const Quill: any
  export default module
}
declare module 'quill-image-drop-module' {
  export default module 
  export const ImageDrop:any
}
declare module 'quill-image-resize-module' {
  export default module 
  export const ImageResize: any
}
declare module 'quill' {
  const module: any
  export default module
}