

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes);
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [primero, segundo] = personajes;

console.log(primero);
console.log(segundo);

const [, , tercero] = personajes;
console.log(tercero);


// Tarea
// 1. El primer valor del arrayu se llamara nombre
// 2. El segundo se llamara setNombre

const us_State = (valor) => {
    return [valor, () => { console.log('Hola mundo'); }];
};

const [nombre, setNombre] = us_State('Goku');

console.log(nombre);
setNombre();