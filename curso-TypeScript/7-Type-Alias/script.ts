// Usaremos los Type Alias para hacer una función que cree heroes

// Nota usamos la convención PascalCase
type Hero = {
    name: string,
    age: number
}

// Acá le especificamos el tipo de retorno de la función, en este caso un Hero
function createHero(name: string, age: number): Hero {
    return { name, age }
}

const hero1 = createHero('Superman', 30)

// Otra alternativa para evitar de ser repetitivo con los tipos de los atributos es la siguiente:

function createHero2(hero: Hero): Hero {
    const {name, age} = hero
    return { name, age }
}

const hero2 = createHero2({ name: 'Batman', age: 35 })