<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <main class="flex items-center flex-wrap">
    <ProductCard v-for="product of $store.state.products.all" :key="product._id" :product="product" />
  </main>
</template>
