// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';
import ProjectDetail from '@/views/ProjectDetail.vue'; // Import ProjectDetail component
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Login from '@/views/Login.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/projects/:id', name: 'ProjectDetail', component: ProjectDetail }, // Add ProjectDetail route
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
