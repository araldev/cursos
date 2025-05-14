let arr1 = ['Nicolas', 'Chanchito', 'Felipe'];

//para unir todo el array.(en un string por ejemplo).
let mensaje = arr1.join(', '); //al unir el array va a separar cada valor por , y espacio.(es opcional).
// console.log(mensaje);

//para separar en array.
let saludo = "Hola mundo! desde NZ";
let dividido = saludo.split(" "); // al pasarle el espacio en blanco por cada espacio va a detectar un array.(es obligatorio).
// console.log(dividido);

//para crear una URL: para juntar los espacios se puede usar - _ /
console.log(dividido.join('-'));