<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <Datepicker
      v-model="fieldValue"
      :format="format"
      :enable-time-picker="showTime"
      locale="th-TH"
      v-bind="{ ...$attrs }"
    >
      // eslint-disable-next-line vue/no-unused-vars
      <template #dp-input="{ value, onInput, onEnter, onTab, onClear }">
        <input
          type="text"
          :class="[
            'form-control',
            { 'is-invalid': errorMessage, 'is-valid': !errorMessage && meta.dirty },
          ]"
          :value="value"
          readonly="true"
          :placeholder="placeholder"
        />
        <div class="invalid-feedback">
          {{ errorMessage }}
        </div>
      </template>
      <template #input-icon>
        <span class="material-icons dpicon"> calendar_today </span>
      </template>
      <template #clear-icon="{ clear }">
        <span class="material-icons trash" @click="clear"> delete_sweep </span>
      </template>
    </Datepicker>
    <!-- <spaan class="invalid-feedback">{{errorMessage}}</spaan> -->
  </div>
</template>
<style scoped>
.trash {
  margin-right: 25px;
}
.dpicon {
  height: auto;
  width: auto;
  margin-left: 5px;
}
input {
  text-indent: 18px !important;
}
</style>
<script setup>
import { useField } from "vee-validate";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  showTime: {
    type: Boolean,
    default: false,
  },
  format: {
    type: Function,
    default: (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      var seconds = date.getSeconds();
      var minutes = date.getMinutes();
      var hour = date.getHours();
      return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
    },
  },
  id: {
    type: String,
    required: true,
  },
});

// ใช้ useField เพื่อเชื่อมโยงกับฟิลด์ในฟอร์ม
const { value: fieldValue, errorMessage, meta } = useField(props.name);
</script>
