<template>
  <div class="flex flex-col max-w-3xl mx-auto w-80 gap-4">
    <div>Create Account</div>
    <auth-registration-form @submit="handleRegistrationSubmission" />
  </div>
</template>

<script setup lang="ts">
import { useUsers } from '~/stores/auth/user'
import type { RegistrationInput } from '~/types/auth/register/RegistrationInput'
import type { RegistrationValidationResult } from '~/types/auth/register/RegistrationValidationResult'

const api = useApi()
const userStore = useUsers()
const router = useRouter()
const spinner = useSpinner()

function validateRegistrationSubmission(input: RegistrationInput): RegistrationValidationResult {
  if (input.email.indexOf('@') === -1) return { success: false, errorMessage: 'Email invalid.' }
  if (input.username.length < 2 && input.username.length > 20) return { success: false, errorMessage: 'Username should be between 2 and 20 characters long.' }
  if (input.firstName.length <= 1) return { success: false, errorMessage: 'Is your first name really (less then) one character? Please contact us!' }
  if (input.lastName.length <= 1) return { success: false, errorMessage: 'Is your last name really (less then) one character? Please contact us!' }
  return { success: true }
}

async function handleRegistrationSubmission(input: RegistrationInput): Promise<void> {
  const { success, errorMessage } = validateRegistrationSubmission(input);
  if (!success) {
    console.error(errorMessage);
    return;
  }
  spinner.toggle(true);
  try {
    await api.register(input);
    await new Promise(resolve => setTimeout(resolve, 3000));
    userStore.setUser(input);
    router.push('/');
  }
  catch (e) {
    console.error(e);
  }
  finally {
    spinner.toggle(false);
  }
}
</script>
