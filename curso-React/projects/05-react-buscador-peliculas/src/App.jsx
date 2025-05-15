import './App.css'
import responseMovies from './mocks/with-results.json'
import withOutResults from './mocks/no-results.json'

import { Movies } from './components/movies'

// const API_KEY = '871c3212'
// const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${film}`

export default function App () {
  const movies = responseMovies.Search
  const error = withOutResults.Error

  return (
    <div className='page'>
      <h1>Buscador de Películas</h1>
      <header>
        <form>
          <input type='text' placeholder='Avengers, Titanic, Star Wars...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} error={error} />
      </main>
    </div>
  )
}
