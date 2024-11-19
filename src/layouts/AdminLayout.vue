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
  import { ref } from "vue";
  import Navbar from "../components/Navbar.vue";
  import Sidebar from "../components/Sidebar.vue";
  
  const isSidebarVisible = ref(true);
  
  const toggleSidebar = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
  };
  </script>
  
  <style scoped>
  /* Layout styles */
  </style>
  