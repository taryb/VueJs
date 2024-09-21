<template>
  <div class="contact bg-gray-900 min-h-screen py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl font-bold text-teal-400 mb-4">Contact Me</h1>
      <p class="text-lg text-gray-300 mb-6">
        (Under construction) Feel free to reach out via email or through the form below. I look forward to connecting with you!
      </p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input
          v-model="name"
          type="text"
          placeholder="Your Name"
          class="w-full p-3 border border-gray-600 rounded bg-gray-800 text-white"
          required
        />
        <input
          v-model="email"
          type="email"
          placeholder="Your Email"
          class="w-full p-3 border border-gray-600 rounded bg-gray-800 text-white"
          required
        />
        <textarea
          v-model="message"
          placeholder="Your Message"
          class="w-full p-3 border border-gray-600 rounded bg-gray-800 text-white"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          class="bg-teal-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Contact',
  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');

    const handleSubmit = () => {
      // Handle the form submission (e.g., send an email or use an API)
      alert(`Message sent! Name: ${name.value}, Email: ${email.value}, Message: ${message.value}`);
      // Reset form fields
      name.value = '';
      email.value = '';
      message.value = '';
    };

    return {
      name,
      email,
      message,
      handleSubmit
    };
  }
});
</script>

<style scoped>
/* Custom styles for form and button */
</style>
