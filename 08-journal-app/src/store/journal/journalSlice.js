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
            state.messageSaved = '';
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.messageSaved = '';
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.messageSaved = '';
            state.activeNote = action.payload;
        },
        setNotes: (state, action) => {
            state.messageSaved = '';
            state.notes = action.payload;
        },
        setSavingNote: (state) => {
            state.messageSaved = '';
            state.isSaving = true;
        },
        updateNote: (state, action) => {
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return { note, ...action.payload };
                }
                return note;
            });
            state.isSaving = false;
            state.messageSaved = `${action.payload.title} actualizada correctamente`;
        },
        setPhotosToActiveNote: (state, action) => {
            state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...action.payload];
            state.isSaving = false;
            state.messageSaved = ``;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.activeNote = null;
        },
        deleteNoteById: (state, action) => {
            state.activeNote = null;
            state.notes = state.notes.filter(note => note.id !== action.payload);
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
    setPhotosToActiveNote,
    clearNotesLogout,
} = journalSlice.actions;