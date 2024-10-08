<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="bg-teal-500 border-b border-gray-300 px-4 py-2.5 fixed w-full z-20 top-0 left-0">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <!-- Logo -->
        <a href="/" class="flex items-center">
          <img src="/favicon.ico" class="mr-3 h-8" alt="Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Tary B's Portfolio</span>
        </a>
        
        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
              <router-link @click="closeMobileMenu" to="/" class="block py-2 pr-4 pl-3 text-white hover:text-teal-400">Home</router-link>
            </li>
            <li>
              <router-link @click="closeMobileMenu" to="/about" class="block py-2 pr-4 pl-3 text-white hover:text-teal-400">About</router-link>
            </li>
            <li>
              <router-link @click="closeMobileMenu" to="/projects" class="block py-2 pr-4 pl-3 text-white hover:text-teal-400">Projects</router-link>
            </li>
            <li>
              <router-link @click="closeMobileMenu" to="/contact" class="block py-2 pr-4 pl-3 text-white hover:text-teal-400">Contact</router-link>
            </li>
            <li>
              <router-link @click="closeMobileMenu" to="/login" class="block py-2 pr-4 pl-3 text-white hover:text-teal-400">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="pt-16">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const isMobileMenuOpen = ref(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    // Function to close the mobile menu when a link is clicked
    const closeMobileMenu = () => {
      if (isMobileMenuOpen.value) {
        isMobileMenuOpen.value = false;
      }
    };

    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
    };
  },
});
</script>

<style scoped>
/* Custom styles for the navigation bar */
</style>
