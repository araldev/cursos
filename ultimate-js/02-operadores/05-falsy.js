// short-circuit

// Falso
// false
// 0
// ''
// null
// undefined
// NaN

// El operador or || devuelve el primer elemento que evalua en true,
// y si todos son false devuelve el último.
let nombre = 'Chanchito feliz';
let username = nombre || 'Anonimo';
console.log(username);


function fn1(){
    console.log('soy funcion 1');
    return false;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}

// Con el operador && necesitamos que devuelva true la primera logica
// para pasar a la siguiente y siempre devuelve la última que ha evaluado.
let x = fn1() && fn2();