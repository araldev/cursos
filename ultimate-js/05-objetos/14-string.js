const saludo = "Hola Mundo!";

const despedida = new String("Chao mundo :(");
console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length); //nos devuelve la longitud del string (es 11 este caso).
console.log(saludo.indexOf("Mu")); //nos devuelve el indice de lo que buscamos, se empieza a contar en los strings desde 0. Si no encuentra el texto devuelve -1.

// para verificar que un texto se encuentre dentro de donde lo estas buscando, ya que si no lo encuentra devuelve -1 y comparamos con = o mas que 0.
if (saludo.indexOf("Mu") >= 0) {

}

console.log(saludo.includes("Mundo")); // a diferencia del indexOf devuelve true o false no el indice.
let nuevoSaludo = saludo.replace("Mundo", "Nicolas"); // Es necesario crear una nueva variable para guardar el cambio al llamar a la primera varaible.
//console.log(saludo.replace("Mundo", "Nicolas", saludo)); //para reemplazar un string por otro, el primero es el que se reemplaza.
console.log(nuevoSaludo, saludo);
console.log(saludo.toLowerCase()); //pasa todo el texto a minusculas.
console.log(saludo.toUpperCase()); //pasa todo el texto a mayusculas.

console.log(saludo.slice(0, 4)); // funciona con indices, recibe dos argumentos empieza con el indice 0 y el segundo es el indice final, el indice final no incluye ese caracter para imprimirlo.
console.log(saludo.substring(0, 4)); // funciona con indices, recibe dos argumentos empieza con el indice 0 y el segundo es el indice final, el indice final no incluye ese caracter para imprimirlo.
console.log(saludo.substr(2, 4)); //No se usa. Deprecado!

const espacios = "   Hola   Mundo!  ";
console.log(espacios.trim()); //se encarga de quitar los espacios (end solo los del final, start los del principio). No quita los espacios del medio.