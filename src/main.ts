import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { setGloablConfig } from '@belvoly-vue-aioa/core'

import BVant from '@belvoly-vue-aioa/bvant'
import '@belvoly-vue-aioa/bvant/lib/index.css'
import { setGloablConfig as setMobileGloablConfig } from '@belvoly-vue-aioa/m-core'

setGloablConfig({ apiHost: 'http://192.168.101.135:2001/api/' })
setMobileGloablConfig({ apiHost: 'http://192.168.101.135:2001/api/' })

Vue.use(BVant)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
