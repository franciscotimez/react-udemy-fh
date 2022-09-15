import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'auth-checking', // auth-none auth-ok
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action) => {

        },
        logout: (state, payload) => {

        },
        checkingCredentials: (state, action) => {
            state.status = 'auth-checking';
        }
    }
});

export const {
    login,
    logout,
    checkingCredentials
} = authSlice.actions;