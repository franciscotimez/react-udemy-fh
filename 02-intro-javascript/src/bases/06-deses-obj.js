// Desestructuracion

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);


const retornaPersona = ({ nombre, edad, rango = 'Capitan' }) => {
    console.log(nombre, edad, rango);

    return {
        nombreClave: nombre,
        anios: edad,
    };
};

const avenger = retornaPersona(persona);
console.log(avenger);


const us_Context = ({ nombre, edad, rango = 'Capitan' }) => {
    // console.log(nombre,edad, rango);

    return {
        nombreClave: nombre,
        anios: edad,
        latlng: { 
            lat: 14.1234,
            lng: -12.123
        }
    };
};

const { nombreClave, anios, latlng: {lat, lng} } = us_Context(persona);
console.log(nombreClave, anios);
console.log(lat, lng)