// Normalmente en JS, al crear variables no solemos decir de que tipo son, JS asume eso, ejm:

let a = 'hola' // string
// a = 2 // number
console.log(a) // hola
// En TS, al crear una variable, le decimos de que tipo es, y no puede cambiar, por lo tanto esta variable no puede cambiar a number

// Typescript es un superconjunto de JS, por lo tanto, todo lo que se puede hacer en JS, se puede hacer en TS

// La ventaja de TS consiste en su superior sistema de tipos, que permite detectar errores en tiempo de compilación, en lugar de en tiempo de ejecución

// Supongamos una función suma en JS:

// function suma(a, b) {
//     return a + b
// }

// Acá lo que creemos que pasa es que es una función que suma dos números, pero no necesariamente es así, ya que si pasamos una cadena terminariamos concatetando, y no sumando

// En JS no hay forma de saber si a y b son números, por lo tanto, no podemos confiar en que la función suma siempre va a sumar dos números

// En TS, podemos definir el tipo de los parámetros de la función, y el tipo de retorno de la función

function suma(a: number, b: number): number {
    return a + b
}

suma(2, 3) // 5

// Vale la pena recalcar, Typescript hace todo esto en tiempo de compilación, no de ejecución
// Por lo tanto, si pasamos un string a la función, nos va a tirar un error en tiempo de compilación
// suma('2', '3') // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Algunos ejemplos con tipos primitivos
// string, number, boolean, Date, Array, Object
const nombre: string = 'Ignacio' // string
const edad: number = 25 // number
const esDesarrollador: boolean = true // boolean
const fechaNacimiento: Date = new Date('2005-07-21') // Date
const comidaFavorita: string[] = ['milanesa', 'arroz', 'sopa'] // Array de strings
const librosFavoritos: Array<string> = ['El principito', '1984', 'El señor de los anillos'] // Array de strings

// Un consejo es no declarar los tipos a no ser que sea necesario, de resto que Typescript lo infiera

// En estos casos Typescript ya que no puede inferir el tipo, le dará como tipo any a la variable b, esto no suele ser buena práctica

let b

// También esta el tipo unknown, que es un tipo más seguro que any, ya que no permite asignar cualquier tipo de dato a una variable de tipo unknown, a menos que se haga una verificación de tipo
let c: unknown
c = 2
c = 'hola'
c = true

// En estos casos sencillo Typescript si puede inferir los tipos
const persona = {name: 'Ignacio', edad: 25, esDesarrollador: true}
console.log(persona.name) // Ignacio

// En cualquier caso se lo podemos especificar
// const persona2: {name: string, edad: number, esDesarrollador: boolean} = {
//     name: 'Ignacio',
//     edad: 25,   
//     esDesarrollador: true
// }

// console.log(persona2.name) // Ignacio

// inferencia

const n1=2
const n2=3
const n3= n1+n2 // number
// n3 será number}

let cadena = "Hola soy homero chino"
cadena.toLowerCase() // Typescript lo recomienda como un método de manera inmediata ya que reconoce que es un string

let obj: any = {x : 0}

obj.foo()
obj()
obj.bar = 100
obj = 'hola'
const n: number = obj // Error: Type 'string' is not assignable to type 'number'.