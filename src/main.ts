import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { HaveVisited } from './storage'
import App from './App.vue'
import countDown from './components/countDown.vue'
import welcome from './components/welcome.vue'

const routes = [
  {
    path: '/',
    redirect: () => {
      if (HaveVisited()) return '/home'
      else return '/welcome'
    }
  },
  { path: '/home', component: countDown },
  { path: '/welcome', component: welcome }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
