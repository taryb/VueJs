// src/store/mainStore.ts
import { defineStore } from 'pinia';

// Define your store
export const useMainStore = defineStore('main', {
  state: () => ({
    userName: '[Your Name]',
    projects: [
      { id: 1, title: 'Project 1', description: 'A description of project 1.' },
      { id: 2, title: 'Project 2', description: 'A description of project 2.' },
      { id: 3, title: 'Project 3', description: 'A description of project 3.' }
    ],
  }),

  getters: {
    // Get the total number of projects
    projectCount: (state) => state.projects.length,
    
    // Get a project by its ID
    getProjectById: (state) => (id: number) => {
      return state.projects.find((project) => project.id === id);
    }
  },

  actions: {
    // Action to add a new project
    addProject(newProject: { id: number; title: string; description: string }) {
      this.projects.push(newProject);
    },

    // Action to remove a project by its ID
    removeProject(id: number) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },

    // Action to update a project
    updateProject(updatedProject: { id: number; title: string; description: string }) {
      const index = this.projects.findIndex((project) => project.id === updatedProject.id);
      if (index !== -1) {
        this.projects[index] = updatedProject;
      }
    }
  }
});
