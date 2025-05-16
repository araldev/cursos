import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import { Movies } from './components/Movies.jsx'
import { useRef } from 'react'

export default function App () {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, errorMovies, loading } = useMovies({ search })
  const lastSearch = useRef(null)

  // Forma controlada de manejar el <Form />
  function handleChange (event) {
    setSearch(event.target.value)
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
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} error={errorMovies} loading={loading} />
      </main>
    </div>
  )
}
