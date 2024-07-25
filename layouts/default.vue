<script setup lang="ts">
  const route = useRoute()
  const links = reactive([
    {
      name: 'Home',
      url: '/',
      active: computed(() => route.fullPath === '/'),
    },
    {
      name: 'Products',
      url: '/products',
      active: computed(() => route.fullPath === '/products'),
    },
  ])
</script>

<template>
  <div class="p-4">
    <nav class="space-x-4">
      <NuxtLink
        v-for="link in links"
        :class="{underline: link.active}"
        :to="link.url"
        active=""
        >{{ link.name }}</NuxtLink
      >
    </nav>
    <main class="py-4">
      <slot />
    </main>
  </div>
</template>
