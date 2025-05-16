const API_KEY = '871c3212'

export async function searchMovies ({ search }) {
  if (search === '') return null

  if (search) {
    return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
      .then(response => {
        if (!response.ok) throw new Error('No se pudo buscar la película')
        return response.json()
      })
      .then(listMovies => {
        const movies = listMovies.Search
        const errorMovies = listMovies.Error
        const mappedMovies = movies?.map(movie => {
          return {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
          }
        })

        return { mappedMovies, errorMovies }
      })
      .catch(error => {
        if (error instanceof TypeError) throw new Error('Se perdió la conexión')
        throw new Error(error.message)
      })
  }
}
