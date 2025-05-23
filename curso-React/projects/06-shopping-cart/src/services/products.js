const API_URL = 'https://dummyjson.com/products'

export function initialProducts () {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) throw new Error('No se ha podido acceder a la lista de productos')
      return response.json()
    })
    .then(data => data.products)
    .catch(error => {
      if (error instanceof TypeError) throw new Error('Se ha perdido la conexión')
      return error.message
    })
}
