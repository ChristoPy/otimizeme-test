<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue'
import MaskedInput from '@/components/MaskedInput.vue';
import { onMounted } from 'vue';
import InstallmentsDropdown from './InstallmentsDropdown.vue';

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
</script>

<template>
  <div class="flex gap-4">
    <form id="form">
      <BaseInput id="cardNumber" label="Número do cartão" placeholder="Digite somente os números" type="tel" />
      <BaseInput id="name" label="Titular do cartão" placeholder="Digite o nome impresso no cartão" type="email" />
      <MaskedInput id="taxId" label="CPF/CNPJ do titular" placeholder="Para a emissão da nota fisal" type="tel"
        :mask="['###.###.###-##', '##.###.###/####-##']" :maxLength="18" />

      <div class="flex gap-4">
        <BaseInput id="expiry" label="Validade" placeholder="01/27" type="tel" />
        <BaseInput id="cvv" label="CVV" placeholder="CVV" type="tel" />
      </div>
      <InstallmentsDropdown />
    </form>
    <div class="card-wrapper"></div>
  </div>
</template>
