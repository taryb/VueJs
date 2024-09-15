<!-- src/views/Login.vue -->
<template>
    <div class="min-h-screen flex justify-center items-center bg-gray-50">
      <div class="max-w-md w-full space-y-8 p-6 bg-white rounded shadow-lg">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
        <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
          <input v-model="username" placeholder="Username" class="w-full p-2 border border-gray-300 rounded" />
          <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border border-gray-300 rounded" />
          <button type="submit" class="w-full bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
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
      const username = ref('');
      const password = ref('');
      const loginError = ref('');
  
      const handleLogin = async () => {
        if (username.value === 'admin' && password.value === 'admin') {
          try {
            // Attempt to sign in with the provided credentials
            await signInUser('admin@example.com', 'admin');
            window.location.href = '/'; // Redirect to home after login
          } catch (error) {
            loginError.value = 'Failed to login. Please try again.';
          }
        } else {
          loginError.value = 'Invalid credentials. Please try again.';
        }
      };
  
      return { username, password, loginError, handleLogin };
    },
  });
  </script>
  
  <style scoped>
  /* Additional styles can go here */
  </style>
  