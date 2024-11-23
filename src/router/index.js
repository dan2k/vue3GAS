import { createMemoryHistory, createRouter } from 'vue-router'
import { ref } from 'vue'
const routes = [
  { path: '/', component: () => import('../views/home.vue'), name: 'Home', iconname: 'home' },
  {
    path: '/products',
    component: () => import('../views/products.vue'),
    name: 'Products',
    iconname: 'inventory'
  },
  {
    path: '/orders',
    component: () => import('../views/orders.vue'),
    name: 'Orders',
    iconname: 'shopping_cart'
  },
  {
    path: '/customers',
    component: () => import('../views/customers.vue'),
    name: 'Customers',
    iconname: 'group'
  }
]
const router = createRouter({
  history: createMemoryHistory(),
  routes
})
// สร้างตัวแปรสถานะสำหรับ Loading
export const isLoading = ref(false)
export const message = ref('')
// ใช้ Navigation Guards
router.beforeEach((to, from, next) => {
  message.value = 'Loading page...'
  isLoading.value = true // เริ่มแสดง Loading
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false // ปิด Loading หลังจากโหลดเสร็จ
  }, 500) // เพิ่ม delay เพื่อความ smooth
})
export default router
