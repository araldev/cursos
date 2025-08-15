// import { MovieModel } from '../models/local-file-system/movies.js'
// import { MovieModel } from '../models/mongodb/movies.js'
// import { MovieModel } from '../models/mysql/movies.js'
import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class MovieController {
  constructor ({ movieModel }) {
    this.movieModel = movieModel
  }

  getAll = async (req, res) => {
    const { genre } = req.query
    const movies = await this.movieModel.getAll({ genre })
    // decide que renderiza
    res.json(movies)
  }

  getById = async (req, res) => { // path-to-regexp
    const { id } = req.params
    const movie = await this.movieModel.getById({ id })

    if (movie) return res.json(movie)
    res.status(404).json({ message: 'Movie not found' })
  }

  create = async (req, res) => {
    const result = validateMovie(req.body)

    if (result.error) {
      // 400 Bad Request or 422 Unprocessable Enity
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    let newMovie = null
    try {
      newMovie = await this.movieModel.create({ input: result.data })
    } catch (error) {
      if (error) return res.status(400).json({ message: error.message })
    }

    res.status(201).json(newMovie) // actualizar la caché del cliente
  }

  delete = async (req, res) => {
    const { id } = req.params

    try {
      await this.movieModel.delete({ id })
    } catch (error) {
      if (error) return res.status(404).json({ message: 'Movie not found' })
    }

    return res.status(200).json({ message: 'Movie deleted' })
  }

  update = async (req, res) => {
    const result = validatePartialMovie(req.body)

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updateMovie = await this.movieModel.update({ id, input: result.data })

    return res.json(updateMovie)
  }
}
