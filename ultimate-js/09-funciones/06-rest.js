// function suma(a, b,) {
//     console.log(arguments);
// }

// suma(1, 2, 3, 4,);


// function suma(a, b, ...rest) {
//     console.log(rest);
// }

// suma(1, 2, 3, 4, 5, 6);



const suma = (a, b, ...rest) => {
    console.log(rest);
}

// suma(1, 2, 3, 4, 5, 6);


const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}

// logMsg('Servidor', 'Error 1', 'Petición aceptada', 'Socket activo');
let mensajes = ['Error 1', 'Petición aceptada', 'Socket activo'];
logMsg('Cliente móvil:', ...mensajes, 'Otro error!'); //la diferencia entre el ...rest y el spread operator(...) es que detras del spread podemos agregar mas argumentos despues.