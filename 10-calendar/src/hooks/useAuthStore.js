import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {

  const { status, user, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    console.log({ email, password });
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post("/auth", { email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-date', new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));

    } catch (error) {
      dispatch(onLogout('Login Error'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({ name, email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post("/auth/new", { name, email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-date', new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));

    } catch (error) {
      console.log(error);
      dispatch(onLogout(error.response.data?.msg || 'Error en el Registro'));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  }

  return {
    //* Propiedades
    status,
    user,
    errorMessage,
    //* Metodos
    startLogin,
    startRegister
  };
};