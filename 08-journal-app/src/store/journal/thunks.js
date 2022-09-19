import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote } from './journalSlice';

export const startNewNote = () => {
    return async (dispatch, getState) => {

        console.log("Start new note");
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