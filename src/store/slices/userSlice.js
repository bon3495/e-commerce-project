import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider } from 'firebase/auth';
import {
  logIn,
  logOut,
  register,
  signInWithGoogle,
} from '../../firebase/firebase-func';

const initialState = {
  user: null,
  error: '',
  isLoading: false,
  isLogin: false,
};

export const registerUser = createAsyncThunk('user/register', async payload => {
  const userCredential = await register(payload);
  const { user } = await userCredential;
  const token = await user.getIdToken();
  return {
    name: user.displayName || user.email,
    email: user.email,
    id: user.uid,
    token,
  };
});

export const logOutUser = createAsyncThunk('user/logout', async () => {
  await logOut();
  return;
});

export const loginUser = createAsyncThunk('user/login', async payload => {
  const userCredential = await logIn(payload);
  const { user } = await userCredential;
  const token = await user.getIdToken();
  return {
    name: user.displayName || user.email,
    email: user.email,
    id: user.uid,
    token,
  };
});

export const signInGG = createAsyncThunk('user/signingg', async payload => {
  const result = await signInWithGoogle();
  const credential = await GoogleAuthProvider.credentialFromResult(result);
  const token = await credential.accessToken;
  const user = await result.user;
  return {
    name: user.displayName || user.email,
    email: user.email,
    id: user.uid,
    token,
  };
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.user = action.payload;
    },

    setIsLogin: state => {
      state.isLogin = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.user = null;
        state.isLogin = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLogin = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(signInGG.fulfilled, (state, action) => {
        state.isLogin = true;
        state.user = action.payload;
      })
      .addCase(signInGG.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
