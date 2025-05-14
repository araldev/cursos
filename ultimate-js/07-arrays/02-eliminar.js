const letras = ['a', 'b', 'c', 'd'];
const letras1 = ['a', 'b', 'c', 'd'];
console.log(letras, letras1)

//eliminar final
// const final = letras.pop(); //sacar el ultimo elemento de un array, asignarle este elemento a una variable.
// console.log(final, letras);

//eliminar comienzo
// const comienzo = letras.shift();
// console.log(comienzo, letras);

console.log('splice:')
// eliminar entremedio
// splice modifica el array original y devuelve a un nuevo array los valores eliminados.
let modLetras = letras.splice(1, 2);
console.log(letras);
console.log(modLetras);

console.log('slice')
// no modifica el array original pero crea una nueva copia del array con los valores indicados.
// primer argumento desde el indice que va a copiar, segundo argumento hasta el indice que va a copiar.
let modLetras1 = letras1.slice(0, -1); // si es -1 le indicamos que llegue hasta el último sin contar este.
console.log(letras1);
console.log(modLetras1);
