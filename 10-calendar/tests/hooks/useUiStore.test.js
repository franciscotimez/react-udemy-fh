import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { useUiStore } from "../../src/hooks/useUiStore";
import { store, uiSlice } from "../../src/store";

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer,
    },
    preloadedState: {
      ui: { ...initialState }
    }
  });
};

describe('Pruebas en useUiStore', () => {
  test('Debe de regresar los valores por defecto', () => {

    const mockStore = getMockStore({
      isDateModalOpen: false
    });

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    });

    expect(result.current).toEqual({
      isDateModalOpen: false,
      openDateModal: expect.any(Function),
      closeDateModal: expect.any(Function),
      toggleDateModal: expect.any(Function)
    });
  });


  test('openDateModal Debe de setear isDateModalOpen en true', () => {

    const mockStore = getMockStore({
      isDateModalOpen: false
    });

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    });

    const { openDateModal } = result.current;

    act(() => {
      openDateModal();
    });

    expect(result.current.isDateModalOpen).toBeTruthy();
  });

  test('closeDateModal Debe de setear isDateModalOpen en false', () => {

    const mockStore = getMockStore({
      isDateModalOpen: true
    });

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    });

    act(() => {
      result.current.closeDateModal();
    });

    expect(result.current.isDateModalOpen).toBeFalsy();
  });

  test('toggleDateModal Debe de setear isDateModalOpen en false y cambiarlo nuevamente', () => {

    const mockStore = getMockStore({
      isDateModalOpen: true
    });

    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    });

    act(() => {
      result.current.toggleDateModal();
    });

    expect(result.current.isDateModalOpen).toBeFalsy();

    act(() => {
      result.current.toggleDateModal();
    });

    expect(result.current.isDateModalOpen).toBeTruthy();
  });
});