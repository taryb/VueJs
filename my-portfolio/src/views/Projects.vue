<!-- src/views/Projects.vue -->
<template>
    <div class="projects bg-gray-50 min-h-screen py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold text-center text-gray-800 mb-10">My Projects</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Card -->
          <div
            v-for="project in store.projects"
            :key="project.id"
            class="project-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <!-- Project Image -->
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover"
            />
            <!-- Project Content -->
            <div class="p-6">
              <h3 class="text-2xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <a href="#" class="text-blue-600 hover:underline font-semibold">View Details &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useMainStore } from '@/store/mainStore'; // Import the store
  
  export default defineComponent({
    name: 'Projects',
    setup() {
      const store = useMainStore(); // Use the store
      return { store };
    },
  });
  </script>
  