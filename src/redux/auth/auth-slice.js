import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  // isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      // state.isLoggedIn = true;
    },
    [authOperations.logIn](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      // state.isLoggedIn = true;
    },
    [authOperations.logOut](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      // state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser](state, action) {
      state.user = action.payload;
      // state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
