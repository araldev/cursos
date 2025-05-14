// const numeros = [1, 2, 3, 4];

//.reduce recibe una funcion con 2 parametros, el primero es un acumulador (acc) y el segundo el elemento(el) y al final de la funcion indicamos el valor inicial del acumulador.
// const suma = numeros.reduce((acc, el) => {
//     return acc + el;
// }, 0);

// console.log(suma);


// let anidado = [[1, 2], 3, [4, 5]];
// const plano = anidado
//     .reduce((acc, el) => acc.concat(el), []);

// console.log(plano);


const usuarios = [
    { edad: 17, nombre: 'Nico'},
    { edad: 13, nombre: 'Chanchito'},
    { edad: 25, nombre: 'Felipe'},
    { edad: 32, nombre: 'Fernanda'},
];

const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {})

console.log(indexado);