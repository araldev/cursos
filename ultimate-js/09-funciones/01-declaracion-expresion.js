console.log(resta); //Hoisting -> Izar o levantar
//Declaracion de funciones: Function Declaration

//Funcion nombrada -> Named function
function suma() {
    console.log('sumando...');
}

//Funcion anonima -> Anonymous function
// function () {
//     console.log('funcion anónima');
// }

//Expresion de funciones -> function expression
//Expresion de funcion anonima
const resta = function () { //Anonymous function expression
    console.log('restando');
}

const multiplica = function multi () { //Named function expression
    console.log('multiplicando');
}

const divide = () => { // arrow function es siempre es anonima
    console.log('dividiendo');
}