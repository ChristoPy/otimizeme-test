<script setup lang="ts">
const { onChange } = defineProps({
  label: String,
  type: String,
  id: String,
  onChange: Function,
  placeholder: String,
});

const handleChange = (event: Event) => {
  if (onChange) {
    onChange((event.target as HTMLInputElement).value);
  }
};
</script>

<template>
  <div class="w-full">
    <label class="block font-medium mb-2 w-full" :for="id">{{ label }}</label>
    <input required :type="type || 'text'" :id="id" :placeholder="placeholder"
      class="border border-gray-300 hover:border-gray-500 rounded h-10 px-2 mb-4 w-full" @input="handleChange" />
  </div>
</template>
