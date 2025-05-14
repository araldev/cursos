const ahora = new Date();
// console.log(ahora);
const fecha = new Date('December 11 1986 14:15 GMT-0300'); //usando formato EE.UU podemos indicar la fecha que queramos (Mes, Día, Año).
console.log(fecha);

const fecha2 = new Date(1986, 11, 25, 14, 15); //tambien podemos indicar la fecha con argumentos directamente (Año, Mes(0=enero/11=diciembre), Dia, Hora, Minuto).
const fecha3 = new Date(1986, 11, 25, 14+15, 15); 
console.log(fecha3);

console.log('datestrings', fecha3.toDateString()); //para ver la fecha en un formato mas visual.
console.log('ISOstrings', fecha3.toISOString()); //este formato de fecha es el que se usa cuando se envian fechas desde el cliente a un servidor, es mas facil de almacenar y transformar.
console.log('timestrings', fecha3.toTimeString()); //para ver la hora.

// fecha3.get para obtener informacion de la fecha.
// fecha3.set para cambiar informacion de la fecha.

fecha3.setFullYear(1978);
console.log(fecha3);
