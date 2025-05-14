// function hola() {
//     return 'Hola Mundo';
// }

//el return implicito solo nos sirve si la funcion es de una sola linea, para mas lineas hay que escribir el return y las llave dentro de la funcion.
const hola = () =>'Hola mundo';
const hola2 = mensaje => mensaje + 'Hola mundo';
const hola3 = (mensaje, parametro2) => mensaje + 'Hola mundo';

const hola4 = mensaje => {
    return mensaje + 'Hola mundo';
}

const resultado = hola('Chanchito Feliz');

console.log(resultado);