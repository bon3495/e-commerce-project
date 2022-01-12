import { signupWithEmailPassword } from '../firebase/firebase-utils';

export const userApi = {
  createUser: async newUser => {
    const userCredential = await signupWithEmailPassword(newUser);
    const { user } = await userCredential;

    return user;
  },
};
