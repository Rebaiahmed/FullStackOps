<script setup lang="ts">
import NxWelcome from '../app/NxWelcome.vue';

// unused variable, should cause error due to no-unused-vars
const unusedVar = 123;

// explicit emits example (must declare emits for this to work)
defineEmits<{ (e: 'update'): void }>();
</script>

<template>
  <main>
    <!--
      - Max attributes per line is 3 for single line
      - Using double quotes only
    -->
    <NxWelcome title="my-vue-app" subtitle="Welcome" :count="1" />
  </main>
</template>
