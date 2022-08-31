import { authReducer, types } from "../../../src/auth";

describe('Pruebas en AuthReducer', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {});

        expect(state).toEqual({ logged: false });

    });

    test('Debe de llamar el login, autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                id: '13234',
                name: "Francisco",
            }
        };

        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        });

    });

    test('Debe de llamar el logout, borrar el nombre de usuario y logged en false', () => {

        const state = {
            logged: true,
            user: {
                id: '13234',
                name: "Francisco",
            }
        };
        const action = { type: types.logout };
        const newState = authReducer(state, action);

        expect(newState).toEqual({ logged: false });
    });
});
