// function ordenar(texto, fn) {
//     let resultado = texto.toLowerCase()
//         .split('')
//         .filter(letra => letra !== ' ')
//         .sort()
//         .join('');

//     fn(resultado);
// }

function ordenar(texto, fn) {
    let resultado = texto
        .split('')
        .sort()
        .join('')
    fn(resultado);
}

ordenar('hola mundo', console.log);