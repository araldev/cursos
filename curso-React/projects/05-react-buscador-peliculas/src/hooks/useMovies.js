import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [errorMovies, setErrorMovies] = useState(null)
  const [loading, setLoading] = useState(false)

  const getMovies = async () => {
    try {
      setMovies(null)
      setLoading(true)

      // await new Promise(resolve => setTimeout(resolve, 2000)) /* Simulador de carga para que salga el loading */

      const newMovies = await searchMovies({ search })
      setErrorMovies(newMovies.errorMovies)
      setMovies(newMovies.mappedMovies)
    } catch (error) {
      setErrorMovies(error)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, errorMovies, loading }
}
