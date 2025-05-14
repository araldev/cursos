// Supongamos que tenemos un atributo, que por x razón no queremos que sea alterado, bueno para eso podemos usar los conceptos de mutabilidad, en este caso podemos usar el modificador de acceso readonly, que nos permite definir un atributo como solo lectura, es decir no se puede modificar su valor una vez asignado.

type Hero = {
    name: string
    age: number
    isActive?: boolean
    readonly id?: number
}


function createHero(hero: Hero): Hero {
    const { name, age } = hero
    return {name, age, isActive: true}
}

const hero1 = createHero({ name: 'Iron Man', age: 45 })
// hero1.id = 323 // Error: Cannot assign to 'id' because it is a read-only property
hero1.id?.toString()

// Ojo, no lo estamos volviendo inmutable, solo estamos dando un error en caso de que se quiera alterar, para hacerlo inmutable habría que usar el Object.freeze de JS

// Acá si que es inmutable
const hero2 = Object.freeze({ name: 'Thor', age: 1000, isActive: false })

// En ambos caso TS lo detecta como algo de solo lectura, pero hay una diferencia de código en JS