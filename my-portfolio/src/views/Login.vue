// Example: src/views/Login.vue

<template>
  <div>
    <input v-model="email" placeholder="Email">
    <input v-model="password" placeholder="Password" type="password">
    <button @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { auth } from '@/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
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
};
</script>
