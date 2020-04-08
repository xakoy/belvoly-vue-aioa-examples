import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { setGloablConfig } from '@belvoly-vue-aioa/core'

setGloablConfig({ apiHost: 'http://192.168.101.135:2001/api/' })

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
