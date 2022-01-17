import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  where,
  limit,
  getDocs,
  startAfter,
} from 'firebase/firestore';
import { useState } from 'react';
import { LIMIT_PRODUCTS, SHOP_NAME } from '../constants';
import { auth, db, provider } from './firebase';

export const register = (email, password) => {
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

export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const { uid } = userAuth;

  const userRef = doc(db, SHOP_NAME.USERS, uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    const payload = {
      displayName,
      email,
      createdDate: JSON.stringify(timestamp),
      ...additionalData,
    };

    try {
      await setDoc(userRef, payload);
    } catch (error) {
      console.log('error handle profile: ', error);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionsRef = collection(db, collectionKey);

  const batch = writeBatch(db);
  objectsToAdd.forEach(obj => {
    const newDocRef = doc(collectionsRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};
