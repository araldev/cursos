// SUpongamos que queremos una id opcional, la haremos numeber, y en el caso de que la tengamos la queremos volver un String

type Hero = {
    name: string
    age: number
    isActive?: boolean
    id?: number
}


function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return {name, age, isActive: true}
}

const hero1 = createHero({ name: 'Iron Man', age: 45 })

hero1.id?.toString() // Optional chaining operator

// El operador de encadenamiento opcional (?.) permite acceder a propiedades de un objeto que pueden no existir sin lanzar un error.
// Si no existe el id, no se ejecuta el toString
// Si existe, se ejecuta el toString