<template>
  <header
    id="header"
    class="flex justify-center gap-8 ma-8 w-full"
  >
    <HeaderLogo />
    <HeaderTitleAndSubmission />
    <HeaderActionButton
      v-if="shouldShowActionButton"
      :user="store.user"
    />
  </header>
</template>

<script setup lang="ts">
import { useUsers } from '~/stores/auth/user';

const route = useRoute()
const shouldShowActionButton = computed(() => {
  return route.path !== '/auth/register'
})

const store = useUsers();
</script>
