import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'auth-none', // auth-none auth-ok
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = 'auth-ok' // auth-none auth-ok
            state.uid = payload.uid
            state.email = payload.email
            state.displayName = payload.displayName
            state.photoURL = payload.photoURL
            state.errorMessage = null
        },
        logout: (state, {payload}) => {
            state.status = 'auth-none' // auth-none auth-ok
            state.uid = null
            state.email = null
            state.displayName = null
            state.photoURL = null
            state.errorMessage = payload.errorMessage
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