
export const initialState = {
    status: 'auth-checking', // auth-none auth-ok
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}


export const authenticatedState = {
    status: 'auth-ok', // auth-none auth-ok
    uid: 'AB123',
    email: 'example@example.com',
    displayName: 'demo User',
    photoURL: 'https://demo.jpg',
    errorMessage: null,
}

export const notAuthenticatedState = {
    status: 'auth-none', // auth-none auth-ok
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}


export const demoUser = {
    uid: 'AB123',
    email: 'example@example.com',
    displayName: 'demo User',
    photoURL: 'https://demo.jpg',
}