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
    const result = await connection.query(
      'SELECT * FROM movies_with_genres;'
    )

    console.log(result)
  }

  static async getById ({ id }) {

  }

  static async create ({ input }) {

  }

  static async delete ({ id }) {

  }

  static async update ({ id, input }) {

  }
}
