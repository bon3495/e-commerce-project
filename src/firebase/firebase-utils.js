// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { useEffect } from 'react';
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
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const signInGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('token: ', token);
      console.log('user: ', user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log('error code: ', errorCode);
      console.log('error message: ', errorMessage);
      console.log('error email: ', email);
      console.log('error credential: ', credential);
    });
};

export const signupWithEmailPassword = ({ email, password }) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const useAuth = () => {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      if (!user) return;
      return user;
    });

    return unsub;
  }, []);
};
