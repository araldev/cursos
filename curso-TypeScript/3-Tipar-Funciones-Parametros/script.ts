// Ahora será conveniente fusionar callbacks con funciones flecha

// No es correcto decir que: fn:Function (esto es demasiado general, es el any de las funciones)
// const  sayHiFromFunction = (fn:Function) => {
//     fn('Ignacio')
// }

// Acá le estamos diciendo que la función que le pasamos como argumento es una función que recibe un string y no devuelve nada
const  sayHiFromFunction = (fn: (name:string) => void) => {
    fn('Ignacio')
}

sayHiFromFunction((name:string) => {
    console.log(`Hola ${name}`)
})

// En este caso, la función flecha tiene como argumento a otra función, fn le pasará el parámetro de name a la función flecha

// Tipar funciones flecha es exactamente igual que tipar funciones normales

// No hace falta poner el tipo de retorno, ya que TypeScript lo infiere, en este caso solo se pone con motivos didácticos

const sumar = (a:number, b:number):number => {
    return a + b
}

// Otra forma de tipar una función flecha es la siguiente
const restar: (a:number, b:number) => number = (a, b) => {
    return a - b
}

sumar(1, 2)
restar(1, 2)