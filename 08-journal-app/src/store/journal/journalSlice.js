import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
        // active: {
        //     id: "ABCE123",
        //     title: "",
        //     body: "",
        //     date: 1234567,
        //     imageUrls: [],
        // }
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload
        },
        setNote: (state, action) => {
        },
        setSavingNote: (state, action) => {
        },
        updateNote: (state, action) => {
        },
        deleteNoteById: (state, action) => {
        },
    }
});

export const {
    addNewEmptyNote,
    setActiveNote,
    setNote,
    setSavingNote,
    updateNote,
    deleteNoteById,
} = journalSlice.actions;