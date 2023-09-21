<script setup lang="ts">
import type { DropdownOption } from '@/types/shared'
import { formatMoney } from '@/utils/money'

import { ref } from 'vue';
import store from '@/store'

import Dropdown from './Dropdown.vue';

const numberOfInstallments = 10;
const totalPrice = store.getters['checkout/totalPrice'];

const dropdownOptions = ref<DropdownOption[]>(
  Array.from({ length: numberOfInstallments }, (_, i) => ({
    id: `${i + 1}`,
    name: `${i + 1}x de ${formatMoney(totalPrice / (i + 1))}`
  }))
);

let internalValue = ref<DropdownOption>(dropdownOptions.value[0]);
</script>

<template>
  <Dropdown id="installments" label="Parcelas" :placeholder="internalValue.name" :options="dropdownOptions"
    v-model="internalValue" />
</template>
