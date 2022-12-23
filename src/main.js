import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)  //这是vue3+router4的版本(主要是router4),如何挂载路由

app.use(router)
app.use(ElementPlus)

app.mount('#app')

//或者如下写
// createApp(App).use(router).mount('#app') //挂载路由
