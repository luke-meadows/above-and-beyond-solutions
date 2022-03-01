import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCCy2iE3fs910Ymod9Oqzdn7m5IaeWdVNQ',
  authDomain: 'above-and-beyond-99ca4.firebaseapp.com',
  projectId: 'above-and-beyond-99ca4',
  storageBucket: 'above-and-beyond-99ca4.appspot.com',
  messagingSenderId: '829918608696',
  appId: '1:829918608696:web:6492f170e3afc4b90d95cd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectAboveAndBeyond = firebase.firestore();
