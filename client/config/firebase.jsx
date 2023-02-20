import '@firebase/auth';
import '@firebase/firestore';
import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD6GKMdZTJRHGvmDLd3XJiGgqLnUshpSYg',
  authDomain: 'perfectdate-d5f16.firebaseapp.com',
  projectId: 'perfectdate-d5f16',
  storageBucket: 'perfectdate-d5f16.appspot.com',
  messagingSenderId: '988805634850',
  appId: '1:988805634850:web:3799601e8b980e3216e37b',
  measurementId: 'G-3E645V186X',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
