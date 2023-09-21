<script setup lang="ts">
import type { DropdownOption } from '@/types/shared'
import { formatMoney } from '@/utils/money'

import { ref } from 'vue';
import store from '@/store'

const numberOfInstallments = 10;
const totalPrice = store.getters['checkout/totalPrice'];

const dropdownOptions: DropdownOption[] = Array.from({ length: numberOfInstallments }, (_, i) => ({
  id: `${i + 1}`,
  name: `${i + 1}x de ${formatMoney(totalPrice / (i + 1))}`
}));

let internalValue = ref<DropdownOption>(dropdownOptions[0]);

function emitInput() {
  store.dispatch('checkout/setPaymentDetails', { installments: internalValue.value })
}
</script>

<template>
  <div class="w-full">
    <label class="block font-medium mb-2 w-full" for="installments">Parcelas</label>
    <select id="installments" class="border border-gray-300 hover:border-gray-500 rounded h-10 px-2 mb-4 w-full"
      @change="emitInput" v-model="//@ts-ignore
        internalValue.id">
      <option v-for="(option, index) in dropdownOptions" :key="option.id" :value="option.id">{{ option.name }}</option>
    </select>
  </div>
</template>
