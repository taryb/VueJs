// src/services/auth.ts
import { getAuth, onAuthStateChanged, User, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();

// Function to check user authentication state
export const checkUserAuth = (callback: (user: User | null) => void) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is authenticated:', user);
      callback(user);
    } else {
      console.log('No user is authenticated');
      callback(null);
    }
  });
};

// Function to handle user login
export const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in successfully:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

// Function to handle user logout
export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log('User signed out successfully');
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export { auth };
