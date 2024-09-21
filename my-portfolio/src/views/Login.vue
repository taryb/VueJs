<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-900">
    <div class="max-w-md w-full space-y-8 p-6 bg-gray-800 rounded-lg shadow-2xl">
      <h2 class="mt-6 text-center text-4xl font-bold text-teal-400">Login</h2>
      <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-4 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-4 border border-gray-700 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
        <button
          type="submit"
          class="w-full bg-teal-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 transform hover:scale-105"
        >
          Login
        </button>
        <p v-if="loginError" class="text-red-500 mt-4">{{ loginError }}</p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { signInUser } from '@/services/auth'; // Ensure correct import

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const loginError = ref('');

    const handleLogin = async () => {
      try {
        // Attempt to sign in with the provided credentials
        await signInUser(email.value, password.value);
        window.location.href = '/'; // Redirect to home after login
      } catch (error) {
        loginError.value = 'Failed to login. Please try again.';
      }
    };

    return { email, password, loginError, handleLogin };
  },
});
</script>

<style scoped>
/* Custom styles */
input::placeholder {
  color: #9ca3af; /* Lighter placeholder for contrast */
}

input:focus {
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.5); /* Teal focus ring */
}
</style>
