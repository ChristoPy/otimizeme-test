<script setup lang="ts">
import { formatMoney } from '@/utils/money'
import type { Product } from '@/types/product'

import ProductImage from './ProductImage.vue'
import AddToCartButton from './AddToCartButton.vue'
import Card from './Card.vue'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
    <Card>
      <ProductImage :name="product.name" :image="product.image" />
      <h3 class="pt-3 font-bold text-2xl">{{ product.name }}</h3>

      <p class="pt-1 pb-3 text-gray-900">{{ formatMoney(product.price) }}</p>
      <AddToCartButton :product="product" />
    </Card>
  </div>
</template>
