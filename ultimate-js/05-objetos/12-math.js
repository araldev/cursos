console.log(
    Math.PI, //devuelve el numero pi.
    Math.abs(-15), //devuelve el valor absoluto del numero.
    Math.round(15.5), //devuelve el valor redondeado del numero.
    Math.round(15.4),
    Math.floor(15.9), //redoundea siempre el valor hacia abajo.
    Math.ceil(15.000001), //redondea siempre hacia arriba.
    Math.pow(2, 3), //me devuelve la potencia de un numero.
    Math.sqrt(9), //me devuelve la raiz cuadrada.
);

console.log(Math.random()); //genera un numero aleatorio que siempre va a ser entre 0 y 1.

//si necesitamos un numero de porcentaje o un numero entre el 1 y el 10.
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandom(1, 10));