import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)  //这是vue3+router4的版本(主要是router4),如何挂载路由
app.use(router)
app.mount('#app')

//或者如下写
// createApp(App).use(router).mount('#app') //挂载路由
