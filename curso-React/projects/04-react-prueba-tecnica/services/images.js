let counter = 0

export const getRandomImage = ({ fact }) => {
  // const firstWord = fact.split(' ').splice(0, 3).join(' ')
  const threeFirstWords = fact.split(' ', 3).join(' ')

  return fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
    .then(response => {
      if (!response.ok) throw new Error('No se pudo obtener la imagen')
      return response.json()
    })
    .then(data => {
      console.log(`CAT ENDPOINT IMG URL Nº${++counter}`, data)
      const { url } = data
      return url
    })
    .catch(error => {
      // Si el error es de red antes de entrar al then
      if (error instanceof TypeError) return 'Falló la red'
      // Lanzamos el error que creamos
      return error.message
    })
}
