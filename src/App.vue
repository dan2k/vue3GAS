<template>
  <AdminLayout>
    <h1>Welcome to Admin Dashboard</h1>
    <p>This is your content area.</p>
    <pre>{{data}}</pre>
  </AdminLayout>
</template>
<script setup>
  import { onMounted,ref } from 'vue';
  import AdminLayout from './layouts/AdminLayout.vue';
  const data=ref([]);
  const loading=ref(true);

  onMounted(async ()=>{
     await google.script.run
      .withSuccessHandler(handleSuccess)
      .test();
      console.log(data)

  })
  const  handleSuccess=(d)=> {
    data.value = d;
    loading.value= false;
  };
</script>
