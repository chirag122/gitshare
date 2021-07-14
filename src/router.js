import { createRouter, createWebHistory } from 'vue-router'
import List from '@/components/List'
import Home from '@/components/Home'   




const router = createRouter({
  history:createWebHistory(),
  routes: [
    { path: '', component: Home},
    { path: '/list', component: List}
  ]
})

export default router;

