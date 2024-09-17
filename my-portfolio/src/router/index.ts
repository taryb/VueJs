// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import ProjectDetail from '@/views/ProjectDetail.vue';
import EditProject from '@/views/EditProject.vue';
import About from '@/views/About.vue'; // Import the About page
import Contact from '@/views/Contact.vue'; // Import the Contact page
import Login from '@/views/Login.vue'; // Import the Login page
import Projects from '@/views/Projects.vue'; // Import the Projects page

// Define the routes for your application
const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/projects/:id', name: 'ProjectDetail', component: ProjectDetail },
  { path: '/edit-project/:id', name: 'EditProject', component: EditProject },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/login', name: 'Login', component: Login },
];

// Create and export the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
