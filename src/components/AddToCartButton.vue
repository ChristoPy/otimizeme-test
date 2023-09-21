<script setup lang="ts">
import type { Product } from '@/types/product'
import store from '@/store'

import GenericButton from './GenericButton.vue'

defineProps<{
  product: Product
}>()

function onClick(product: Product) {
  store.dispatch('cart/addProduct', product)
  store.dispatch('checkout/setTotalPrice', store.getters['cart/totalPrice'])
}
</script>

<template>
  <GenericButton full text="Por no Carrinho" :on-click="() => onClick(product)">
    <svg v-if="!$store.getters['cart/isProductInCart'](product)" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
    </svg>
    <svg v-else fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24"
      height="24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  </GenericButton>
</template>
