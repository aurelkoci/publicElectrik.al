<script setup lang="ts">
const props = defineProps<{
  error: { statusCode?: number; statusMessage?: string; message?: string }
}>()

const statusCode = props.error?.statusCode ?? 500
const isGone = statusCode === 410
</script>

<template>
  <main class="wrap">
    <template v-if="isGone">
      <h1>410</h1>
      <p>Gone — ky përmbajtje nuk ekziston më.</p>
    </template>
    <template v-else>
      <h1>{{ statusCode }}</h1>
      <p>{{ error?.statusMessage || 'Ka ndodhur një gabim.' }}</p>
    </template>
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
