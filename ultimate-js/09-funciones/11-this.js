// Dentro de un objeto: this hace referencia al objeto.
// En una función: this hace referencia al objeto window, global.
// Si se usa new hace referencia al objeto que será creado.

// const user = {
//     name: 'Nicolas',
//     login() {
//         console.log(this);
//     }
// };

// user.logout = function logout() {
//     console.log(this);
// }

// user.login();
// user.logout();


// function log() {
//     console.log(this);
// }

// log();


function Log(mensaje) {
    this.mensaje = mensaje;
    console.log(this);
}

// /**
//  * se crea un objeto literal.
//  * se vincula este objeto a this.
//  * se vincula el prototipo.
//  * si no retorna nada, entonces retorna this.
//  */
const l = new Log('Hola mundo');