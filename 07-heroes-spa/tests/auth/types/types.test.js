const { types } = require("../../../src/auth");

describe('Pruebas en types', () => {

    test('Debe regresar estos types', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });
    });

});
