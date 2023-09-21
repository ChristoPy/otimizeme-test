<script setup lang="ts">
import Card from '@/components/Card.vue'
import CreditCardPaymentForm from './CreditCardPaymentForm.vue';
import PaymentMethodOptions from './PaymentMethodOptions.vue';
import SecurityNotice from './SecurityNotice.vue';
import PixPaymentForm from './PixPaymentForm.vue';
import BoletoPaymentForm from './BoletoPaymentForm.vue';
</script>

<template>
  <Card>
    <PaymentMethodOptions />
    <CreditCardPaymentForm v-if="$store.getters['checkout/paymentMethod'] === 'credit-card'" />
    <PixPaymentForm v-if="$store.getters['checkout/paymentMethod'] === 'br-pix'" />
    <BoletoPaymentForm v-if="$store.getters['checkout/paymentMethod'] === 'br-boleto'" />
    <SecurityNotice />
  </Card>
</template>
