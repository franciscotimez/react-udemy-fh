import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loadNotes } from '../../helpers';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './journalSlice';

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
            //     imageUrls: [],
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