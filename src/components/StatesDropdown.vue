<script setup lang="ts">
import type { DropdownOption } from '@/types/shared'
import { ref, watch } from 'vue';
import { STATES } from '@/constants'

import Dropdown from './Dropdown.vue';

const props = defineProps({
  value: String,
});

const dropdownOptions = ref(STATES);
let internalValue = ref<DropdownOption>(STATES[0]);
const emit = defineEmits(['input']);

watch(() => props.value, () => {
  internalValue.value = dropdownOptions.value.find(({ id }) => id === props.value)!
})

function emitInput() {
  emit('input', internalValue.value.id);
}
</script>

<template>
  <Dropdown id="state" label="Estado" :placeholder="internalValue.name" :options="dropdownOptions" v-model="internalValue"
    @input="emitInput" />
</template>
