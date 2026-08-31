<script setup lang="ts">
useHead({
  title: 'Në ndërtim',
  meta: [{ name: 'robots', content: 'noindex' }]
})
</script>

<template>
  <main class="wrap">
    <h1>Faqja është në ndërtim</h1>
    <p>Do të kthehemi së shpejti.</p>
  </main>
</template>

<style scoped>
.wrap {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: system-ui, sans-serif;
  gap: 0.5rem;
}
</style>
