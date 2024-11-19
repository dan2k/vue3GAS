
<template>
  <AdminLayout>
    <h1>Welcome to Admin Dashboard</h1>
    <p>This is your content area.</p>
  </AdminLayout>
</template>
<script setup>
  import { onMounted } from 'vue';
  import AdminLayout from './layouts/AdminLayout.vue';
  onMounted(()=>{
    google.script.run.withSuccessHandler().test()
  })
</script>
