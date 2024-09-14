<!-- src/views/Contact.vue -->
<template>
    <div class="contact bg-gray-50 min-h-screen py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
        <p class="text-lg text-gray-700 mb-6">
          Feel free to reach out via email or through the form below. I look forward to connecting with you!
        </p>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <input
            v-model="name"
            type="text"
            placeholder="Your Name"
            class="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            v-model="email"
            type="email"
            placeholder="Your Email"
            class="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            v-model="message"
            placeholder="Your Message"
            class="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            class="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
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
  