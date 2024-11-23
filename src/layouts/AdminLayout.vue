<template>
  <div class="d-flex">
    <Sidebar :isVisible="isSidebarVisible" />
    <div class="flex-grow-1">
      <Navbar @toggle-sidebar="toggleSidebar" />
      <main class="p-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

const isSidebarVisible = ref(true);
// ฟังก์ชันตรวจจับขนาดหน้าจอ
const updateSidebarVisibility = () => {
  const screenWidth = window.innerWidth;
  isSidebarVisible.value = screenWidth >= 768; // แสดง Sidebar เมื่อหน้าจอ >= 768px
};
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

// ตั้งค่า Event Listener
onMounted(() => {
  updateSidebarVisibility(); // อัปเดตสถานะเมื่อโหลดครั้งแรก
  window.addEventListener("resize", updateSidebarVisibility); // ตรวจจับการปรับขนาดหน้าจอ
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSidebarVisibility); // ลบ Event Listener เมื่อคอมโพเนนต์ถูกทำลาย
});
</script>

<style scoped>
/* Layout styles */
</style>
