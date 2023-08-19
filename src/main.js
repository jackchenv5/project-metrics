// vue3 创建app对象方法
import { createApp } from 'vue'

// 引入element-plus 全局css，可自定制
import 'element-plus/dist/index.css'

// 引入根节点，通过mount方式挂载
import App from './App.vue'

// 引入router对象
import routers from './router/index'

//引入全局状态管理对象
import store from './store/index'

//引入element-plus
import ElementPlus from 'element-plus'

//引入图标库（vue3独立了图标库）
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//创建vue实例
const app = createApp(App)

//全局引入图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//注册全局组件，该项目中直接使用，无需导入
app.use(routers)
app.use(store)
app.use(ElementPlus)
app.mount('#app')