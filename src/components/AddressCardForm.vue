<script setup lang="ts">
import { reactive, watch, nextTick } from 'vue';

import maybeGetZipCode from '@/services/viacep';

import Card from '@/components/Card.vue';
import BaseInput from '@/components/BaseInput.vue';
import MaskedInput from '@/components/MaskedInput.vue';
import StatesDropdown from './StatesDropdown.vue';

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  zipCode: '',
  address: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: 'AC',
});

watch(() => formData.zipCode, async () => {
  if (formData.zipCode.length !== 9) return

  const result = await maybeGetZipCode(formData.zipCode)
  if (!result) return

  formData.city = result.city
  formData.state = result.state

  if (result.address) {
    formData.address = result.address
  }
  if (result.complement) {
    formData.complement = result.complement
  }
  if (result.neighborhood) {
    formData.neighborhood = result.neighborhood
  }
})
</script>

<template>
  <Card class="mb-8">
    <BaseInput id="name" label="Nome completo" placeholder="Digite seu nome completo" v-model="formData.name" />
    <BaseInput id="email" label="E-mail" placeholder="Digite seu e-mail" type="email" v-model="formData.email" />
    <div class="flex gap-4">
      <MaskedInput id="phone" label="Telefone" placeholder="(00) x0000-0000" type="tel" mask="(##) #####-####"
        v-model="formData.phone" />
      <MaskedInput id="zipCode" label="CEP" placeholder="Digite seu CEP" type="tel" mask="#####-###"
        v-model="formData.zipCode" />
    </div>
    <BaseInput id="address" label="Endereço" placeholder="Digite seu endereço completo" v-model="formData.address" />
    <div class="flex gap-4">
      <BaseInput id="number" label="Número" placeholder="Número" type="tel" v-model="formData.number" />
      <BaseInput id="complement" label="Complemento" placeholder="Digite seu complemento"
        v-model="formData.complement" />
    </div>
    <BaseInput id="neighborhood" label="Bairro" placeholder="Digite seu bairro" v-model="formData.neighborhood" />
    <div class="flex gap-4">
      <BaseInput id="city" label="Cidade" placeholder="Digite sua cidade" v-model="formData.city" />
      <StatesDropdown v-model="formData.state" />
    </div>
  </Card>
</template>
