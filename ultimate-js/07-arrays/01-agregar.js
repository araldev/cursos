const letras = ['a', 'b'];

// agregar al final del array.
letras.push('c', 'd');

//agregar al comienzo.
letras.unshift('y', 'z');

// para agregar delante del indice que elijamos,
// el primer valor es el indice, el segundo cuantos elementos
// queremos eliminar y el resto lo que queremos agregar.
letras.splice(3, 0, 1, 1);

console.log(letras);