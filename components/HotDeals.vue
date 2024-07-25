<script setup lang="ts">
  // const {data: jobs, error} = await useFetch('https://api.nuxt.com/jobs')

  const {data, error} = await useFetch('/api/store', {
    key: 'articles',
    server: true,
  })

  prerenderRoutes(`/api/store`)

  const {products} = data.value
</script>
<template>
  <div>
    <span>Total items: {{ products.length }}</span>
  </div>
</template>
<style scoped></style>
