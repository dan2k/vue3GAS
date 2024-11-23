<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :class="['sidebar', { collapsed: !isVisible }]"
    style="height: 100vh; background-color: #f8f9fa"
  >
    <ul class="nav nav-pills flex-column mb-auto p-2">
      <li v-for="(route, index) in $router.options.routes" :key="index">
        <router-link
          :to="route.path"
          class="nav-link d-flex align-items-center"
          :class="{ 
            'justify-content-center': !isVisible ,
            'active': $route.fullPath==route.path,
          }"
        >
          <span class="material-icons">{{route.iconname}}</span>
          <span v-if="isVisible" class="ms-2">{{route.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.sidebar {
  width: 250px;
  transition: all 0.3s ease-in-out;
}

.sidebar.collapsed {
  width: 65px;
}

.nav-link {
  padding: 10px;
  font-size: 16px;
  color: #495057;
}

.nav-link:hover {
  background-color: #e9ecef;
  border-radius: 5px;
  color: #000;
}

.material-icons {
  font-size: 24px;
}
/* Media Query สำหรับหน้าจอเล็กกว่า 768px */
@media (max-width: 768px) {
  .sidebar {
    position: relative;
    width: 250px;
    left: 0px;
    transition: all 0.3s ease-in-out;
  }

  .sidebar.collapsed {
    width:0px;
    left: -65px;
  }
}
</style>
