import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../api/userApi';

const initialState = {
  currentUser: null,
};

export const register = createAsyncThunk('user/register', async payload => {
  const user = await userApi.createUser(payload);
  return user;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
