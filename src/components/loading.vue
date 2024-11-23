<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- <div class="loading-overlay" v-if="visible">
    <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p class="loading-text">{{ message }}</p>
  </div> -->
  <div class="loading-overlay" v-if="visible">
    <div class="loading-box">
      <!-- Progress Bar -->
      <div class="progress-bar-container">
        <div class="progress-bar"></div>
      </div>
      <!-- Loading Message -->
      <p class="loading-message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  message: {
    type: String,
    default: "Loading...",
  },
});
</script>

<style scoped>
/* 
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.spinner div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: spinner 1.2s linear infinite;
  border-color: #fff transparent transparent transparent;
}

.spinner div:nth-child(1) {
  animation-delay: -0.45s;
}
.spinner div:nth-child(2) {
  animation-delay: -0.3s;
}
.spinner div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: #fff;
  font-size: 1.5rem;
  margin-top: 20px;
} */
/* ครอบพื้นที่ทั้งหมด */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); /* โปร่งใสเล็กน้อย */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* กล่อง Loading */
.loading-box {
  background-color: #28a745; /* สีเขียว */
  width: 30%; /* ขนาดกล่อง */
  height: 20%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* เงา */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Progress Bar Container */
.progress-bar-container {
  width: 80%; /* ความกว้าง Progress Bar */
  height: 10px;
  background-color: rgba(255, 255, 255, 0.2); /* สีพื้นจาง */
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  top: 50%; /* อยู่ตรงกลางกล่อง */
  transform: translateY(-50%); /* ปรับให้อยู่กลางพอดี */
}

/* Progress Bar */
.progress-bar {
  width: 20%;
  height: 100%;
  background-color: #fff; /* สีขาว */
  position: absolute;
  animation: progress-bar-animation 1.5s linear infinite;
  border-radius: 5px;
}

/* Keyframe สำหรับ Progress Bar */
@keyframes progress-bar-animation {
  0% {
    left: -20%;
  }
  50% {
    left: 50%;
  }
  100% {
    left: 100%;
  }
}

/* ข้อความ Loading */
.loading-message {
  color: #fff;
  font-size: 1rem;
  position: absolute;
  bottom: 5px; /* อยู่ชิดล่าง */
  text-align: center;
}
</style>
