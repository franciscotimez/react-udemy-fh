// Arreglos JS

// const arreglo = new Array(15);
const arreglo = [1, 2, 3];

// Push edita el objeto original
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo, 5];

let arreglo3 = arreglo2.map((numero) => {
    return numero * 2;
});

console.log(arreglo3);
console.log(arreglo2);
console.log(arreglo);