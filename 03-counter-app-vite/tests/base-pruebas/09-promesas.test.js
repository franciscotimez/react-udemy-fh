import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un heroe por ID', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
        .then((hero) => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();
        });
    });

    test('getHeroeByIdAsync debe de retornar un heroe por ID', (done) => {

        const id = 100;

        getHeroeByIdAsync(id)
        .catch((error) => {
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
            
            done();
        });
    });


    //  test('getHeroesByOwner debe de retornar los heroes de DC', () => {

    //     const owner = "DC";

    //     const hero = getHeroesByOwner(owner);

    //     expect(hero.length).toBe(3);
    //     expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    //  })

    //  test('getHeroesByOwner debe de retornar los heroes de DC', () => {

    //     const owner = "Marvel";

    //     const hero = getHeroesByOwner(owner);

    //     expect(hero.length).toBe(2);
    //     expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    //  })
});
// export const getHeroeByIdAsync = (id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // Tarea
//             // importen el 
//             const p1 = getHeroeById(id);
//             if (p1) {
//                 resolve(p1);
//             } else {
//                 reject('No se pudo encontrar el héroe');
//             }
//         }, 2000);
//     });
// };
