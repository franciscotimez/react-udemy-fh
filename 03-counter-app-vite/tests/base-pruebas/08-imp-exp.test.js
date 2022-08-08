import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {

        const id = 1;

        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
     })

     test('getHeroeById debe de retornar undefined si no exist', () => {

        const id = 100;

        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
        expect(hero).toBe(undefined)
     })

     test('getHeroesByOwner debe de retornar los heroes de DC', () => {

        const owner = "DC";

        const hero = getHeroesByOwner(owner);

        expect(hero.length).toBe(3);
        expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
     })

     test('getHeroesByOwner debe de retornar los heroes de DC', () => {

        const owner = "Marvel";

        const hero = getHeroesByOwner(owner);

        expect(hero.length).toBe(2);
        expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
     })
})

// export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
// export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );
