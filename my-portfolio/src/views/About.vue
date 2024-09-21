<template>
  <div class="about bg-gray-900 min-h-screen py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl font-bold text-teal-400 mb-4">About Me</h1>
      <p class="text-lg text-gray-300 mb-6">
        Hi, I'm Tary Bounavong, an Optics Engineer and a full-stack developer with a passion for building efficient, scalable solutions.
        My expertise spans frontend and backend development, as well as managing complex data pipelines and deployments.
        Here are some of the key areas I specialize in:
      </p>

      <!-- Skill Cards Section -->
      <div class="mt-8 flex flex-col md:flex-row justify-center gap-8">
        <!-- Skill Card 1 -->
        <div class="bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 class="text-2xl font-semibold text-teal-400 mb-2">Programming & Scripting</h2>
          <ul class="list-disc list-inside text-gray-300">
            <li>Python</li>
            <li>Numpy</li>
            <li>Pandas</li>
            <li>OpenCV</li>
            <li>PyQt5</li>
            <li>ETL Processes</li>
          </ul>
        </div>

        <!-- Skill Card 2 -->
        <div class="bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 class="text-2xl font-semibold text-teal-400 mb-2">Frontend Development</h2>
          <ul class="list-disc list-inside text-gray-300">
            <li>Vue.js</li>
            <li>Tailwind CSS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <!-- Skill Card 3 -->
        <div class="bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 class="text-2xl font-semibold text-teal-400 mb-2">Backend Development & Databases</h2>
          <ul class="list-disc list-inside text-gray-300">
            <li>Django</li>
            <li>Firebase</li>
            <li>SQLite</li>
            <li>MSSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </div>

      <!-- Additional Skills Section -->
      <div class="mt-8 flex flex-col md:flex-row justify-center gap-8">
        <!-- Skill Card 4 -->
        <div class="bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 class="text-2xl font-semibold text-teal-400 mb-2">Tools & Platforms</h2>
          <ul class="list-disc list-inside text-gray-300">
            <li>Docker</li>
            <li>VSCode</li>
            <li>Git</li>
            <li>DBeaver</li>
            <li>SSMS</li>
            <li>ZSH & Bash</li>
          </ul>
        </div>

        <!-- Skill Card 5 -->
        <div class="bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-1/3 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 class="text-2xl font-semibold text-teal-400 mb-2">CI/CD & Cloud Services</h2>
          <ul class="list-disc list-inside text-gray-300">
            <li>CI/CD Pipelines</li>
            <li>Cloud Platforms (AWS)</li>
            <li>Version Control</li>
            <li>Continuous Integration/Delivery</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
});
</script>

<style scoped>
/* Custom styles for card hover effects and responsiveness */
</style>
