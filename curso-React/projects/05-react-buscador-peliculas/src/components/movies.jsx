function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <small>{movie.Year}</small>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))
        }
    </ul>
  )
}

function NoMoviesResult ({ error }) {
  return (
    <p>{error}</p>
  )
}

export function Movies ({ movies, error }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResult error={error} />
  )
}
