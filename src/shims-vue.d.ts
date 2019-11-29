// import Vue from "vue"
// 上一句会导致 Vscode报错「找不到 .vue 模块」

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

