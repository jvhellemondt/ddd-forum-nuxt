<template>
  <header
    id="header"
    class="flex justify-center gap-8 ma-8 w-full"
  >
    <HeaderLogo />
    <HeaderTitleAndSubmission />
    <HeaderActionButton
      v-if="shouldShowActionButton"
      :user="{ username: '@john' }"
    />
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const shouldShowActionButton = computed(() => {
  return route.path !== '/join'
})
</script>
