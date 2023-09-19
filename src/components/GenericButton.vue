<script setup lang="ts">
defineProps<{
  text: string
  onClick: () => void
  full?: boolean
}>()
</script>

<template>
  <button
    class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-all duration-300 ease-in-out"
    :class="full ? 'w-full' : ''" @click="onClick">
    <span class="w-full text-center">{{ text }}</span>
    <slot></slot>
  </button>
</template>
