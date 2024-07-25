<script setup lang="ts"></script>

<template>
  <div>
    <!-- WORKS -->
    <HotDeals class="mt-8" />
    <!-- DOESN'T WORK -->
    <v-main class="py-4">
      <HotDeals class="mt-8" />
    </v-main>
  </div>
</template>

<style scoped></style>
