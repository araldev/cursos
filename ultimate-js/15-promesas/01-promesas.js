/** Promesas = al estado de una petición:
 *   Pendiente / Pending
 *   Rechazada / Rejected
 *   Terminada / Fulfilled
*/
//  Promesas se usan para:
//   -Consultas a las bases de datos.
//   -Peticiones a servidores.
//   -Webworkets: para realizar un calculo muy pesado para el explorador web.

let promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hola Mundo'), 1000);
});

promesa.then(
    valor => console.log(valor),  // Primer argumento es lo que se va a ejecutar en caso correcto.
    e => console.log('error', e),   // Segundo argumento es lo que se va a ejecutar en caso de error.
)