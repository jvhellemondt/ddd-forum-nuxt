<template>
  <NuxtLayout>
    <NuxtPage />
    <OverlaySpinner :show="spinner.isActive" />
    <NuxtSnackbar />
  </NuxtLayout>
</template>

<script setup lang="ts">
const spinner = useSpinner()
</script>
