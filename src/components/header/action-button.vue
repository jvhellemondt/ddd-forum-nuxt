<template>
  <div id="header-action-button">
    <div
      v-if="user"
      class="flex flex-col gap-2"
    >
      <div class="flex gap-1 items-end">
        <span class="text-sm font-italic">Hi</span><span>{{ user.username }}</span>
      </div>
      <button
        class="text-purple-400 hover:text-purple-200 font-semibold underline underline-offset-2 decoration-wavy decoration-purple-500 hover:decoration-purple-300 transition duration-200 ease-in-out"
      >
        logout
      </button>
    </div>
    <NuxtLink
      v-else
      to="/auth/register"
      class="bg-gradient-to-r from-green-500 to-green-600 text-black font-bold py-3 px-6 rounded-md hover:from-green-500 hover:to-green-700 transition duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2"
    >
      Join
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  user: {
    username: string
  }
}>()
</script>
