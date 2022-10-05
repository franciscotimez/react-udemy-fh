import { loginWithUserPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSingIn, startLoginWithUserPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixture";

jest.mock("../../../src/firebase/providers");

describe('Pruebas en auth Thunks', () => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe de invocar el checkingCredentials', async () => {
        await checkingAuthentication()(dispatch);
        expect(dispatch).toBeCalledWith(checkingCredentials());
    });

    test('startGoogleSingIn debe de llamar checkingCredentials y login - Exito', async () => {

        const loginData = { ok: true, ...demoUser };
        await singInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSingIn()(dispatch);
        expect(dispatch).toBeCalledWith(checkingCredentials());
        expect(dispatch).toBeCalledWith(login(loginData));

    });

    test('startGoogleSingIn debe de llamar checkingCredentials y logout - Error', async () => {

        const loginData = { ok: false, errorMessage: "Un error en Google" };
        await singInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSingIn()(dispatch);
        expect(dispatch).toBeCalledWith(checkingCredentials());
        expect(dispatch).toBeCalledWith(logout(loginData));

    });

    test('startLoginWithUserPassword debe de llamar checkingCredentials y login - Exito', async () => {

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: "12456" };

        await loginWithUserPassword.mockResolvedValue(loginData);

        await startLoginWithUserPassword(formData)(dispatch);
        expect(dispatch).toBeCalledWith(checkingCredentials());
        expect(dispatch).toBeCalledWith(login(loginData));

    });

    test('startLogout debe de llamar logoutFirebase, clearNotes y logout', async () => {

        await startLogout()(dispatch);

        expect(logoutFirebase).toBeCalled();
        expect(dispatch).toBeCalledWith(clearNotesLogout());
        expect(dispatch).toBeCalledWith(logout());
    });
});