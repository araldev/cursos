// Algo recopado es que podemos usar tipos en base a estructuras previas, supongamos

const addres = {
    planet: 'Earth',
    city: 'New York'
}

// En TS typeof es mucho más versatil
type Adress = typeof addres
const addressTwitch: Adress = {
    planet: 'Earth',
    city: 'New York'
}