<template>
  <div class="edit-project bg-gray-50 min-h-screen py-10">
    <div class="max-w-4xl mx-auto" v-if="project">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">Edit Project</h2>
      <form @submit.prevent="handleUpdateProject" class="space-y-4">
        <input v-model="project.title" placeholder="Project Title" class="w-full p-2 border border-gray-300 rounded" />
        <textarea v-model="project.description" placeholder="Project Description" class="w-full p-2 border border-gray-300 rounded"></textarea>

        <!-- Quill Editor for Long Description -->
        <quill-editor
          v-model="project.longDescription"
          :options="editorOptions"
          class="bg-white"
        ></quill-editor>

        <input type="file" @change="handleFileChange" accept="image/*" multiple class="w-full p-2 border border-gray-300 rounded" />

        <!-- Display current images with remove option -->
        <div class="current-images mt-4">
          <div v-for="(image, index) in project.images" :key="index" class="relative inline-block mr-4">
            <img :src="image" class="h-20 w-20 object-cover mb-2" />
            <button @click="removeImage(index)" class="absolute top-0 right-0 text-red-600">x</button>
          </div>
        </div>

        <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
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
import { quillEditor } from 'vue-quill-editor';
import { storage } from '@/firebaseConfig';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import 'quill/dist/quill.snow.css';  // Import Quill CSS

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  images: string[];
}

export default defineComponent({
  components: {
    quillEditor,  // Register the Quill editor component
  },
  setup() {
    const store = useMainStore();
    const route = useRoute();
    const router = useRouter();
    const projectId = route.params.id as string;
    const project = ref<Project | null>(null); // Define project as either Project or null
    const newProjectImages = ref<File[]>([]);

    const editorOptions = {
      theme: 'snow',  // Set the theme of the Quill editor
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['link', 'image'],
        ],
      },
    };

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
      editorOptions,
    };
  },
});
</script>

<style scoped>
/* Additional styles can go here */
</style>
