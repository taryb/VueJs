// src/store/mainStore.ts
import { defineStore } from 'pinia';
// Define your store
export const useMainStore = defineStore('main', {
    state: () => ({
        userName: 'Tary Bounavong',
        projects: [
            {
                id: 1,
                title: 'Project 1',
                description: 'A description of project 1.',
                image: new URL('@/assets/project.jpg', import.meta.url).href, // Local image example
            },
            {
                id: 2,
                title: 'Project 2',
                description: 'A description of project 2.',
                image: new URL('@/assets/project.jpg', import.meta.url).href, // Local image example
            },
            {
                id: 3,
                title: 'Project 3',
                description: 'A description of project 3.',
                image: new URL('@/assets/project.jpg', import.meta.url).href, // Local image example
            },
        ], // Type the projects state
    }),
    getters: {
        // Get the total number of projects
        projectCount: (state) => state.projects.length,
        // Get a project by its ID
        getProjectById: (state) => (id) => {
            return state.projects.find((project) => project.id === id);
        },
    },
    actions: {
        // Action to add a new project
        addProject(newProject) {
            this.projects.push(newProject);
        },
        // Action to remove a project by its ID
        removeProject(id) {
            this.projects = this.projects.filter((project) => project.id !== id);
        },
        // Action to update a project
        updateProject(updatedProject) {
            const index = this.projects.findIndex((project) => project.id === updatedProject.id);
            if (index !== -1) {
                this.projects[index] = updatedProject;
            }
        },
    },
});
