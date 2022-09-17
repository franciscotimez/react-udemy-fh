import { loginWithUserPassword, registerWithUserPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await singInWithGoogle();

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));
        console.log(result);
    };
};

export const startRegisterWithUserPassword = ({ displayName, email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await registerWithUserPassword({ displayName, email, password });

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    };
};

export const startLoginWithUserPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithUserPassword({ email, password });

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));
        console.log(result);
    };
};