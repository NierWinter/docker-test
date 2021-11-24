import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
import '@/mock/index'

import { Tab, Tabs } from 'vant'

createApp(App).use(store).use(router).use(Tab).use(Tabs).mount('#app')
