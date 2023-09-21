<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue'
import MaskedInput from '@/components/MaskedInput.vue';
import { onMounted, reactive, watch } from 'vue';
import InstallmentsDropdown from './InstallmentsDropdown.vue';
import store from '@/store';

const formData = reactive({
  number: '',
  holder: '',
  taxId: '',
  expiry: '',
  cvv: '',
});

// Card import moved to here, since the packae has an error
// it mutates a "global" variable that doesnt exists
// so this is a patch to make it work
onMounted(() => {
  // @ts-ignore
  window.global = window
  // @ts-ignore
  import("card").then(() => {
    // @ts-ignore
    new window.Card({
      form: "form",
      container: ".card-wrapper",
      formSelectors: {
        numberInput: "input#cardNumber",
        expiryInput: "input#expiry",
        cvcInput: "input#cvv",
        nameInput: "input#name"
      },
      width: 270,
      formatting: true,
      placeholders: {
        number: "•••• •••• •••• ••••",
        name: "Nome Completo",
        expiry: "••/••",
        cvc: "•••"
      }
    });
  })
})

watch(formData, () => {
  store.dispatch('checkout/setPaymentDetails', formData)
})
</script>

<template>
  <div class="flex gap-4">
    <div>
      <BaseInput id="cardNumber" label="Número do cartão" placeholder="Digite somente os números" type="tel"
        v-model="formData.number" />
      <BaseInput id="name" label="Titular do cartão" placeholder="Digite o nome impresso no cartão" type="name"
        v-model="formData.holder" />
      <MaskedInput id="taxId" label="CPF/CNPJ do titular" placeholder="Para a emissão da nota fisal" type="tel"
        :mask="['###.###.###-##', '##.###.###/####-##']" :maxLength="18" v-model="formData.taxId" />

      <div class="flex gap-4">
        <BaseInput id="expiry" label="Validade" placeholder="01/27" type="tel" v-model="formData.expiry" />
        <BaseInput id="cvv" label="CVV" placeholder="CVV" type="tel" v-model="formData.cvv" />
      </div>
      <InstallmentsDropdown />
    </div>
    <div class="card-wrapper"></div>
  </div>
</template>
