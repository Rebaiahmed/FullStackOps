<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import Navbar from '../components/layouts/Navbar.vue'
  import Footer from '../components/layouts/footer.vue';
</script>

<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-grow-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>




<style scoped lang="scss">
</style>
