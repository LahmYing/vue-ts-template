import Vue from "vue"
// vue.d.ts 里 import Vue，才能识别 VueConstructor 等
// shims-vue.d.ts 里 import Vue，无法识别 VueConstructor 等

declare module 'vue/types/vue' {
  interface VueConstructor {
    locale: any
  }
  interface VueConfiguration {
    lang: any
  }
  interface Vue {
  }
}
