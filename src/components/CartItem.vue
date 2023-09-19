<script setup lang="ts">
import type { CartItem } from '@/types/cart'
import { formatMoney } from '@/utils/money'
import GenericButton from './GenericButton.vue';

defineProps<{
  item: CartItem
}>()
</script>

<template>
  <ul class="grid gap-4">
    <li
      :key="item.product._id"
      class="flex items-center justify-between border-b py-4"
    >
      <div>
        <h3 class="pt-3 font-bold text-2xl">{{ item.product.name }}</h3>
        <p class="pt-1 pb-3 text-gray-900">
          {{ formatMoney(item.product.price) }}
        </p>
      </div>
      <div class="flex justify-center items-center space-x-2">
        <GenericButton
          text="-"
          :on-click="
            () =>
              $store.dispatch('cart/setQuantity', {
                product: item.product,
                quantity: item.quantity - 1,
              })
          "
        />
        <span>{{ item.quantity }}</span>
        <GenericButton
          text="+"
          :on-click="
            () =>
              $store.dispatch('cart/setQuantity', {
                product: item.product,
                quantity: item.quantity + 1,
              })
          "
        />
      </div>
    </li>
  </ul>
</template>
