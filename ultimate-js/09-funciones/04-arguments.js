// function suma(a, b) {
//     return a + b; //1 + undefined
// }

// console.log(suma(1)); //return Nan (Not a Number)

//Arguments es un objeto no un array.
function suma(a, b) {
    return Array.from(arguments)
        .reduce((acc, el) => acc + el);
//     let total = 0;
//     for (let valor of arguments) {
//         total += valor; //esto es la abreviatura de esto otro: total = total + valor;
    }
//     return total;
// }

console.log(suma(1, 2, 3, 4));