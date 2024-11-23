<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <DatePicker
      :id="id"
      v-bind="attrs"
      v-model="modelValue"
      :format="format"
      :enable-time="false"
      class="form-control"
    />
    <!-- :locale="locale" -->
    <div v-if="error" class="text-danger">{{ error }}</div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import DatePicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'
// import th from "@vuepic/vue-datepicker/locale/th";

defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
});

const { value: modelValue, errorMessage: error, ...attrs } = useField(name);
// const locale = th; // ตั้งค่าให้เป็นภาษาไทย
const format = "dd/MM/yyyy"; //
</script>
