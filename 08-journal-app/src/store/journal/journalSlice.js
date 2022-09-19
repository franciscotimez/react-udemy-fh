import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null
        // activeNote: {
        //     id: "ABCE123",
        //     title: "",
        //     body: "",
        //     date: 1234567,
        //     imageUrls: [],
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload
        },
        setNotes: (state, action) => {
            state.notes = action.payload
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
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSavingNote,
    updateNote,
    deleteNoteById,
} = journalSlice.actions;