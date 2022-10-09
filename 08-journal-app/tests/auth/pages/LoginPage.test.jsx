import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth/authSlice";
import { notAuthenticatedState } from "../../fixtures/authFixture";

// Mock thunks
const mockStartGoogleSingIn = jest.fn();
const mockStartLoginWithUserPassword = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
  startGoogleSingIn: () => mockStartGoogleSingIn,
  startLoginWithUserPassword: ({ email, password }) => {
    return () => mockStartLoginWithUserPassword({ email, password });
  },
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn(),
}));


const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
});

describe('Pruebas en el <LoginPage/>', () => {

  beforeEach(() => jest.clearAllMocks());

  test('Debe mostrar el componente correctametne', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  test('Boton de Google debe llamar startGoogleSignIn', () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText("google-btn");
    fireEvent.click(googleBtn);
    expect(mockStartGoogleSingIn).toHaveBeenCalled();
  });

  test('Submit debe llamar a startLoginWithUserPassword', () => {

    const email = 'email@google.com';
    const password = "123456";

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole('textbox', { name: "Correo" });
    fireEvent.change(emailField, { target: { name: "email", value: email } });

    const passField = screen.getByTestId('password');
    fireEvent.change(passField, { target: { name: "password", value: password } });


    const loginForm = screen.getByLabelText("login-form");
    fireEvent.submit(loginForm);

    expect(mockStartLoginWithUserPassword).toHaveBeenCalledWith({ email, password });

  });
});