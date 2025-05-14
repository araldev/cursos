const lenguajes= [] // Por como funciona TS le estamos diciendo que el array siempre será never. es decir estará vacío

// Por lo tanto hay que tipear correctamente el array
const languages: string[] = [] // Ahora le decimos que el array es de tipo string

languages.push('JavaScript')
languages.push('Python')
languages.push('Java')  

const mascotas: Array<string> = [] // Otra forma de declarar un array de strings

mascotas.push('Perro')
mascotas.push('Gato')
mascotas.push('Loro')

// Se suele recomendar el primer tipo de array, pero es cuestión de preferencias

// Supongamos que queremos admitir strings y numbers, un error muy común es el siguiente

const alphanumericExample: string[] | number[] = [] // Esto es incorrecto, ya que le estamos diciendo que es completamente un array de strings o un array de numbers, pero no ambos a la vez

const alphanumeric: (string | number)[] = [] // Esta es la sintaxis correcta

alphanumeric.push('Hola')
alphanumeric.push(1)

// Obviamente podemos tipar con Type creados por nosotros mismos

type Alphanumeric = string | number
const alphanumeric2: Alphanumeric[] = [] // Esto es mucho más práctico