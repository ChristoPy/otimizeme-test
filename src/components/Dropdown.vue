<script setup lang="ts">
import type { PropType } from "vue";
import type { DropdownOption } from '@/types/shared'
import { ref, watch } from 'vue';

const props = defineProps({
  label: String,
  id: String,
  placeholder: String,
  options: {
    type: Array as PropType<DropdownOption[]>,
    default: () => [],
  },
  value: Object as PropType<DropdownOption>,
});

const selectedValue = ref(props.value);
const emit = defineEmits(['input']);

watch(() => props.value, () => {
  selectedValue.value = props.value
})

function emitInput() {
  emit('input', selectedValue.value);
}
</script>

<template>
  <div class="w-full">
    <label class="block font-medium mb-2 w-full" :for="id">{{ label }}</label>
    <select :id="id" class="border border-gray-300 hover:border-gray-500 rounded h-10 px-2 mb-4 w-full"
      @change="emitInput" v-model="//@ts-ignore
        selectedValue.id">
      <option value="">{{ placeholder }}</option>
      <option v-for="(option, index) in options" :key="option.id" :value="option.id">{{ option.name }}</option>
    </select>
  </div>
</template>
