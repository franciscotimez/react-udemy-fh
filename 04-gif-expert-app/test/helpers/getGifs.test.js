import { getGifs } from "../../src/helpers/getGifs";


describe('Pruebas en getGifs()', () => { 
    test('debe retornar un areglo de gifs', async () => {
        const gifs = await getGifs('One Punch');
        
        expect(gifs.length).toBeGreaterThanOrEqual(10)

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    });
    
 })