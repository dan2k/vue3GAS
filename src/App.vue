<!-- eslint-disable no-undef -->
<!-- eslint-disable no-undef -->
<template>
  <AdminLayout>
    <Loading :visible="isLoading" :message="message" />
     <RouterView/>
  </AdminLayout>
</template>
<script setup>
  import { onMounted } from 'vue';
  import AdminLayout from './layouts/AdminLayout.vue';
  import { RouterView } from 'vue-router';
  import { isLoading,message } from './router';
  import Loading from './components/loading.vue';
  
  // const data=ref([]);
  // const loading=ref(true);
  onMounted(async ()=>{
    
     // eslint-disable-next-line no-undef
    //  await google.script.run
    //   .withSuccessHandler(handleSuccess)
    //   .test();
    //   console.log(data)
   

  })
  // const  handleSuccess=(d)=> {
  //   data.value = d;
  //   loading.value= false;
  // };
</script>
