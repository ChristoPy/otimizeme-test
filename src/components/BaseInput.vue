<script setup lang="ts">
import { ref, watch } from 'vue';

const { modelValue } = defineProps({
  label: String,
  type: String,
  id: String,
  placeholder: String,
  modelValue: String,
});

const internalValue = ref(modelValue);
const emit = defineEmits(['input']);

watch(internalValue, (newVal) => {
  emit('input', newVal);
});

function emitInput() {
  emit('input', internalValue.value);
}
</script>

<template>
  <div class="w-full">
    <label class="block font-medium mb-2 w-full" :for="id">{{ label }}</label>
    <input required :type="type || 'text'" :id="id" :placeholder="placeholder"
      class="border border-gray-300 hover:border-gray-500 rounded h-10 px-2 mb-4 w-full" v-model="internalValue"
      @input="emitInput" />
  </div>
</template>
