const usuarios = [
    { id: 1, name: 'Chanchito'},
    { id: 3, name: 'Chanchito'},
    { id: 2, name: 'Feliz'},
];

// const resultado = usuarios.indexOf({ id: 1, name: 'Chanchito'});

//.find me devuelve el primer elemento que cumpla con lo que buscamos.
//a este tipo de funciones que pasamos como argumentos a otros metodos se les llama predicate: funcion que devuelve true o false.
const resultado = usuarios.find(function(usuario) {
    return usuario.name === 'Chanchito';
});
console.log(resultado);


//el ejemplo de arriba en arrow function:
const resultado2 = usuarios.find(usuario =>
    usuario.name === 'Chanchito');

console.log(resultado2);

//.findIndex me devuelve el indice en lugar del objeto.
const resultado3 = usuarios.findIndex(usuario =>
    usuario.name === 'Chanchito');

console.log(resultado3);