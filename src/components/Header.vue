<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue'
import ShoppingCartButton from '@/components/ShoppingCartButton.vue'
</script>

<template>
  <header class="fixed w-full z-30 top-0 py-1 bg-white">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
      <AppLogo />
      <ShoppingCartButton />
    </div>
  </header>
</template>
