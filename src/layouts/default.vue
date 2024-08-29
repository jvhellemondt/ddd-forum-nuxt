<template>
  <div>
    <OverlaySpinner :show="spinner.isActive" />
    <HeaderContainer />
    <ContentContainer class="flex flex-col m-8">
      <NuxtPage />
    </ContentContainer>
  </div>
</template>

<script setup lang="ts">
const spinner = useSpinner()
</script>
