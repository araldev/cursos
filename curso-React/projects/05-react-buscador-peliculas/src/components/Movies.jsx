function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <small>{movie.year}</small>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
        }
    </ul>
  )
}

function NoMoviesResult ({ error }) {
  return (
    <p style={{ color: 'red' }}>{error}</p>
  )
}

function LoadingElement () {
  return (
    <div id='loading' />
  )
}

export function Movies ({ movies, error, loading }) {
  const hasMovies = movies?.length > 0

  return (
    <>
      {loading === true && <LoadingElement />}
      {hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResult error={error} />}
    </>
  )
}
