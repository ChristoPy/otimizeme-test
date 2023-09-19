<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <div id="app">
    <Header />

    <section class="container mx-auto mt-12 pt-8 pb-12">
      <router-view />
    </section>
  </div>
</template>

