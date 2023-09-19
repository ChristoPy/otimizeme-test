<script setup lang="ts">
import type { Product } from '@/types/product'

import GenericButton from './GenericButton.vue'

const props = defineProps<{
  product: Product
}>()

function onclick() { }
</script>

<template>
  <GenericButton full text="Por no Carrinho" :on-click="onclick">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
    </svg>
  </GenericButton>
</template>
