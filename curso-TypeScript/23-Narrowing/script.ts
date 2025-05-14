// En TypeScript, "narrowing" (o "estrechamiento" en español) es el proceso de restringir el tipo de una variable a un tipo más específico dentro de un contexto determinado, basándose en comprobaciones o condiciones en tiempo de ejecución. Es decir, se pasa de un tipo más general (por ejemplo, string | number) a uno más concreto (por ejemplo, string). 

// Supongamos
// function mostrarLongitud (objeto: number|string) {
//     return objeto.length;.
// }

// mostrarLongitud('1')

// Si bien length podría usarse en un contexto no podrías usarse en otro

function mostrarLongitud (objeto: number|string) {
    if (typeof objeto === 'string') {
        return objeto.length;
    } else {
        return objeto.toString().length;
    }
}

// Es como el instanceof pero hacemos la verificación con un tipo

mostrarLongitud('2')

// Otro ejemplo

interface Mario {
    company: 'Nintendo'
    nombre: string
    saltar:() => void
}

interface Sonic {
    company: 'Sega'
    nombre: string
    correr:() => void
}

type Personaje = Mario | Sonic

// Esto es el type guard, damos por sentado que es un personaje de tipo Mario o Sonic, si lo es tiene el método por lo tanto devolverá true
function checkIsMario(personaje: Personaje): personaje is Mario {
    return (personaje as Mario).saltar !== undefined
}

function checkIsSonic(personaje: Personaje): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined
}

function jugar(personaje: Personaje) {
    console.log(personaje.nombre) // Como es común en ambos si se puede obtener independientemente del caso, pero para saltar y correr se debe verificar que tipo es:

    // Esto no es válido
    // if (typeof personaje.correr === 'function') {
    //     personaje.correr()
    // }

    // Podemos usar a company como diferenciador, pero esto no es muy general
    // if (personaje.company === 'Nintendo') {
    //     personaje.saltar()
    // }
    // else if (personaje.company === 'Sega') {
    //     personaje.correr()
    // }

    // Para hacer algo más general podemos usar un type guard
    // NOTA: En medida de lo posible esto hay que evitarlo
    if (checkIsMario(personaje)) {
        personaje.saltar()
    } else if (checkIsSonic(personaje)) {
        personaje.correr()
    }
}