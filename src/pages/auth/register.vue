<template>
  <div class="flex flex-col max-w-3xl mx-auto w-80 gap-4">
    <div>Create Account</div>
    <auth-registration-form @submit="handleRegistrationSubmission" />
  </div>
</template>

<script setup lang="ts">
import type { RegistrationInput } from '~/types/auth/register/RegistrationInput'
import type { RegistrationValidationResult } from '~/types/auth/register/RegistrationValidationResult'

function handleRegistrationSubmission(input: RegistrationInput): RegistrationValidationResult {
  if (input.email.indexOf('@') === -1) return { success: false, errorMessage: 'Email invalid.' }
  if (input.username.length < 2 && input.username.length > 20) return { success: false, errorMessage: 'Username should be between 2 and 20 characters long.' }
  if (input.firstName.length <= 1) return { success: false, errorMessage: 'Is your first name really one character? Please contact us!' }
  if (input.lastName.length <= 1) return { success: false, errorMessage: 'Is your last name really one character? Please contact us!' }
  return { success: true }
}
</script>
