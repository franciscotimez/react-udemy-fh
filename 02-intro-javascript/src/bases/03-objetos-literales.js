const persona = {
    nombre: 'Francisco',
    apellido: 'Timez',
    edad: 31,
    direccion: {
        ciudad: 'Posadas',
        cp: 3300,
    }
}

console.log(persona);
console.log(persona.nombre);

console.log({persona});

console.log({
    persona: persona
});

console.table(persona);


// copiado de un objeto

// const persona2 = persona // Very BAD!!!
const persona2 = { ...persona } // Very Good!!

persona2.nombre = "Peter"

console.log(persona);
console.log(persona2);