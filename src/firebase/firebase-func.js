import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth, provider } from './firebase';

export const register = ({ email, password }) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};

export const loginWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const useAuth = () => {
  const [curUser, setCurUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, currentUser => {
      if (!currentUser) {
        setCurUser(null);
        return;
      }

      setCurUser(currentUser);
    });

    return unsub;
  }, []);

  return curUser;
};
