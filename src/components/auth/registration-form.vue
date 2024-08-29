<template>
  <div class="flex flex-col w-full gap-4">
    <input v-model="formDetails.email"
      class="block p-2.5 rounded border-3 border-black w-full text-black transition-all text-base box-border"
      type="email" placeholder="email">
    <input v-model="formDetails.username"
      class="block p-2.5 rounded border-3 border-black w-full text-black transition-all text-base box-border"
      type="text" placeholder="username">
    <input v-model="formDetails.firstName"
      class="block p-2.5 rounded border-3 border-black w-full text-black transition-all text-base box-border"
      type="text" placeholder="first name">
    <input v-model="formDetails.lastName"
      class="block p-2.5 rounded border-3 border-black w-full text-black transition-all text-base box-border"
      type="text" placeholder="last name">
    <div class="flex gap-8 flex-col">
      <button
        class="rounded-lg border border-transparent px-3 py-1.5 text-base font-medium bg-[#1a1a1a] cursor-pointer transition-colors duration-250 hover:border-gray-100 focus:outline focus:outline-4 focus:outline-webkit-focus-ring-color text-gray-100"
        type="submit" @click="handleSubmit">
        submit
      </button>
      <div class="text-gray-500 flex gap-2 flex-col">
        <div>Already have an account?</div>
        <nuxt-link class="text-blue-500" to="/auth/sign-in">
          sign in
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RegistrationInput } from '~/types/auth/register/RegistrationInput'

const emit = defineEmits(['submit'])

const formDetails = reactive<RegistrationInput>({
  email: '',
  username: '',
  firstName: '',
  lastName: '',
})

const handleSubmit = () => {
  emit('submit', formDetails)
}
</script>
