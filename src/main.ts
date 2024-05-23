import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'

import SaTableColumn from '../packages'
import ElementPlus from 'element-plus'

createApp(App).use(ElementPlus).use(SaTableColumn).mount('#app')
