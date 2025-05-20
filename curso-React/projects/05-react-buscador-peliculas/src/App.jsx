import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
// import { useDebounce } from './hooks/useDebounce.js'
import { debounce } from './services/debounce.js'
import { Movies } from './components/Movies.jsx'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function App () {
  const { search, setSearch, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, errorMovies, loading } = useMovies({ sort })
  const lastSearch = useRef(null)

  // Forma controlada de manejar el <Form />
  async function handleChange (event) {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const debounceGetMovies = useCallback(
    debounce(newSearch => getMovies({ search: newSearch }), 300),
    []
  )

  useEffect(() => {
    debounceGetMovies.cancel()
  }, [])

  // Debounce con Custom Hook
  // useDebounce({
  //   fn: getMovies,
  //   delay: 300,
  //   deps: [search]
  // })

  function handleSort () {
    setSort(!sort)
  }

  function handleSubmit (event) {
    event.preventDefault()

    if (search === lastSearch.current) return
    lastSearch.current = search
    getMovies({ search })
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
            onChange={handleChange}
            value={search}
            type='text'
            placeholder='Avengers, Titanic, Star Wars...'
          />
          <button type='submit'>Buscar</button>
          <input type='checkbox' onChange={handleSort} checked={sort} />
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} error={errorMovies} loading={loading} />
      </main>
    </div>
  )
}
