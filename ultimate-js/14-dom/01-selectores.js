// Nos permiten seleccionar elementos que se encuentran dentro de nuestros documentos HTML
// document. nos permite realizar todas las manipulaciones que necesitemos del archivo HTML

// HTMLElement  nos devuelve un solo elemento HTML
let htmlElement = document.getElementById('cuerpo');

// HTMLCollection -> se parece a un array pero no lo es! Con este podemos obtener elementos por su clase de CSS
let elementosRed = document.getElementsByClassName('red');

// NodeList   no siempre va a sincronizar con los cambios que hagamos en el DOM
let elementosChanchito = document.getElementsByName("chanchito");

// HTMLCollection  siempre refleja los ultimos cambios que tiene el DOM
let parrafos = document.getElementsByTagName('p');

// Estos dos últimos métodos son lentos, van a buscar a lo largo de todo el documento y 
// los de arriba van a buscar a los índices.

// HTMLElement '#para buscar por id'  '.para buscar por clase de CSS' para buscar por etiqueta pasar el nombre de la etiqueta ej: 'p'
let el = document.querySelector('#cuerpo');
// NodeList  nos devuelve todos los elementos que encuentre que le pasemos
let els = document.querySelectorAll('p');

let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive, pstatic);

let nuevoP = document.createElement('p');
document.body.append(nuevoP);

console.log(plive, pstatic);