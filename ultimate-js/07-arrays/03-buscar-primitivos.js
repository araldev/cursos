const letras = ['a', 'b', 1, 'c', 'd', 1];

console.log(letras.indexOf('c')); //nos retorna el indice del elemento que buscamos.
console.log(letras.indexOf(1)); //nos retorna el primer resultado que encuentre con el mismo elemento.
console.log(letras.lastIndexOf(1)); //nos retorna el ultimo resultado que encuentre con el mismo elemento.
console.log(letras.indexOf(1, 3)) //el segundo argumento se usa para indicar desde que indice queremos empezar a buscar.

console.log(letras.indexOf(1) !== -1); //este metodo ya no se usa, es el mismo que el ejemplo de abajo.

console.log(letras.includes('d')); //me devuelve un boolean (true/false) si elemento existe dentro de la constante.
