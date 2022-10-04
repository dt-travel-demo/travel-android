import App from './App'

//add util
import {$request,$getImgH} from 'util/index.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$request=$request
Vue.prototype.$getImgH=$getImgH
import Title from './component/title/title.vue'
Vue.component('Title',Title)

const app = new Vue({
    ...App
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif