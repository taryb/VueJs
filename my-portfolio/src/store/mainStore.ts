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
  updateDoc,
  QueryDocumentSnapshot,
  DocumentData,
} from 'firebase/firestore';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  images: string[];
}

export const useMainStore = defineStore('main', () => {
  // State
  const projects = ref<Project[]>([]);
  const userName = ref('Tary Bounavong'); // Add userName to the store
  const projectCount = ref(0);

  // Fetch projects from Firestore
  const fetchProjects = async () => {
    try {
      const projectsRef = collection(db, 'projects');
      const querySnapshot = await getDocs(projectsRef);

      projects.value = [];

      querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        projects.value.push({ id: doc.id, ...doc.data() } as Project);
      });

      projectCount.value = projects.value.length;
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

  // Update an existing project in Firestore
  const updateProject = async (updatedProject: Project) => {
    try {
      const projectRef = doc(db, 'projects', updatedProject.id);
      
      // Specify the fields to update
      const updateData = {
        title: updatedProject.title,
        description: updatedProject.description,
        longDescription: updatedProject.longDescription,
        date: updatedProject.date,
        images: updatedProject.images
      };

      await updateDoc(projectRef, updateData); // Update in Firestore
      const index = projects.value.findIndex((p) => p.id === updatedProject.id);
      if (index !== -1) {
        projects.value[index] = { ...updatedProject }; // Update in local state
      }
    } catch (error) {
      console.error('Error updating project:', error);
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

  fetchProjects();

  return {
    userName, // Ensure userName is exported from the store
    projects,
    projectCount,
    fetchProjects,
    addProject,
    updateProject,
    removeProject,
  };
});
