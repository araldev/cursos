// En las funciones si que es necesario específicar los tipos
function saludar(nombre:string) :string {
    return `Hola ${nombre}`
}

saludar('Pepe')

// Tanto el nombre como la edad siguen siendo any, esta no es la forma de especificar el tipado de un objeto
// function saludar2({nombre: string, edad: number}) :string {
//     return `Hola ${nombre}, tienes ${edad} años`
// }

// Lo anterior esta mal porque se esta entrando en un conflicto con JS, ya que en JS se suele colocar el valor del atributo de un objeto con el ":", por lo tanto no se puede usar el ":" para especificar el tipo de dato (en el caso de los objetos)

// Para solucionar esto podemos hacer lo siguiente
function saludo({name, age}: {name: string, age: number}) :string {
    return `Hola ${name}, tienes ${age} años`
}

saludo({name: 'Pepe', age: 25})

// Podemos poner el objeto con sus valores y después desempaquetar los valores
function saludo2(persona: {name: string, age: number}) :string {
    const {name, age} = persona // En esta línea estamos desempaquetando el objeto persona, para poder usar a name y age
    return `Hola ${name}, tienes ${age} años`

}

saludo2({name: 'Pepe', age: 25})

// Otra forma es la siguiente, creando el tipo de dato antes de la función

// En este caso estamos creando un tipo de dato llamado Persona, que tiene dos atributos, name y age, para poder usarlo en la función saludo2

// Esto es una buena práctica, ya que si en el futuro queremos usar el mismo tipo de dato en otra función, no tenemos que volver a escribirlo
type Persona = {
    name: string,
    age: number
}
function saludo3({name, age}: Persona) :string {
    return `Hola ${name}, tienes ${age} años`
}
saludo3({name: 'Pepe', age: 25})

// ALgo curisoso es que en los casos anteriores no era necesario especificar el tipo de la función ya que siempre devolvemos una cadena

// E Incluso no necesitamos espcificarlo si lo que retornamos ya tiene un tipado específico, por ejemplo

// Use una función flecha para hacerlo más corto

const sum = (a: number, b: number) => a + b // number
// En este caso Typescript infiere que la función sum es de tipo number, ya que estamos retornando la suma de dos number

let number = sum(2, 3) // number
// number será de tipo number