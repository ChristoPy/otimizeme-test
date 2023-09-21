<script setup lang="ts">
import { ref, watch } from 'vue';
import CartItem from './CartItem.vue';
import GenericButton from './GenericButton.vue';
import MaskedInput from './MaskedInput.vue';
import store from '@/store';

const taxId = ref('')

watch(taxId, () => {
  store.dispatch('checkout/setTaxId', taxId.value)
})
</script>

<template>
  <div class="mt-8">
    <h3 class="font-medium">Detalhes da compra:</h3>

    <CartItem v-for="item of $store.state.cart.all" :key="item.product._id" :item="item" :allowChanges="false" />

    <div v-if="$store.getters['checkout/paymentMethod'] === 'credit-card'" class="my-4 flex items-center gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path
          d="M2 10.3333H22V8.53325C22 7.41315 22 6.8531 21.782 6.42527C21.5903 6.04895 21.2843 5.74299 20.908 5.55124C20.4802 5.33325 19.9201 5.33325 18.8 5.33325H5.2C4.0799 5.33325 3.51984 5.33325 3.09202 5.55124C2.7157 5.74299 2.40973 6.04895 2.21799 6.42527C2 6.85309 2 7.41315 2 8.53325V16.1333C2 17.2534 2 17.8134 2.21799 18.2412C2.40973 18.6176 2.71569 18.9235 3.09202 19.1153C3.51984 19.3333 4.0799 19.3333 5.2 19.3333H11M14.5 21.3333L16.525 20.9283C16.7015 20.8929 16.7898 20.8753 16.8721 20.843C16.9452 20.8143 17.0147 20.7772 17.079 20.7323C17.1516 20.6817 17.2152 20.618 17.3426 20.4907L21.5 16.3333C22.0523 15.781 22.0523 14.8855 21.5 14.3333C20.9477 13.781 20.0523 13.781 19.5 14.3333L15.3426 18.4907C15.2152 18.618 15.1516 18.6817 15.101 18.7542C15.0561 18.8186 15.0189 18.888 14.9903 18.9611C14.958 19.0434 14.9403 19.1317 14.905 19.3083L14.5 21.3333Z"
          stroke="#CED4DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      Essa cobrança aparecerá na sua fatura como: PAYT*NomeDoProduto
    </div>
    <div v-else class="my-4 flex items-center gap-4">
      <MaskedInput id="taxId" label="CPF/CNPJ do titular" placeholder="Para a emissão da nota fisal" type="tel"
        :mask="['###.###.###-##', '##.###.###/####-##']" :maxLength="18" v-model="taxId" />
    </div>

    <GenericButton full text="Comprar Agora" />
  </div>
</template>
