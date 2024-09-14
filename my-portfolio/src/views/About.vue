<!-- src/views/About.vue -->
<template>
    <div class="about bg-white min-h-screen py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p class="text-lg text-gray-700 mb-6">
          Hi, I'm [Your Name], a frontend developer with a passion for creating
          stunning and responsive web applications. I specialize in Vue.js,
          TypeScript, and Tailwind CSS, and I love to explore new technologies and
          frameworks.
        </p>
        <div class="mt-8 flex flex-col md:flex-row justify-center gap-8">
          <!-- Skill Card 1 -->
          <div class="bg-gray-100 rounded-lg shadow p-6 w-full md:w-1/3">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">Frontend Development</h2>
            <p class="text-gray-600">Proficient in HTML, CSS, JavaScript, Vue.js, and React.</p>
          </div>
          <!-- Skill Card 2 -->
          <div class="bg-gray-100 rounded-lg shadow p-6 w-full md:w-1/3">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">Backend Development</h2>
            <p class="text-gray-600">Experience with Node.js, Express, and REST APIs.</p>
          </div>
          <!-- Skill Card 3 -->
          <div class="bg-gray-100 rounded-lg shadow p-6 w-full md:w-1/3">
            <h2 class="text-2xl font-semibold text-gray-800 mb-2">Tools & Platforms</h2>
            <p class="text-gray-600">Git, GitHub, Docker, CI/CD, and cloud services like AWS.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'About'
  });
  </script>
  