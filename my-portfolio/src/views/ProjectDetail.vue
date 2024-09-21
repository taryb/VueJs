<template>
  <div class="project-detail bg-gray-50 min-h-screen py-10">
    <div class="max-w-4xl mx-auto">
      <!-- Project Title and Date -->
      <h2 v-if="project" class="text-4xl font-bold text-center text-gray-800 mb-6">{{ project.title }}</h2>
      <p v-if="project" class="text-center text-gray-500 mb-2">Date: {{ formattedDate }}</p>

      <!-- Image Gallery (Carousel) -->
      <div v-if="project && project.images && project.images.length > 0" class="relative mb-8">
        <div class="overflow-hidden relative">
          <!-- Carousel Wrapper -->
          <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
            <div
              v-for="(image, index) in project.images"
              :key="index"
              class="w-full h-96 flex-shrink-0 overflow-hidden relative"
            >
              <img
                :src="image"
                alt="Project Image"
                class="w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
                @click="openImageModal(image)"
              />
            </div>
          </div>
          <!-- Left Arrow -->
          <button @click="prevImage" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg">
            &#9664;
          </button>
          <!-- Right Arrow -->
          <button @click="nextImage" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg">
            &#9654;
          </button>
        </div>
        <!-- Dots Indicator -->
        <div class="flex justify-center mt-4">
          <span
            v-for="(image, index) in project.images"
            :key="index"
            @click="setCurrentImage(index)"
            :class="{
              'bg-gray-800': currentImageIndex === index,
              'bg-gray-400': currentImageIndex !== index,
            }"
            class="w-3 h-3 mx-1 rounded-full cursor-pointer"
          ></span>
        </div>
      </div>

      <!-- Longer Description -->
      <div v-if="project" class="mb-8 text-lg text-gray-700 leading-relaxed">
        {{ project.longDescription }}
      </div>

      <!-- Image Modal with Zoom to Fit -->
      <div v-if="selectedImage" @click="closeImageModal" class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 cursor-pointer">
        <img :src="selectedImage" alt="Selected Image" class="object-contain w-full h-full max-w-screen-lg max-h-screen-lg" />
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
    const project = ref<Project | null>(null);
    const selectedImage = ref<string | null>(null);
    const currentImageIndex = ref(0);

    const projectId = route.params.id as string;

    // Fetch the project by ID and log images
    onMounted(() => {
      const foundProject = store.projects.find((p) => p.id === projectId);
      if (foundProject) {
        project.value = foundProject as Project;
        console.log(project.value.images); // Verify images are loaded
      }
    });

    // Format the project date
    const formattedDate = computed(() => {
      if (project.value && project.value.date) {
        const date = new Date(project.value.date);
        return date.toLocaleDateString();
      }
      return '';
    });

    // Open the image modal
    const openImageModal = (image: string) => {
      selectedImage.value = image;
    };

    // Close the image modal
    const closeImageModal = () => {
      selectedImage.value = null;
    };

    // Carousel previous image
    const prevImage = () => {
      currentImageIndex.value = (currentImageIndex.value - 1 + project.value!.images.length) % project.value!.images.length;
    };

    // Carousel next image
    const nextImage = () => {
      currentImageIndex.value = (currentImageIndex.value + 1) % project.value!.images.length;
    };

    // Set the current image
    const setCurrentImage = (index: number) => {
      currentImageIndex.value = index;
    };

    return {
      project,
      formattedDate,
      selectedImage,
      openImageModal,
      closeImageModal,
      currentImageIndex,
      prevImage,
      nextImage,
      setCurrentImage,
    };
  },
});
</script>

<style scoped>
/* Styles for modal, carousel, zoom effect, and arrows */
.project-detail img {
  cursor: pointer;
  transition: opacity 0.2s ease-in-out, transform 0.5s ease;
}

.project-detail img:hover {
  opacity: 0.8;
}

.project-detail .carousel img:hover {
  transform: scale(1.05); /* Slight zoom on hover */
}

.project-detail .carousel img {
  object-fit: contain;
  max-width: 100%; /* Ensures the image doesn't exceed its container width */
  max-height: 100%; /* Ensures the image doesn't exceed its container height */
  transition: transform 0.5s ease-in-out;
}

.modal img {
  object-fit: contain;
  max-width: 90vw; /* Ensures modal image fits within the viewport */
  max-height: 90vh; /* Ensures modal image fits within the viewport */
}

.modal {
  cursor: pointer;
}
</style>
