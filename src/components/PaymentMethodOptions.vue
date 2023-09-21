<script setup lang="ts">
import store from '@/store';
import cardImg from '@/assets/credit-card.svg'
import pixImg from '@/assets/br-pix.svg'
import boletoImg from '@/assets/br-boleto.svg'

function setPaymentMethod(type: string) {
  store.dispatch('checkout/setPaymentMethod', type)
}

const methods = [
  {
    name: 'credit-card',
    label: 'Cartão de Crédito',
    img: cardImg
  },
  {
    name: 'br-pix',
    label: 'Pix',
    img: pixImg
  },
  {
    name: 'br-boleto',
    label: 'Boleto',
    img: boletoImg
  }
]
</script>

<template>
  <div>
    <div class="flex items-center justify-center gap-8 mb-12">
      <div v-for="method in methods"
        class="p-4 bg-white rounded-xl flex flex-col justify-center items-center gap-2 border cursor-pointer w-1/3"
        :class="{ 'border-gray-300': $store.getters['checkout/paymentMethod'] !== method.name, 'border-gray-500': $store.getters['checkout/paymentMethod'] === method.name, 'hover:border-gray-500': $store.getters['checkout/paymentMethod'] !== method.name }"
        @click="() => setPaymentMethod(method.name)">
        <img :src="method.img" />
        <b class="font-medium">{{ method.label }}</b>
      </div>
    </div>
  </div>
</template>

