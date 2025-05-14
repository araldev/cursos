let arr1 = [1, 2];
let arr2 = [3, 4];

//.concat() se usar para concatenar (unir) dos arrays, creando una nueva variable.
let combinados = arr1.concat(arr2);
// console.log(combinados, arr1, arr2);

let divididos = combinados.slice(1, 3); //para crear una nueva variable desde el indice que le pasemos hasta el otro que le pasemos sin inlcuir el ultimo.
let divididos2 = combinados.slice(1);  //para crear una nueva variable desde el indice que le pasemos hasta el final.
let divididos3 = combinados.slice();  //si no le indicamos ninguna valor creara una copia por referencia del array.

console.log(divididos, divididos2, divididos3);