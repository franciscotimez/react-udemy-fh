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
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSavingNote: (state) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => {
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id) {
                     return {note , ...action.payload}
                }
                return note
            })
            state.isSaving = false;
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