function createAddress() {
    return {
        planet: 'Earth',
        city: 'New York',
    }
}

// Esto es recopado, porque estamos generalizando un tipo en base a lo que retorna una función
type Address = ReturnType<typeof createAddress>;