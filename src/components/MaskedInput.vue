<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue';

const { value } = defineProps({
  label: String,
  type: String,
  id: String,
  placeholder: String,
  mask: String,
  value: String
});

const internalValue = ref(value);
const emit = defineEmits(['input']);

watch(() => value, () => {
  if (value !== internalValue.value) {
    internalValue.value = value;
  }
  emit('input', internalValue.value);
});
</script>

<template>
  <div class="w-full">
    <label class="block font-medium mb-2 w-full" :for="id">{{ label }}</label>
    <input required :type="type || 'text'" :id="id" :placeholder="placeholder" v-mask="mask"
      class="border border-gray-300 hover:border-gray-500 rounded h-10 px-2 mb-4 w-full" v-model="internalValue" />
  </div>
</template>
