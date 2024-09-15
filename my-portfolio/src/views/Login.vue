<!-- src/views/Login.vue -->
<template>
    <div class="login min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-center text-3xl font-extrabold text-gray-900 mb-6">Login to Your Account</h2>
        <form class="space-y-6" @submit.prevent="login">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email" class="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                v-model="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                v-model="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
  
          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
  
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">Don't have an account? <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Sign Up</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { auth } from '@/firebaseConfig'; // Import your Firebase config
  import { signInWithEmailAndPassword } from 'firebase/auth';
  
  export default defineComponent({
    name: 'Login',
    setup() {
      const email = ref('');
      const password = ref('');
  
      const login = async () => {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          console.log('User logged in');
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };
  
      return { email, password, login };
    },
  });
  </script>
  
  <style scoped>
  /* Add any additional custom styles here if needed */
  </style>
  