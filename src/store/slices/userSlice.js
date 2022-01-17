import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: '',
  isLoading: false,
  isLogin: false,
};

export const registerUser = createAsyncThunk('user/register', async payload => {
  return payload;
});

export const loginUser = createAsyncThunk('user/login', async payload => {
  return payload;
});

export const checkUSerSignIn = createAsyncThunk(
  'user/checkUSerSignIn',
  async payload => {
    // return new Promise(resolve => {
    //   const unsub = onAuthStateChanged(auth, async curUser => {
    //     unsub();
    //     if (!curUser) {
    //       resolve(null);
    //     } else {
    //       const userRef = await handleUserProfile(curUser);
    //       onSnapshot(userRef, user => {
    //         resolve({
    //           id: user.id,
    //           ...user.data(),
    //         });
    //       });
    //     }
    //   });
    // });
    return payload;
  }
);

export const signInGG = createAsyncThunk('user/signingg', async payload => {
  return payload;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.user = action.payload;
    },

    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },

    logOutUser: state => {
      state.user = null;
      state.isLogin = false;
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
      })
      .addCase(checkUSerSignIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(checkUSerSignIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
