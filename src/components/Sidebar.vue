<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :class="['sidebar', { 'collapsed': !isVisible }]"
    style="height: 100vh; background-color: #f8f9fa;"
  >
    <ul class="nav nav-pills flex-column mb-auto p-2">
      <li class="nav-item">
        <!-- <a href="#" class="nav-link d-flex align-items-center" :class="{'justify-content-center': !isVisible}">
          <span class="material-icons">dashboard</span>
          <span v-if="isVisible" class="ms-2">Dashboard</span>
        </a> -->
        <router-link to="/" class="nav-link d-flex align-items-center" :class="{'justify-content-center': !isVisible}">
          <span class="material-icons">home</span>
          <span v-if="isVisible" class="ms-2">Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="nav-link d-flex align-items-center" :class="{'justify-content-center': !isVisible}">
          <span class="material-icons">shopping_cart</span>
          <span v-if="isVisible" class="ms-2">Orders</span>
        </router-link>
      </li>
      <li>
        <router-link to="/products" class="nav-link d-flex align-items-center" :class="{'justify-content-center': !isVisible}">
          <span class="material-icons">inventory</span>
          <span v-if="isVisible" class="ms-2">Products</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="nav-link d-flex align-items-center" :class="{'justify-content-center': !isVisible}">
          <span class="material-icons">group</span>
          <span v-if="isVisible" class="ms-2">Customers</span>
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
  width: 80px;
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
</style>
