import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createMoviesRouter } from './routes/movies.js'

// // como leer un JSON en ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// como leer un JSON en ESModules  recomendado por ahora
// import { createRequire } from 'node:module'
// const require = createRequire(import.meta.url)
// const movies = require('./movies.json')

// como leer un JSON en ESModules
// desde node 22 se supone que funciona sin problemas pero standard me marca error
// import movies from './movies.json' with { type: 'json' };

// Importamos una utilidad para no crear el require en cada archivo
// import { readJSON } from './utils.js'
// const movies = readJSON('./movies.json')

export const createApp = ({ movieModel }) => {
  const app = express()
  app.use(corsMiddleware())
  app.disable('x-powered-by')
  app.use(json())

  // Todos los recursos que sean MOVIES se identifican con /movies
  app.use('/movies', createMoviesRouter({ movieModel }))

  app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>')
  })

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: http://localhost:${PORT}`)
  })
}
