<script setup lang="ts">
  const {data: jobs} = await useFetch('https://api.nuxt.com/jobs')

  const {data} = await useFetch('/api/store')

  prerenderRoutes(`/api/store`)

  const {products} = data.value
</script>

<template>
  <div>
    <p>Total products: {{ products.length }}</p>
    <p>Total jobs: {{ jobs.length }}</p>
  </div>
</template>

<style scoped></style>
