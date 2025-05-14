/**
 * Las funciones son objetos de primera clase:
 * esto significa que tienen propiedades como los objetos
 * y que podemos asignarlas a otras variables u otras constantes,
 * además las podemos pasar como argumentos a otras funciones.
 * Las funciones tambien pueden ser retornadas en JS.
*/

function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U('Nicolas');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

function returned() {
    return function() {
        console.log('Hola Mundo');
    }
}

let saludo = returned();

saludo();