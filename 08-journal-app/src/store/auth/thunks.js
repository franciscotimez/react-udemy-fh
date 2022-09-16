import { singInWithGoogle } from "../../firebase/providers";
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
        
        if(result.ok) {
            dispatch(login(result))
        }
        else {
            dispatch(logout(result.errorMessage))
        }
        console.log(result);
    };
};