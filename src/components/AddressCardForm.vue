<script setup lang="ts">
import Card from '@/components/Card.vue';
import BaseInput from '@/components/BaseInput.vue';
</script>

<template>
  <Card class="mb-8">
    <BaseInput id="name" label="Nome completo" placeholder="Digite seu nome completo" />
    <BaseInput id="email" label="E-mail" placeholder="Digite seu e-mail" type="email" />
    <div class="flex gap-4">
      <BaseInput id="phone" label="Telefone" placeholder="(00) x0000-0000" type="tel" />
      <BaseInput id="zipCode" label="CEP" placeholder="Digite seu CEP" type="tel" />
    </div>
    <BaseInput id="address" label="Endereço" placeholder="Digite seu endereço completo" />
    <div class="flex gap-4">
      <BaseInput id="number" label="Número" placeholder="Número" type="tel" />
      <BaseInput id="complement" label="Complemento" placeholder="Digite seu complemento" />
    </div>
    <BaseInput id="neighborhood" label="Bairro" placeholder="Digite seu bairro" />
    <div class="flex gap-4">
      <BaseInput id="city" label="Cidade" placeholder="Digite sua cidade" />
      <BaseInput id="state" label="Estado" placeholder="Digite seu estado" />
    </div>
  </Card>
</template>
