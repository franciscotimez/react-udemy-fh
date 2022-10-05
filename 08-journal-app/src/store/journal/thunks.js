import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { fileUpload, loadNotes } from '../../helpers';
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSavingNote, updateNote } from './journalSlice';

export const startNewNote = () => {
    return async (dispatch, getState) => {

        console.log("Start new note");
        dispatch(savingNewNote());

        // user uid
        const { uid } = getState().auth;

        //  nueva nota
        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
            imageUrls: [],
        };

        const refDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(refDoc, newNote);

        // add id
        newNote.id = refDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
        // dispatch(activarNota);
    };
};


export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        // user uid
        const { uid } = getState().auth;
        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));
    };
};

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSavingNote());
        // user uid
        const { uid } = getState().auth;
        const { activeNote } = getState().journal;

        const noteToUpdate = { ...activeNote };
        delete noteToUpdate.id;

        const refDoc = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
        await setDoc(refDoc, noteToUpdate, { merge: true });

        dispatch(updateNote(activeNote));

    };
};

export const startUploadFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSavingNote());

        // await fileUpload(files[0]);

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosURLs = await Promise.all(fileUploadPromises);
        console.log(photosURLs);

        dispatch(setPhotosToActiveNote(photosURLs));
    };
};

export const startDeletingNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const { activeNote } = getState().journal;

        const refDoc = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
        await deleteDoc(refDoc);

        dispatch(deleteNoteById(activeNote.id));
        console.log({ uid, activeNote });
    };
};