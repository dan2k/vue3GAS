<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="btn btn-outline-light btn-sm me-2" @click="toggleSidebar">
        <span class="material-icons">menu</span>
      </button>
        <!-- <a class="navbar-brand" href="#">รายรับ - รายจ่าย</a> -->
        <h5 class="navbar-brand w-50">รายรับ - รายจ่าย</h5>
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div> -->
      </div>
    </nav>
  </template>
  
  <script setup>
  const emit = defineEmits(['toggle-sidebar']);
  
  const toggleSidebar = () => {
    emit('toggle-sidebar');
  };
  </script>
  