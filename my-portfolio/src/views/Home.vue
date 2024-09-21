<template>
  <div class="home bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
    <!-- Main Content Section -->
    <div class="pt-16">
      <!-- Hero Section -->
      <section class="hero bg-gradient-to-r from-teal-500 to-purple-600 text-white py-16 px-4 text-center">
        <h1 class="text-5xl font-extrabold mb-4 leading-tight lg:text-6xl">
          Welcome to My Portfolio
        </h1>
        <p class="text-xl lg:text-2xl mb-6">
          Hi, I'm Tary Bounavong, an Optics Engineer and Frontend Developer. I specialize in X-ray optics, Python, and VueJS, creating innovative solutions for engineering and software challenges.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <router-link
            to="/projects"
            class="bg-teal-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </router-link>
          <router-link
            to="/contact"
            class="bg-transparent border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </router-link>
          <button
            v-if="isAuthenticated"
            @click="handleLogout"
            class="bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-10">
            My Projects ({{ store.projectCount }})
          </h2>
          <div v-if="store.projects.length === 0" class="text-center text-gray-500 dark:text-gray-400">
            Loading projects...
          </div>
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="project in store.projects"
              :key="project.id"
              class="project-card bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 relative"
            >
              <div @click="goToProjectDetail(project.id)" class="cursor-pointer">
                <img
                  v-if="project.images && project.images.length > 0"
                  :src="project.images[0]"
                  alt="Project Image"
                  class="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 class="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{{ project.title }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
              </div>

              <!-- Remove Project Button -->
              <button
                v-if="isAuthenticated"
                @click.stop="handleRemoveProject(project.id)"
                class="text-red-600 hover:underline font-semibold absolute top-2 right-2"
              >
                Remove
              </button>

              <!-- Edit Project Button -->
              <button
                v-if="isAuthenticated"
                @click.stop="goToEditProject(project.id)"
                class="text-teal-600 hover:underline font-semibold absolute top-10 right-2"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Add Project Form (Visible Only if Authenticated) -->
      <section id="add-project" class="py-16 px-4 bg-gray-50 dark:bg-gray-900" v-if="isAuthenticated">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
            Add a New Project
          </h2>
          <form @submit.prevent="handleAddProject" class="space-y-4">
            <input 
              v-model="newProjectTitle" 
              placeholder="Project Title" 
              class="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100" 
            />
            <textarea 
              v-model="newProjectDescription" 
              placeholder="Project Description" 
              class="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100" 
            />
            <textarea 
              v-model="newProjectLongDescription" 
              placeholder="Project Longer Description" 
              class="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100" 
            />
            <input 
              type="file" 
              @change="handleFileChange" 
              accept="image/*" 
              multiple 
              class="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100" 
            />
            <button
              type="submit"
              class="bg-teal-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              Add Project
            </button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useMainStore } from '@/store/mainStore';
import { checkUserAuth, signOutUser } from '@/services/auth';
import { useRouter } from 'vue-router';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'; 
import { storage } from '@/firebaseConfig';

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useMainStore();
    const router = useRouter();

    const isAuthenticated = ref(false);

    const handleLogout = async () => {
      try {
        await signOutUser();
        isAuthenticated.value = false;
        router.push('/login');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    const handleRemoveProject = async (id: string) => {
      try {
        await store.removeProject(id);
      } catch (error) {
        console.error('Error removing project:', error);
      }
    };

    const goToProjectDetail = (id: string) => {
      router.push({ name: 'ProjectDetail', params: { id } });
    };

    const goToEditProject = (id: string) => {
      router.push({ name: 'EditProject', params: { id } });
    };

    const newProjectTitle = ref('');
    const newProjectDescription = ref('');
    const newProjectLongDescription = ref('');
    const newProjectImages = ref<File[]>([]);

    const handleAddProject = async () => {
      if (newProjectTitle.value && newProjectDescription.value && newProjectLongDescription.value) {
        const imageUrls = await Promise.all(newProjectImages.value.map(uploadImageToStorage));
        store.addProject({
          title: newProjectTitle.value,
          description: newProjectDescription.value,
          longDescription: newProjectLongDescription.value,
          date: new Date().toISOString(),
          images: imageUrls,
        });

        newProjectTitle.value = '';
        newProjectDescription.value = '';
        newProjectLongDescription.value = '';
        newProjectImages.value = [];
      }
    };

    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        newProjectImages.value = Array.from(target.files);
      }
    };

    const uploadImageToStorage = async (file: File): Promise<string> => {
      const storageReference = storageRef(storage, `images/${Date.now()}-${file.name}`);
      await uploadBytes(storageReference, file);
      const downloadURL = await getDownloadURL(storageReference);
      return downloadURL;
    };

    onMounted(() => {
      checkUserAuth((user) => {
        if (user) {
          isAuthenticated.value = true;
        }
        store.fetchProjects();
      });
    });

    return {
      store,
      handleRemoveProject,
      handleLogout,
      goToProjectDetail,
      goToEditProject,
      isAuthenticated,
      newProjectTitle,
      newProjectDescription,
      newProjectLongDescription,
      handleAddProject,
      handleFileChange,
    };
  },
});
</script>

<style scoped>
/* Styles can be adjusted or expanded as needed */
</style>
