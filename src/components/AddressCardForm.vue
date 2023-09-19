<script setup lang="ts">
import Card from '@/components/Card.vue';
import BaseInput from '@/components/BaseInput.vue';
import MaskedInput from '@/components/MaskedInput.vue';
import { reactive } from 'vue';

// Create a reactive object to store input data
const inputData = reactive({
  name: '',
  email: '',
  phone: '',
  zipCode: '',
  address: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
});
</script>

<template>
  <Card class="mb-8">
    <BaseInput id="name" label="Nome completo" placeholder="Digite seu nome completo" v-model="inputData.name" />
    <BaseInput id="email" label="E-mail" placeholder="Digite seu e-mail" type="email" v-model="inputData.email" />
    <div class="flex gap-4">
      <MaskedInput id="phone" label="Telefone" placeholder="(00) x0000-0000" type="tel" mask="(##) #####-####"
        v-model="inputData.phone" />
      <MaskedInput id="zipCode" label="CEP" placeholder="Digite seu CEP" type="tel" mask="#####-###"
        v-model="inputData.zipCode" />
    </div>
    <BaseInput id="address" label="Endereço" placeholder="Digite seu endereço completo" v-model="inputData.address" />
    <div class="flex gap-4">
      <BaseInput id="number" label="Número" placeholder="Número" type="tel" v-model="inputData.number" />
      <BaseInput id="complement" label="Complemento" placeholder="Digite seu complemento"
        v-model="inputData.complement" />
    </div>
    <BaseInput id="neighborhood" label="Bairro" placeholder="Digite seu bairro" v-model="inputData.neighborhood" />
    <div class="flex gap-4">
      <BaseInput id="city" label="Cidade" placeholder="Digite sua cidade" v-model="inputData.city" />
      <BaseInput id="state" label="Estado" placeholder="Digite seu estado" v-model="inputData.state" />
    </div>
  </Card></template>
