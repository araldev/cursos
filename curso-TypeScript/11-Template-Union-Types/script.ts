// Los Template Union Types son una forma de crear tipos que combinan diferentes tipos de datos en una sola estructura.

type HeroId = `${string}-${string}-${string}-${string}-${string}`

// Ahora la id tiene ese formato, que la función crypto.randomUUID() devuelve, por lo tanto si se le trata de dar otro formato este será invalido
// El tipo HeroId es un string que tiene el formato de un UUID (Universally Unique Identifier).

type Hero = {
    readonly id?: HeroId
    name: string
    age: number
    isActive?: boolean
}

function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

const spiderman = createHero({ name: 'Peter Parker', age: 25 })

// Como programadores es bueno para no olvidar formatos, poe ejemplo, si usamos colores en variables siempre deberían llevar '#', entoneces podemos validarlo de la siguiente manera
type HexadecimalColor = `#${string}`
const color: HexadecimalColor = '#000000' // Esto es correcto
// const color2: HexadecimalColor = '000000' // Esto es incorrecto porque no tiene el '#' al inicio

// NOTA: TS no es para validadción de datos, ya que es en tiempo de compilación

// Un valor opcional por defecto se puede hacer así

// spiderman.id ?? 'No tiene id'