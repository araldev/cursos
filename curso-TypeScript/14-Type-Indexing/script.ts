// Para acceder a un tipo mediante un índice usamos el concepto de Type Indexing. Esto nos permite acceder a un tipo específico dentro de un objeto o una interfaz utilizando una clave o un índice. En TypeScript, esto se logra mediante el uso de corchetes y el nombre del tipo que queremos acceder.

type HeroId = `${string}-${string}-${string}-${string}-${string}`

type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

type HeroBasicInfo = {
    name: string
    age: number
}

type HeroProperties = {
    readonly id?: HeroId
    isActive?: boolean
    powerScale?: HeroPowerScale
    address?: {
        planet: string
        city: string
    }
}

type Hero = HeroBasicInfo & HeroProperties

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

// Aća estariamos accediendo mediante el Type Indexing a la propiedad address de la interfaz Hero
const addressHero: Hero['address'] = {
    planet: 'Earth',
    city: 'New York'
}