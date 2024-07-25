<template>
  <div class="p-4">
    <nav class="space-x-4">
      <NuxtLink class="underline" to="/">Home</NuxtLink>
      <NuxtLink class="underline" to="products">Products</NuxtLink>
    </nav>
    <main class="py-4">
      <slot />
    </main>
  </div>
</template>
