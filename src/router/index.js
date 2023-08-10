import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddEdit from '../views/AddEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add-edit',
      name: 'AddEdit',
      component: AddEdit,  
    }
  ]
})

export default router
