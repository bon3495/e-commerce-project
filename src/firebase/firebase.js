// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBZrW290Us6YA-lgSVRndEaBhoQkiiNYq4',
  authDomain: 'e-commerce-cfe83.firebaseapp.com',
  databaseURL:
    'https://e-commerce-cfe83-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'e-commerce-cfe83',
  storageBucket: 'e-commerce-cfe83.appspot.com',
  messagingSenderId: '518337280655',
  appId: '1:518337280655:web:4b4bbfaae6af44a395cefa',
  measurementId: 'G-W8GMD6LHQH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
