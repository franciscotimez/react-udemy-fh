import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { calendarApi } from "../../src/api";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { authSlice } from "../../src/store";
import { initialState, notAuthenticatedState } from "../fixtures/authStates";
import { testFailUserCredentials, testRegisterUserCredentials, testUserCredentials } from "../fixtures/testUser";


const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    preloadedState: {
      auth: { ...initialState }
    }
  });
};

describe('Pruebas en useAuthStore', () => {

  beforeEach(() => localStorage.clear());

  test('Debe de regresar los valores por defecto', () => {
    const mockStore = getMockStore(initialState);

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    });

    expect(result.current).toEqual({
      "status": "checking",
      "user": {},
      "errorMessage": null,
      "checkAuthToken": expect.any(Function),
      "startLogin": expect.any(Function),
      "startLogout": expect.any(Function),
      "startRegister": expect.any(Function),
    });
  });

  test('Debe de realizar el login correctamente', async () => {
    const mockStore = getMockStore(notAuthenticatedState);

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    });

    await act(async () => {
      await result.current.startLogin(testUserCredentials);
    });

    const { status, user, errorMessage } = result.current;
    expect({ status, user, errorMessage }).toEqual({
      status: "authenticated",
      user: {
        name: testUserCredentials.name,
        uid: testUserCredentials.uid,
      },
      errorMessage: null,
    });

    expect(localStorage.getItem('token')).toEqual(expect.any(String));
    expect(localStorage.getItem('token-date')).toEqual(expect.any(String));
  });

  test('Debe de realizar el login incorrectamente', async () => {
    const mockStore = getMockStore(notAuthenticatedState);

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    });

    await act(async () => {
      await result.current.startLogin(testFailUserCredentials);
    });

    const { status, user, errorMessage } = result.current;
    expect({ status, user, errorMessage }).toEqual({
      status: "not-authenticated",
      user: {},
      errorMessage: expect.any(String),
    });
    expect(localStorage.getItem('token')).toBe(null);
    expect(localStorage.getItem('token-date')).toBe(null);

    await waitFor(
      () => expect(result.current.errorMessage).toBe(null)
    );
  });

  test('Debe de realizar el Registro correctamente', async () => {
    const mockStore = getMockStore(notAuthenticatedState);

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    });

    const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
      data: {
        "ok": true,
        "uid": testRegisterUserCredentials.uid,
        "name": testRegisterUserCredentials.name,
        "token": "Token valido"
      }
    });

    await act(async () => {
      await result.current.startRegister(testRegisterUserCredentials);
    });

    const { status, user, errorMessage } = result.current;
    expect({ status, user, errorMessage }).toEqual({
      status: "authenticated",
      user: {
        name: testRegisterUserCredentials.name,
        uid: testRegisterUserCredentials.uid,
      },
      errorMessage: null,
    });

    expect(localStorage.getItem('token')).toEqual(expect.any(String));
    expect(localStorage.getItem('token-date')).toEqual(expect.any(String));

    spy.mockRestore();
  });

  test('Debe de realizar el Registro incorrectamente', async () => {
    const mockStore = getMockStore(notAuthenticatedState);

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    });

    await act(async () => {
      await result.current.startRegister(testUserCredentials);
    });

    const { status, user, errorMessage } = result.current;
    expect({ status, user, errorMessage }).toEqual({
      status: "not-authenticated",
      user: {},
      errorMessage: expect.any(String),
    });

    expect(localStorage.getItem('token')).toBe(null);
    expect(localStorage.getItem('token-date')).toBe(null);

    await waitFor(
      () => expect(result.current.errorMessage).toBe(null)
    );
  });

  test('Debe de desautenticar si no hay token', async () => {
    const mockStore = getMockStore(initialState);

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    });

    await act(async () => {
      await result.current.checkAuthToken();
    });

    const { status, user, errorMessage } = result.current;
    console.log({ status, user, errorMessage });

    expect({ status, user, errorMessage }).toEqual({
      status: "not-authenticated",
      user: {},
      errorMessage: null,
    });

    expect(localStorage.getItem('token')).toBe(null);
    expect(localStorage.getItem('token-date')).toBe(null);
  });

  test('Debe de autenticar si hay token', async () => {

    const { data } = await calendarApi.post('/auth', testUserCredentials);

    localStorage.setItem('token', data.token);
    localStorage.setItem('token-date', new Date().getTime());

    const mockStore = getMockStore(initialState);

    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    });

    await act(async () => {
      await result.current.checkAuthToken();
    });

    const { status, user, errorMessage } = result.current;
    console.log({ status, user, errorMessage });

    expect({ status, user, errorMessage }).toEqual({
      status: "authenticated",
      user: {
        name: data.name,
        uid: data.uid,
      },
      errorMessage: null,
    });

    expect(localStorage.getItem('token')).toEqual(expect.any(String));
    expect(localStorage.getItem('token-date')).toEqual(expect.any(String));
  });
});