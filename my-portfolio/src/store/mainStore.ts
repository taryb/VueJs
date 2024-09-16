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

// Define the Project interface to represent the structure of a project document in Firestore
interface Project {
  id: string; // Firestore document ID
  title: string; // Title of the project
  description: string; // Description of the project
  images: string[]; // Array of image URLs
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
      console.log('Fetching projects from Firestore...'); // Debugging log
      const projectsRef = collection(db, 'projects');
      const querySnapshot = await getDocs(projectsRef);
  
      projects.value = []; // Clear the local projects array
  
      querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        projects.value.push({ id: doc.id, ...doc.data() } as Project);
      });
  
      projectCount.value = projects.value.length; // Update the project count
      console.log('Projects fetched:', projects.value); // Debugging log
    } catch (error) {
      console.error('Error fetching projects:', error); // Log any errors
    }
  };

  // Add a new project to Firestore
  const addProject = async (newProject: Omit<Project, 'id'>) => {
    try {
      const projectsRef = collection(db, 'projects'); // Reference to the 'projects' collection
      const docRef = await addDoc(projectsRef, newProject); // Add new document to Firestore
      projects.value.push({ id: docRef.id, ...newProject }); // Add new project to local state
      projectCount.value = projects.value.length; // Update the project count
    } catch (error) {
      console.error('Error adding project:', error); // Log any errors
    }
  };

  // Remove a project from Firestore
  const removeProject = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'projects', id)); // Delete document from Firestore
      projects.value = projects.value.filter((project) => project.id !== id); // Remove project from local state
      projectCount.value = projects.value.length; // Update the project count
    } catch (error) {
      console.error('Error removing project:', error); // Log any errors
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
