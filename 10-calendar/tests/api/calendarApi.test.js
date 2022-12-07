import calendarApi from "../../src/api/calendarApi";

describe('Pruebas en calendarApi', () => {

  test('Debe de tener la configuracion por defecto', () => {

    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);

  });

  test('Debe de tener el x-token en el header de todas las peticiones', async () => {

    const token = "EsteSeriaElToken";
    localStorage.setItem('token', token);

    try {

      const res = await calendarApi.get('/auth/renew');
      // console.log(res, "ESTE es la RES");

    } catch (error) {
      // console.log(error.config.headers['x-token']);
      expect(error.config.headers['x-token']).toBe(token);
    }


  });

});