import { authSlice, clearErrorMessage, onLogin, onLogout } from "../../../src/store/auth/authSlice";
import { authenticatedState, initialState, notAuthenticatedState } from "../../fixtures/authStates";
import { testUserCredentials } from "../../fixtures/testUser";

describe('Pruebas en authSlice', () => {

  test('Debe regresar el estado inicial', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('Debe realizar el login', () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));
    expect(state).toEqual({
      status: "authenticated",
      user: testUserCredentials,
      errorMessage: null
    });
  });

  test('Debe realizar el logout', () => {
    const state = authSlice.reducer(authenticatedState, onLogout());
    expect(state).toEqual(notAuthenticatedState);
  });

  test('Debe realizar el logout con mensaje de error', () => {
    const errorMessage = "Error Gile!!";
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    expect(state).toEqual({ ...notAuthenticatedState, errorMessage });
  });

  test('Debe limpiar el mensaje de error', () => {
    const errorMessage = "Error Gile!!";
    let state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    expect(state).toEqual({ ...notAuthenticatedState, errorMessage });

    state = authSlice.reducer(state, clearErrorMessage());
    expect(state.errorMessage).toBeFalsy();
  });
});