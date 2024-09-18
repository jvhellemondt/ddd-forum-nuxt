<template>
  <div id="header-action-button">
    <div v-if="user" class="flex flex-col gap-2">
      <div class="flex gap-1 items-end text-sm">
        <span class="font-italic">Hi</span><span>@{{ user.username }}</span>
      </div>
      <button
        class="rounded-lg border border-transparent px-3 py-1.5 text-base font-medium bg-[#1a1a1a] cursor-pointer transition-colors duration-250 hover:border-gray-100 focus:outline focus:outline-4 focus:outline-webkit-focus-ring-color text-gray-100">
        sign out
      </button>
    </div>
    <NuxtLink v-else to="/auth/register" class="font-medium no-underline  text-blue-6  hover:text-blue-8">
      sign up!
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  user?: {
    username?: string
  }
}>()
</script>
