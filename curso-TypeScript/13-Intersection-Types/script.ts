// Intersection Types. En TypeScript, los "insertion types" (tipos de inserción) se refieren principalmente a los tipos de unión (union types) y los tipos de intersección (intersection types). Estos tipos permiten construir nuevos tipos a partir de los existentes, ampliando las posibilidades de tipado y facilitando la gestión de la complejidad en el código. 

type HeroId = `${string}-${string}-${string}-${string}-${string}`

type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// Supongamos que queremos diferenciar los atributos inputs de los demás
type HeroBasicInfo = {
    name: string
    age: number
}

// Para evitar tenerlo deos veces declarado podemos hacer lo siguiente
// type Hero = {
//     readonly id?: HeroId
//     name: string
//     age: number
//     isActive?: boolean
//     powerScale?: HeroPowerScale
// }

type HeroProperties = {
    readonly id?: HeroId
    isActive?: boolean
    powerScale?: HeroPowerScale
}

// Naturalmente no es bueno interceptar si hay dos propiedades iguales

// Y ahora podemos hacer una intersección de tipos
type Hero = HeroBasicInfo & HeroProperties

// function createHero(hero: Hero): Hero {
//     const { name, age } = hero
//     return {
//         id: crypto.randomUUID(),
//         name,
//         age,
//         isActive: true
//     }
// }

// Podemos crear un tipo de función que reciba un HeroInput y devuelva un Hero
function createHero(input: HeroBasicInfo): Hero {
    const { name, age } = input
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

const spiderman = createHero({ name: 'Peter Parker', age: 25 })
spiderman.powerScale = 'local'