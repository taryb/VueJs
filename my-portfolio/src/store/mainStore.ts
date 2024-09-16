// src/store/mainStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { db } from '@/firebaseConfig';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  QueryDocumentSnapshot,
  DocumentData,
} from 'firebase/firestore';

// Define the type for a Project
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string; // Add the longDescription property
  date: string; // Ensure date is included
  images: string[];
}

// Define the Pinia store
export const useMainStore = defineStore('main', () => {
  // State
  const projects = ref<Project[]>([]); // Array of projects
  const userName = ref('Tary Bounavong'); // Example user name
  const projectCount = ref(0); // Number of projects

  // Fetch projects from Firestore
  const fetchProjects = async () => {
    try {
      console.log('Fetching projects from Firestore...');
      const projectsRef = collection(db, 'projects');
      const querySnapshot = await getDocs(projectsRef);
  
      projects.value = []; // Clear the local projects array
  
      querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        projects.value.push({ id: doc.id, ...doc.data() } as Project);
      });
  
      projectCount.value = projects.value.length; // Update the project count
      console.log('Projects fetched:', projects.value);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  // Add a new project to Firestore
  const addProject = async (newProject: Omit<Project, 'id'>) => {
    try {
      const projectsRef = collection(db, 'projects');
      const docRef = await addDoc(projectsRef, newProject);
      projects.value.push({ id: docRef.id, ...newProject });
      projectCount.value = projects.value.length;
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  // Remove a project from Firestore
  const removeProject = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'projects', id));
      projects.value = projects.value.filter((project) => project.id !== id);
      projectCount.value = projects.value.length;
    } catch (error) {
      console.error('Error removing project:', error);
    }
  };

  // Fetch projects on store initialization
  fetchProjects();

  // Return the state and actions for use in components
  return {
    userName,
    projects,
    projectCount,
    fetchProjects,
    addProject,
    removeProject,
  };
});
