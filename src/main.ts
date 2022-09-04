import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import 'uno.css'
import './animation.css'

import { HaveVisited } from './ts/storage'
import { TestDateCalc } from './ts/dateCalc'

import App from './App.vue'
import countDown from './components/home/countDown.vue'
import welcome from './components/welcome.vue'
import settings from './components/settings/settings.vue'
import happyBirthday from './components/home/happyBirthday.vue'

const routes = [
  {
    path: '/',
    redirect: () => {
      if (HaveVisited()) return '/home'
      else return '/welcome'
    }
  },
  { path: '/home', component: countDown },
  { path: '/happy-birthday', component: happyBirthday },
  { path: '/welcome', component: welcome },
  { path: '/settings', component: settings }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

// Tests
TestDateCalc()
