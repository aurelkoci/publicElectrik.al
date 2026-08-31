<script setup lang="ts">
useHead({
  title: 'Elektrik.al — Materiale Elektrike me Shumicë e Pakicë',
  meta: [
    { name: 'robots', content: 'noindex' },
    {
      name: 'description',
      content:
        'Elektrik.al ofron materiale elektrike të të gjitha llojeve me cilësinë më të mirë, me shpërndarje në të gjithë Shqipërinë dhe jo vetëm. Faqja është në ndërtim, së shpejti online!'
    }
  ]
})
</script>

<template>
  <main class="wrap">
    <span class="badge">Në ndërtim</span>
    <h1>Elektrik.al</h1>
    <p class="tagline">
      Materiale elektrike të të gjitha llojeve, me cilësinë më të mirë.
    </p>
    <p>
      Ofrojmë shpërndarje në të gjithë Shqipërinë dhe jo vetëm.
    </p>
    <p class="notice">Së shpejti online — na ndiqni!</p>
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
  gap: 0.75rem;
  padding: 1.5rem;
}

.badge {
  padding: 0.35rem 1rem;
  border-radius: 999px;
  background: #ffe58f;
  color: #614700;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
}

.tagline {
  font-size: 1.15rem;
  font-weight: 500;
  max-width: 32rem;
}

.notice {
  margin-top: 0.5rem;
  font-weight: 600;
  color: #d97706;
}
</style>
