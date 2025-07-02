import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Orders from '../views/Orders.vue'
import AdminLayout from '../views/admin/AdminLayout.vue'
import AdminGames from '../views/admin/AdminGames.vue'
import AdminOrders from '../views/admin/AdminOrders.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/cart', component: Cart },
  { path: '/orders', component: Orders },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: '', redirect: 'games' },
      { path: 'games', component: AdminGames },
      { path: 'orders', component: AdminOrders }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
