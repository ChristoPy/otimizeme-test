<script setup lang="ts">
import type { PropType } from "vue";
import { ref } from 'vue';

interface StateOption {
  id: string;
  name: string;
}

const props = defineProps({
  label: String,
  id: String,
  placeholder: String,
  options: {
    type: Array as PropType<StateOption[]>,
    default: () => [],
  },
  onChange: Function,
});

const selectedValue = ref('');

const handleChange = () => {
  if (props.onChange) {
    props.onChange(selectedValue.value);
  }
};
</script>

<template>
  <div class="w-full">
    <label class="block font-medium mb-2 w-full" :for="id">{{ label }}</label>
    <select :id="id" class="border border-gray-300 hover:border-gray-500 rounded h-10 px-2 mb-4 w-full"
      @change="handleChange" :value="selectedValue">
      <option value="">{{ placeholder }}</option>
      <option v-for="(option, index) in options" :key="option.id" :value="option.id">{{ option.name }}</option>
    </select>
  </div>
</template>
