import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/contacto', name: 'Contacto', component: () => import('../views/Contacto.vue') },
  { path: '/usuarios/:id', name: 'Usuarios', component: () => import('../views/Usuarios.vue') },
  { path: '/login', name: 'Login', component: () => import('../views/login.vue') },
  { path: '/register', name: 'Register', component: () => import('../views/register.vue') },
  { path: '/registrarse', redirect: '/register' },
  { path: '/productos', name: 'Productos', component: () => import('../views/productos/Index.vue') },
  { path: '/producto/:producto', name: 'Producto', props: true, component: () => import('../views/productos/Detalle.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
