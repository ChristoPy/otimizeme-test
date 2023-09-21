<script setup lang="ts">
import Card from '@/components/Card.vue'
import CreditCardPaymentForm from './CreditCardPaymentForm.vue';
import PaymentMethodOptions from './PaymentMethodOptions.vue';
import SecurityNotice from './SecurityNotice.vue';
</script>

<template>
  <Card>
    <PaymentMethodOptions />
    <CreditCardPaymentForm v-if="$store.getters['checkout/paymentMethod'] === 'credit-card'" />
    <SecurityNotice />
  </Card>
</template>
