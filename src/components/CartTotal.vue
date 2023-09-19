<script setup lang="ts">
import { formatMoney } from '@/utils/money'
import GenericButton from '@/components/GenericButton.vue';
</script>

<template>
  <div class="mt-6 flex row items-center justify-between">
    <p class="text-2xl text-gray-900">
      Total: {{ formatMoney($store.getters['cart/totalPrice']) }}
    </p>

    <RouterLink to="/checkout">
      <GenericButton text="Comprar agora" :on-click="() => { }" />
    </RouterLink>
  </div>
</template>
