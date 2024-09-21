<template>
  <div class="edit-project bg-gray-900 min-h-screen py-10">
    <div class="max-w-4xl mx-auto" v-if="project">
      <h2 class="text-4xl font-bold text-center text-teal-400 mb-6">Edit Project</h2>
      <form @submit.prevent="handleUpdateProject" class="space-y-4">
        <input
          v-model="project.title"
          placeholder="Project Title"
          class="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white"
        />
        <textarea
          v-model="project.description"
          placeholder="Project Description"
          class="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white"
        ></textarea>
        <textarea
          v-model="project.longDescription"
          placeholder="Project Longer Description"
          class="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white"
        ></textarea>
        <input
          type="file"
          @change="handleFileChange"
          accept="image/*"
          multiple
          class="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white"
        />

        <!-- Display current images with remove option -->
        <div class="current-images mt-4">
          <div v-for="(image, index) in project.images" :key="index" class="relative inline-block mr-4">
            <img :src="image" class="h-20 w-20 object-cover rounded-md" />
            <button
              @click="removeImage(index)"
              class="absolute top-0 right-0 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full shadow-md"
            >
              &#10005;
            </button>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-teal-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
        >
          Update Project
        </button>
      </form>
    </div>
    <div v-else class="text-center text-red-600">
      Project not found.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useMainStore } from '@/store/mainStore';
import { useRoute, useRouter } from 'vue-router';
import { storage } from '@/firebaseConfig';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

// Define the Project type
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  images: string[];
}

export default defineComponent({
  name: 'EditProject',
  setup() {
    const store = useMainStore();
    const route = useRoute();
    const router = useRouter();
    const projectId = route.params.id as string;
    const project = ref<Project | null>(null); // Define project as either Project or null
    const newProjectImages = ref<File[]>([]);

    // Fetch the project data on component mount
    onMounted(() => {
      const foundProject = store.projects.find((p) => p.id === projectId);
      if (foundProject) {
        project.value = { ...foundProject }; // Set the found project
      } else {
        console.error('Project not found');
        router.push({ name: 'Home' }); // Redirect to home if project not found
      }
    });

    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        newProjectImages.value = Array.from(target.files);
      }
    };

    const handleUpdateProject = async () => {
      if (project.value) {
        if (newProjectImages.value.length > 0) {
          const imageUrls = await Promise.all(newProjectImages.value.map(uploadImageToStorage));
          project.value.images = [...project.value.images, ...imageUrls]; // Add new images
        }

        await store.updateProject(project.value);
        router.push({ name: 'Home' });
      }
    };

    const uploadImageToStorage = async (file: File): Promise<string> => {
      const storageReference = storageRef(storage, `images/${Date.now()}-${file.name}`);
      await uploadBytes(storageReference, file);
      const downloadURL = await getDownloadURL(storageReference);
      return downloadURL;
    };

    const removeImage = (index: number) => {
      if (project.value) {
        project.value.images.splice(index, 1);
      }
    };

    return {
      project,
      handleUpdateProject,
      handleFileChange,
      removeImage,
    };
  },
});
</script>

<style scoped>
/* Additional styles for hover and transition effects */
button {
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  transform: scale(1.05);
}
</style>
