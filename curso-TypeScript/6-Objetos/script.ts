const hero = {
    name: 'Batman',
    age: 35,
}

// Esto no se puede hacer
// hero.name = 1212
// hero.power = 'money'

// Supongamos que queremos hacer una función para crear heroes
function createHero(name: string, age: number) {
    return {
        name,
        age,
    }
}

const thor = createHero('Thor', 1000)

// El problema de esto es que no sabemos si thor será tipo hero, parece el mismo,
// pero no podemos estar seguros de que sea el mismo tipo, para eso usamos los Type Alias