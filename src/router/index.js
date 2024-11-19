import { createMemoryHistory, createRouter } from 'vue-router'
const routes = [
    { path: '/', component: ()=>import('../views/home.vue') },
    { path: '/products', component: ()=>import('../views/products.vue') },
    
]
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router