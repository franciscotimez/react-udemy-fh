import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar "Hola Fernando"', () => {

        const name = 'Fernand';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });
    
});
