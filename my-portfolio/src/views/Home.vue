<!-- src/views/Home.vue -->
<template>
    <div class="home bg-gray-50 min-h-screen py-10">
      <!-- Hero Section -->
      <section class="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4 text-center">
        <h1 class="text-5xl font-extrabold mb-4">Welcome to My Portfolio</h1>
        <p class="text-xl mb-6">Hi, I'm Tary, a passionate Frontend Developer.</p>
        <div class="flex justify-center space-x-4">
          <a
            href="#projects"
            class="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >View My Work</a
          >
          <a
            href="#contact"
            class="bg-transparent border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
            >Contact Me</a
          >
        </div>
      </section>
  
      <!-- About Section -->
      <section id="about" class="py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p class="text-lg text-gray-700 mb-6">
            I'm a frontend developer with a passion for creating stunning and responsive web applications. I specialize in
            Vue.js, TypeScript, and Tailwind CSS, and love to explore new technologies and frameworks.
          </p>
        </div>
      </section>
  
      <!-- Projects Section -->
      <section id="projects" class="py-16 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-10">My Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project 1 -->
            <div class="project-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <img src="https://via.placeholder.com/400x200" alt="Project 1" class="rounded-md mb-4" />
              <h3 class="text-2xl font-semibold mb-2">Project 1</h3>
              <p class="text-gray-600 mb-4">A description of the project, highlighting key features and technologies used.</p>
              <a
                href="#"
                class="text-blue-600 hover:underline font-semibold"
                >View Details &rarr;</a
              >
            </div>
  
            <!-- Project 2 -->
            <div class="project-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <img src="https://via.placeholder.com/400x200" alt="Project 2" class="rounded-md mb-4" />
              <h3 class="text-2xl font-semibold mb-2">Project 2</h3>
              <p class="text-gray-600 mb-4">A description of the project, highlighting key features and technologies used.</p>
              <a
                href="#"
                class="text-blue-600 hover:underline font-semibold"
                >View Details &rarr;</a
              >
            </div>
  
            <!-- Project 3 -->
            <div class="project-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <img src="https://via.placeholder.com/400x200" alt="Project 3" class="rounded-md mb-4" />
              <h3 class="text-2xl font-semibold mb-2">Project 3</h3>
              <p class="text-gray-600 mb-4">A description of the project, highlighting key features and technologies used.</p>
              <a
                href="#"
                class="text-blue-600 hover:underline font-semibold"
                >View Details &rarr;</a
              >
            </div>
          </div>
        </div>
      </section>
  
      <!-- Contact Section -->
      <section id="contact" class="py-16 px-4 bg-gray-50">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
          <p class="text-lg text-gray-700 mb-6">Feel free to reach out via email or through the form below.</p>
          <a
            href="mailto:youremail@example.com"
            class="bg-blue-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >Send an Email</a
          >
        </div>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Home'
  });
  </script>
  
  <style>
  /* Add custom styles here if needed */
  </style>
  