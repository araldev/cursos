let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection, list);

// let item1 = collection.namedItem('chanchito');
// let item2 = collection.item(3);  // con este método hay que pasar el indice como en un array empieza por 0
// let item3 = collection[3];       // tambien podemos acceder al indice como si fuera un array, pero no es un array.

// collection.forEach(x => console.log(x));  --> Este método no funciona!!!

// iterar elementos 
// for (let el of collection)
//     console.log(el);

// Array.from(collection).forEach(x => console.log(x));  // Con esto nos muestra el objeto.
// [...collection].forEach(x => console.log(x));            // Con esto nos muestra solo el elemento.

// Métodos que contienen las NodeList
// let item1 = list.item(3);
// let item2 = list[3];

list.forEach(x => console.log(x));

// entries, keys y values: me devuelve iteradores, no arrays.

let entries = list.entries();
let keys = list.keys();
let values = list.values();
// Si necesitaramos todos los métodos de los arrays hacer destructuring de esta lista.
[...list].forEach(el => console.log(el));