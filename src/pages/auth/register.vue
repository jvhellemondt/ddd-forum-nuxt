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
const snackbar = useSnackbar()

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
    snackbar.add({
      type: 'error',
      text: errorMessage
    })
    return;
  }
  spinner.toggle(true);
  try {
    await api.register(input)
    userStore.setUser(input);
    spinner.toggle(false);
    snackbar.add({
      type: 'success',
      text: 'You have been registered 🚀.'
    })
    await new Promise(resolve => setTimeout(resolve, 1000))
    snackbar.add({
      type: 'info',
      text: 'Redirecting to the homepage in 2 seconds.',
      dense: true,
      duration: 2000
    })
    await new Promise(resolve => setTimeout(resolve, 2000))
    router.push('/');
  }
  catch (err) {
    spinner.toggle(false);
    const { data } = err
    snackbar.add({
      title: data.error.message,
      type: 'error',
      text: 'Something went wrong. Please try again.'
    })
  }
}
</script>
