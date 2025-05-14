// Union Types. En TypeScript, un tipo de unión (Union Type) permite que una variable o función acepte valores de diferentes tipos. Se define usando el operador | (barra vertical) entre los tipos permitidos.

type HeroId2 = `${string}-${string}-${string}-${string}-${string}`

// Supongamos que estamos haciendo una escala de poder para los heroes
// Estos serían los tipos permitidos en la escala de poder
type HeroPowerScale2 = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// Esto aplica también para las variables, de manera fácil, esto es una unión de tipos

let aa: number | string | boolean
aa = 1
a = '1'
aa = true

// Se pueden usar valores también (solo aceptará esos valores)
let binary: 0 | 1
binary = 0
binary = 1

type Hero2 = {
    readonly id?: HeroId2
    name: string
    age: number
    isActive?: boolean
    powerScale?: HeroPowerScale2
}

function createHero3(hero: Hero2): Hero2 {
    const { name, age } = hero
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

const spiderman2 = createHero3({ name: 'Peter Parker', age: 25 })
spiderman2.powerScale = 'local'