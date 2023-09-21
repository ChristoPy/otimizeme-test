<script setup lang="ts">
import AddressCardForm from '@/components/AddressCardForm.vue';
import PaymentCardForm from '@/components/PaymentCardForm.vue';
</script>

<template>
  <section class="py-8 mt-12 px-4">
    <div class="container mx-auto max-w-5xl">
      <h1 class="font-bold text-4xl my-4 py-8">Finalizar Compra</h1>

      <AddressCardForm />
      <PaymentCardForm />

      <div class="flex items-center justify-center gap-6 pt-8">
        <a href="#" class="text-indigo-500">Política de Privacidade</a>
        <div>Esta compra será processada pela <b>Pay T</b></div>
      </div>
    </div>
  </section>
</template>
