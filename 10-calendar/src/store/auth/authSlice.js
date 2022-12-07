import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'checking',
  user: {},
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state, action) => {
      state = initialState;
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = null;
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.errorMessage = payload ?? null;
    },
    clearErrorMessage: (state, { payload }) => {
      state.errorMessage = null;
    },
  }
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;