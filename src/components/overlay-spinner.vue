<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50 z-50">
    <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    required: true
  }
});
</script>
