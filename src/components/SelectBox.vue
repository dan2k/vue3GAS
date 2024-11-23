<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <vue-select
      v-bind="{ ...$attrs }"
      v-model="fieldValue"
      :options="options"
      label-by="label"
      value-by="id"
      :name="name"
      :id="id"
      :searchable="true"
      :close-on-select="true"
      :clear-on-close="true"
      :clear-on-select="true"
      placeholder="เลือก"
      search-placeholder="ค้นหา"
      :class="[
        'form-select form-select-sm',
        { 'is-invalid': errorMessage, 'is-valid': !errorMessage && meta.dirty },
      ]"
      style="width: 100%;"
    />
    
    <div class="invalid-feedback">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import VueSelect from "vue-next-select";
import "vue-next-select/dist/index.min.css";
defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  options: {
    type: Array,
    required: true,
  },
});
const { value: fieldValue, errorMessage, meta } = useField(props.name);
console.log(fieldValue.value)
// fieldValue.value=null;
</script>
