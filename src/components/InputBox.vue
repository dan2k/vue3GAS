<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      v-bind="{ ...$attrs }"
      v-model="fieldValue"
      :class="[
        'form-control',
        { 'is-invalid': errorMessage, 'is-valid': !errorMessage && meta.dirty },
      ]"
    />
    <div class="invalid-feedback">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    required: true,
  },
});

// ใช้ useField เพื่อเชื่อมโยงกับฟิลด์ในฟอร์ม
// eslint-disable-next-line no-unused-vars
const { value: fieldValue, errorMessage, meta } = useField(props.name);
</script>

<style scoped>
/* เพิ่มสไตล์เพิ่มเติมตามต้องการ */
</style>
