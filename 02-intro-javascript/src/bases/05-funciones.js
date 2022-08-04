// Funciones

// // Mala idea
// function saludar(nombre) {
//     return `Hola, ${nombre}`   
// }

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;


console.log(saludar('Francisco'));
console.log(saludar2('Francisco'));
console.log(saludar3('Francisco'));

console.log(saludar);


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Franchesco',
    }
}

// return implicito
const getUser2 = () => ({
    uid: 'ABC123',
    username: 'Franchesco',
})

console.log(getUser());
console.log(getUser2());

// Tarea
// 1. Transformar a una funcion flecha
// 2. Retornar Objeto implicito
// 3. Pruebas
function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC123',
        username: nombre,
    }
}

const usuarioActivo = getUsuarioActivo('Francisco')
console.log(usuarioActivo);

// resolve
const getUsuarioActivo2 = ( nombre ) => ({
    uid: 'ABC123',
    username: nombre,
})

const usuarioActivo2 = getUsuarioActivo2('Pedro')
console.log(usuarioActivo2);