<script setup lang="ts">
import Card from '@/components/Card.vue'
import CreditCardPaymentForm from './CreditCardPaymentForm.vue';
import SecurityNotice from './SecurityNotice.vue';
</script>

<template>
  <Card>
    <CreditCardPaymentForm />
    <SecurityNotice />
  </Card>
</template>
