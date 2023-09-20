<script setup lang="ts">
import { ref } from 'vue';
import { STATES } from '@/constants'
import Dropdown from './Dropdown.vue';
import type { State } from '@/constants'

const dropdownOptions = ref(STATES);
let selectedValue = ref<State>(STATES[0]);

const handleDropdownChange = (value: State) => {
  selectedValue.value = value;
};
</script>

<template>
  <Dropdown id="state" label="Estado" :placeholder="selectedValue.name" :options="dropdownOptions"
    :onChange="handleDropdownChange" />
</template>
