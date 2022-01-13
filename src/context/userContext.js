import { createContext, useContext, useState, useEffect } from 'React';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, provider } from '../firebase/firebase';

export const userContext = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
  register: () => {},
  loginWithGoogle: () => {},
});

export const UserAuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = ({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, currentUser => setUser(currentUser));

    return unsub;
  }, []);

  return (
    <userContext.Provider
      value={{ user, register, logIn, logOut, loginWithGoogle }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserAuth = () => {
  const { user, logIn, logOut, register, loginWithGoogle } =
    useContext(userContext);

  return {
    user,
    logIn,
    logOut,
    register,
    loginWithGoogle,
  };
};
