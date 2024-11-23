<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      type="text"
      :id="id"
      v-bind="attrs"
      v-model="formattedValue"
      class="form-control"
      @input="updateValue"
    />
    <div v-if="error" class="text-danger">{{ error }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useField } from "vee-validate";

defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
});

const { value: modelValue, errorMessage: error, ...attrs } = useField(name);

const formattedValue = computed({
  get: () => {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
    }).format(modelValue.value || 0);
  },
  set: (val) => {
    const parsedValue = parseFloat(val.replace(/[^\d.-]/g, ""));
    modelValue.value = isNaN(parsedValue) ? 0 : parsedValue;
  },
});

function updateValue(e) {
  formattedValue.value = e.target.value;
}
</script>
