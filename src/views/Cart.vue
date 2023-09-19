<script setup lang="ts">
import Card from '@/components/Card.vue';
import CartItem from '@/components/CartItem.vue';
import CartTotal from '@/components/CartTotal.vue';
</script>

<template>
  <section class="py-8 mt-12 px-4">
    <div class="container mx-auto max-w-5xl">
      <h1 class="font-bold text-4xl my-4 py-8">Carrinho</h1>

      <Card>
        <CartItem v-for="item of $store.state.cart.all" :key="item.product._id" :item="item" allow-changes />
        <CartTotal />
      </Card>
    </div>
  </section>
</template>
