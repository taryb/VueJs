<template>
  <div class="projects bg-gray-900 min-h-screen py-10">
    <section class="py-16 px-4 bg-gray-800">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-teal-400 mb-10">Projects</h2>
        
        <!-- Show loader while fetching projects -->
        <div v-if="store.projects.length === 0" class="text-center text-teal-400">
          Loading projects...
        </div>

        <!-- Display Projects -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in store.projects"
            :key="project.id"
            @click="goToProjectDetail(project.id)"
            class="project-card bg-gray-800 dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <!-- Display Multiple Images per Project -->
            <div v-if="project.images && project.images.length > 0" class="overflow-hidden rounded-lg">
              <img
                v-for="(image, index) in project.images"
                :key="index"
                :src="image"
                alt="Project Image"
                class="w-full h-48 object-cover mb-4 rounded-lg"
              />
            </div>
            <h3 class="text-2xl font-semibold mb-2 text-teal-400">{{ project.title }}</h3>
            <p class="text-gray-300 mb-4">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useMainStore } from '@/store/mainStore';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Projects',
  setup() {
    const store = useMainStore();
    const router = useRouter();

    // Fetch projects on component mount
    onMounted(() => {
      store.fetchProjects();
    });

    // Function to navigate to project detail
    const goToProjectDetail = (id: string) => {
      router.push({ name: 'ProjectDetail', params: { id } });
    };

    return {
      store,
      goToProjectDetail,
    };
  },
});
</script>

<style scoped>
/* Custom styles for project cards */
.project-card:hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.5); /* Stronger shadow for a bold hover effect */
}
</style>
