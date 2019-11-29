import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import localLocale from './i18n'
import { localStorage } from './lib/webstorage'

import { currencyFilter } from './currency'

Vue.filter('currency', currencyFilter)

// vue-i18n
Vue.use(VueI18n)
Vue.config['lang'] = localStorage.getItem('lang') || 'zh-cn'
Object.keys(localLocale).forEach(lang => Vue.locale(lang, localLocale[lang]))

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
