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

  }

  static async delete ({ id }) {

  }

  static async update ({ id, input }) {

  }
}
