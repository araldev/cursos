import mysql from 'mysql2/promise'
import 'dotenv/config'

const config = {
  host: '172.24.32.1', // al tener la db en window y hacer la peticion en wsl no puedo acceder por socket o con localhost
  port: 3306,
  user: 'arturo',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: 'movies_db'
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static async getAll ({ genre }) {
    if (genre) {
      const lowerCaseGenre = genre.toLowerCase()

      // get genre ids from database table using genre names
      const [genres] = await connection.query(
        'SELECT genre_id, genre FROM genres WHERE LOWER(genre) = ?;', [lowerCaseGenre]
      )

      // no genre found
      if (genres.length === 0) return []

      // get the id from the first genre result
      // const [{ genre_id }] = genres

      // get all movies ids from databa table
      // la query a movie_genres
      // join
      // y devolver resultados
      return [] // para que no pete mientras
    }

    // Si no destructuramos el objeto que devuelve la query es un Array de 2 posiciones:
    // 1ª la consulta, 2ª el schema sql
    const [movies] = await connection.query(
      'SELECT * FROM movies_with_genres;'
    )

    return movies
  }

  static async getById ({ id }) {
    const [movie] = await connection.query(
      `SELECT *
      FROM movies_with_genres
      WHERE movie_id = ?;`,
      [id]
    )

    if (movie.length === 0) return null

    return movie[0]
  }

  static async create ({ input }) {
    if (!input) return null

    const { title, year, director, duration, poster, genre, rate } = input
    const movieId = crypto.randomUUID()

    // De esta manera creamos el UUID directamente en la
    // base de datos pero evitar una posible duplicación
    // const [uuidResult] = await connection.query('SELECT UUID() AS uuid;')
    // const [{ uuid }] = uuidResult

    try {
      const [movieExist] = await connection.query(
        'SELECT title FROM movies WHERE LOWER(title) = ?;',
        [title.toLowerCase()]
      )
      if (movieExist) throw Error()
    } catch (error) {
      // Evitar que este error lo vea el usuario, es un fallo de seguridad
      if (error) throw new Error('La película ya existe')
      // Enviar la traza a un servicio interno
      // Ej: Sendlog(error)
    }

    const genresId = []

    genre.forEach(async (eachGenre) => {
      const lowerCaseGenre = eachGenre.toLowerCase()

      try {
        const [genreId] = await connection.query(
          'SELECT genre_id FROM genres WHERE LOWER(genre) = ?;',
          [lowerCaseGenre]
        )

        const genreIdParse = genreId[0].genre_id

        if (genresId.includes(genreIdParse) || genreIdParse.length <= 0) return null

        genresId.push(genreIdParse)
      } catch (error) {
        if (error) throw new Error('No existe el género')
      }
    })

    try {
      await connection.query(
      `INSERT INTO movies (movie_id, title, year, director, duration, poster, rate)
      VALUES (UUID_TO_BIN(?, 1), ?, ?, ?, ?, ?, ?);`,
      [movieId, title, year, director, duration, poster, rate]
      )
    } catch (error) {
      if (error) throw new Error('No se pudo añadir la película')
    }

    try {
      genresId.forEach(async genreId => {
        await connection.query(
        `INSERT INTO movie_genres (movie_id, genre_id)
        VALUES (UUID_TO_BIN(?, 1), ?);`,
        [movieId, genreId]
        )
      })
    } catch (error) {
      if (error) throw new Error('No se pudo añadir género a la película')
    }

    return { message: 'Añadiste la película' }
  }

  static async delete ({ id: movieId }) {
    if (!movieId) throw new Error('Introduce una película para borrar')

    const [result] = await connection.query(
      `DELETE FROM movies
      WHERE BIN_TO_UUID(movie_id) = ?;`,
      [movieId]
    )

    console.log(result)

    if (result.affectedRows === 0) throw new Error('La película no existe')

    return { deleted: true }
  }

  static async update ({ id: movieId, input }) {
    if (!movieId) throw new Error('No existe esa película')

    // const { title, year, director, duration, poster, genre, rate } = input
  }
}
