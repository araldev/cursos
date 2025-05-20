import { useMemo, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ sort }) {
  const [movies, setMovies] = useState([])
  const [errorMovies, setErrorMovies] = useState(null)
  const [loading, setLoading] = useState(false)

  const getMovies = async ({ search }) => {
    try {
      if (!search) return

      setMovies([])
      setErrorMovies(null)
      setLoading(true)

      // await new Promise(resolve => setTimeout(resolve, 2000)) /* Simulador de carga para que salga el loading */

      const newMovies = await searchMovies({ search })

      if (!newMovies) throw new Error('Introduce una película')

      setMovies(newMovies.mappedMovies)
    } catch (error) {
      setErrorMovies(error.message)
    } finally {
      setLoading(false)
    }
  }

  const sortedMovies = useMemo(() => {
    if (!movies) return
    console.log(sort)

    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, errorMovies, loading }
}
