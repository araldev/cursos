/**
 * No podemos cambiar el valor de la constante (ej: objeto a otro tipo de valor),
 * pero si añadir o eliminar caracteristicas del objeto.
 */

const user = { id: 1, };

user.name = 'Nicolas';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

/**
 * Si queremos que el objeto no se pueda modificar (propiedades, ni valores)
 * usaremos el metodo de Object.freeze
 */

// const user1 = Object.freeze({ id: 1});
// user1.name = 'Nico';
// user1.id = 2;
// console.log(user1);

/**
 * Si queremos poder cambiar los valores a las propiedades que ya tiene
 * pero no agregarle o quitarle propiedades podemos utilizar
 * Object.seal
 */

const user1 = Object.seal({ id: 1});
user1.name = 'Nico';
user1.id = 2;
console.log(user1);