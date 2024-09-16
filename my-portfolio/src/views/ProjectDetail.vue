<!-- src/views/ProjectDetail.vue -->
<template>
    <div class="project-detail bg-gray-50 min-h-screen py-10">
      <div class="max-w-4xl mx-auto">
        <!-- Check if project is available before accessing its properties -->
        <h2 v-if="project" class="text-4xl font-bold text-center text-gray-800 mb-6">{{ project.title }}</h2>
        <p v-if="project" class="text-center text-gray-500 mb-2">Date: {{ formattedDate }}</p>
  
        <!-- Image Gallery -->
        <div v-if="project && project.images && project.images.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <img
            v-for="(image, index) in project.images"
            :key="index"
            :src="image"
            @click="openImageModal(image)"
            alt="Project Image"
            class="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition duration-200"
          />
        </div>
  
        <!-- Longer Description -->
        <div v-if="project" class="mb-8 text-lg text-gray-700">
          {{ project.longDescription }}
        </div>
  
        <!-- Image Modal -->
        <div v-if="selectedImage" @click="closeImageModal" class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <img :src="selectedImage" alt="Selected Image" class="max-w-full max-h-full" />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, computed } from 'vue';
  import { useMainStore } from '@/store/mainStore';
  import { useRoute } from 'vue-router';
  
  // Define the type for a Project
  interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    date: string;
    images: string[];
  }
  
  export default defineComponent({
    name: 'ProjectDetail',
    setup() {
      const store = useMainStore();
      const route = useRoute();
      const project = ref<Project | null>(null); // Define project as Project type or null
      const selectedImage = ref<string | null>(null); // State for selected image in modal
  
      // Get the project ID from the route params
      const projectId = route.params.id as string;
  
      // Fetch the project by ID
      onMounted(() => {
        const foundProject = store.projects.find((p) => p.id === projectId);
        if (foundProject) {
          project.value = foundProject as Project; // Use type assertion to assure TypeScript
        }
      });
  
      // Computed property to format the project date
      const formattedDate = computed(() => {
        if (project.value && project.value.date) {
          const date = new Date(project.value.date);
          return date.toLocaleDateString(); // Format the date to a readable format
        }
        return '';
      });
  
      // Open the image in a modal
      const openImageModal = (image: string) => {
        selectedImage.value = image;
      };
  
      // Close the image modal
      const closeImageModal = () => {
        selectedImage.value = null;
      };
  
      return {
        project,
        formattedDate,
        selectedImage,
        openImageModal,
        closeImageModal,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Styles for modal, images, and overall layout */
  .project-detail img {
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
  }
  .project-detail img:hover {
    opacity: 0.8;
  }
  </style>
  