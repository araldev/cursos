let counter = 0

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(response => {
      if (!response.ok) throw new Error('No se ha podido recuperar la cita')
      return response.json()
    })
    .then(data => {
      console.log(`CAT ENDPOINT RANDOM FACT Nº${++counter}`, data)
      const { fact } = data
      return fact
    })
    .catch(error => {
      // Si el error es de red antes de entrar al then
      if (error instanceof TypeError) return 'Falló la red'
      // Lanzamos el error que creamos
      return error.message
    })
}
