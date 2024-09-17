<!-- src/views/Home.vue -->
<template>
  <div class="home bg-gray-50 min-h-screen py-10">
    <!-- Include Navbar -->
    <nav class="bg-white border-b border-gray-200 px-4 py-2.5 fixed w-full z-20 top-0 left-0">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <!-- Logo -->
        <a href="/" class="flex items-center">
          <img src="https://via.placeholder.com/40" class="mr-3 h-8" alt="Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-800">My Portfolio</span>
        </a>
        
        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <!-- Desktop and Mobile Menu -->
        <div :class="{'hidden': !isMobileMenuOpen}" class="w-full md:flex md:w-auto md:items-center" id="navbar">
          <ul class="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <router-link to="/" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700">About</router-link>
            </li>
            <li>
              <router-link to="/projects" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700">Projects</router-link>
            </li>
            <li>
              <router-link to="/contact" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700">Contact</router-link>
            </li>
            <li>
              <router-link to="/login" class="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-700">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content Section -->
    <div class="pt-16"> <!-- Pushes content below the fixed navbar -->
      <!-- Hero Section -->
      <section class="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4 text-center">
        <h1 class="text-5xl font-extrabold mb-4">Welcome to My Portfolio</h1>
        <p class="text-xl mb-6">Hi, I'm {{ store.userName }}, a passionate Frontend Developer.</p>
        <div class="flex justify-center space-x-4">
          <a
            href="#projects"
            class="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            class="bg-transparent border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Contact Me
          </a>
          <!-- Logout Button (Visible to Authenticated Users Only) -->
          <button
            v-if="isAuthenticated"
            @click="handleLogout"
            class="bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-16 px-4 bg-white">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-10">
            My Projects ({{ store.projectCount }})
          </h2>
          <div v-if="store.projects.length === 0" class="text-center text-gray-500">
            Loading projects...
          </div>
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="project in store.projects"
              :key="project.id"
              class="project-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative"
            >
              <!-- Clickable area for project details -->
              <div @click="goToProjectDetail(project.id)" class="cursor-pointer">
                <!-- Display Only One Image per Project -->
                <img
                  v-if="project.images && project.images.length > 0"
                  :src="project.images[0]"
                  alt="Project Image"
                  class="w-full h-48 object-cover mb-4"
                />
                <h3 class="text-2xl font-semibold mb-2">{{ project.title }}</h3>
                <p class="text-gray-600 mb-4">{{ project.description }}</p>
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
                class="text-blue-600 hover:underline font-semibold absolute top-10 right-2"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Add Project Form (Visible Only if Authenticated) -->
      <section id="add-project" class="py-16 px-4 bg-gray-50" v-if="isAuthenticated">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">Add a New Project</h2>
          <form @submit.prevent="handleAddProject" class="space-y-4">
            <input v-model="newProjectTitle" placeholder="Project Title" class="w-full p-2 border border-gray-300 rounded" />
            <textarea v-model="newProjectDescription" placeholder="Project Description" class="w-full p-2 border border-gray-300 rounded"></textarea>
            <textarea v-model="newProjectLongDescription" placeholder="Project Longer Description" class="w-full p-2 border border-gray-300 rounded"></textarea>
            <input type="file" @change="handleFileChange" accept="image/*" multiple class="w-full p-2 border border-gray-300 rounded" />
            <button
              type="submit"
              class="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
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
import { storage } from '@/firebaseConfig'; // Correctly import the storage instance

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useMainStore();
    const router = useRouter();
    
    const isAuthenticated = ref(false);
    const isMobileMenuOpen = ref(false); // Define the state for mobile menu

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    // Handle user logout
    const handleLogout = async () => {
      try {
        await signOutUser();
        isAuthenticated.value = false;
        window.location.href = '/login';
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    // Remove a project
    const handleRemoveProject = async (id: string) => {
      try {
        await store.removeProject(id);
      } catch (error) {
        console.error('Error removing project:', error);
      }
    };

    // Navigate to project detail page
    const goToProjectDetail = (id: string) => {
      router.push({ name: 'ProjectDetail', params: { id } });
    };

    // Navigate to edit project page
    const goToEditProject = (id: string) => {
      router.push({ name: 'EditProject', params: { id } });
    };

    // Form data
    const newProjectTitle = ref('');
    const newProjectDescription = ref('');
    const newProjectLongDescription = ref('');
    const newProjectImages = ref<File[]>([]);

    // Handle adding a new project
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

        // Clear form fields after adding
        newProjectTitle.value = '';
        newProjectDescription.value = '';
        newProjectLongDescription.value = '';
        newProjectImages.value = [];
      }
    };

    // Handle file input changes
    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        newProjectImages.value = Array.from(target.files);
      }
    };

    // Upload image to Firebase Storage
    const uploadImageToStorage = async (file: File): Promise<string> => {
      const storageReference = storageRef(storage, `images/${Date.now()}-${file.name}`);
      await uploadBytes(storageReference, file);
      const downloadURL = await getDownloadURL(storageReference);
      return downloadURL;
    };

    // Check authentication on mount
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
      isMobileMenuOpen,
      toggleMobileMenu,
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
/* Additional styles can go here */
</style>
