<!-- src/views/Home.vue -->
<template>
  <div class="home bg-gray-50 min-h-screen py-10">
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
            class="project-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <img v-if="project.image" :src="project.image" alt="Project Image" class="w-full h-48 object-cover mb-4" />
            <h3 class="text-2xl font-semibold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <button v-if="isAuthenticated" @click="store.removeProject(project.id)" class="text-red-600 hover:underline font-semibold">
              Remove
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Add Project Form (Only for Authenticated Users) -->
    <section v-if="isAuthenticated" id="add-project" class="py-16 px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">Add a New Project</h2>
        <form @submit.prevent="handleAddProject" class="space-y-4">
          <input v-model="newProjectTitle" placeholder="Project Title" class="w-full p-2 border border-gray-300 rounded" />
          <textarea v-model="newProjectDescription" placeholder="Project Description" class="w-full p-2 border border-gray-300 rounded"></textarea>
          <input v-model="newProjectImage" placeholder="Project Image URL" class="w-full p-2 border border-gray-300 rounded" />
          <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
            Add Project
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useMainStore } from '@/store/mainStore';
import { checkUserAuth } from '@/services/auth'; // Import the auth function

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useMainStore();
    
    // Local state for the form
    const newProjectTitle = ref('');
    const newProjectDescription = ref('');
    const newProjectImage = ref('');
    const isAuthenticated = ref(false); // State to track if the user is authenticated

    // Function to handle form submission
    const handleAddProject = () => {
      if (newProjectTitle.value && newProjectDescription.value) {
        store.addProject({
          title: newProjectTitle.value,
          description: newProjectDescription.value,
          image: newProjectImage.value,
        });
        // Clear input fields after adding
        newProjectTitle.value = '';
        newProjectDescription.value = '';
        newProjectImage.value = '';
      }
    };

    // Check if the user is authenticated
    onMounted(() => {
      checkUserAuth((user) => {
        if (user) {
          isAuthenticated.value = true; // Set authenticated state to true
        }
        store.fetchProjects(); // Fetch projects regardless of authentication
      });
    });

    return {
      store,
      newProjectTitle,
      newProjectDescription,
      newProjectImage,
      handleAddProject,
      isAuthenticated, // Return the authenticated state
    };
  },
});
</script>

<style scoped>
/* Additional styles can go here */
</style>
