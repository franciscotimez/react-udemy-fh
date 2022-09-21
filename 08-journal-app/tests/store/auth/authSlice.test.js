import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixture";

describe('Pruebas en authSlice', () => {
    test('Debe de regresar el estado inicial y llamarse "auth"', () => {

        const state = authSlice.reducer(initialState, {});
        expect(state).toEqual(state);

        // console.log(authSlice);
        expect(authSlice.name).toBe('auth');
    });

    test('Debe de realizar la autenticacion', () => {

        const state = authSlice.reducer(initialState, login(demoUser));

        expect(state).toEqual({
            status: 'auth-ok',
            errorMessage: null,
            ...demoUser
        });
    });

    test('Debe de realizar el logout sin args', () => {

        const state = authSlice.reducer(authenticatedState, logout());

        expect(state).toEqual({
            ...notAuthenticatedState,
            errorMessage: undefined,
        });
    });

    test('Debe de realizar el logout con args', () => {

        const errorMessage = "Credenciales no son correctas";

        const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));

        expect(state).toEqual({
            ...notAuthenticatedState,
            errorMessage: errorMessage
        });
    });

    test('Debe de cambiar el status a auth-checking', () => {

        const state = authSlice.reducer(authenticatedState, checkingCredentials());

        expect(state.status).toBe("auth-checking");
    });
});