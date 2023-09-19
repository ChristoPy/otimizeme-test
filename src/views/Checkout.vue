<script setup lang="ts">
import CartItem from '@/components/CartItem.vue';
import Card from '@/components/Card.vue';
import AddressCardForm from '@/components/AddressCardForm.vue';
import PaymentCardForm from '@/components/PaymentCardForm.vue';
</script>

<template>
  <section class="py-8 mt-12 px-4">
    <div class="container mx-auto max-w-5xl">
      <h1 class="font-bold text-4xl my-4 py-8">Finalizar Compra</h1>

      <Card class="mb-8">
        <CartItem v-for="item of $store.state.cart.all" :key="item.product._id" :item="item" :allowChanges="false" />
      </Card>

      <AddressCardForm />
      <PaymentCardForm />
    </div>
  </section>
</template>
