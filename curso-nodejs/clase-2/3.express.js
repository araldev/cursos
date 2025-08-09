const express = require('express')
const dittoJSON = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()

app.disable('x-powered-by') // Deshabilitar el header x-powered-by

// Es como se usa express
app.use(express.json()) // !!!IMPORTANTE Esto hace lo mismo que el Middleware de abajo

// app.use((req, res, next) => {
//   console.log('middleware')
//   // trackear la request a la base de datos
//   // revisar si el usuario tiene cookies

//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // Solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = ''

//   // escuchar el evento data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la información en el req.body
//     req.body = data
//     next() // --> tenemos que decirle que continue
//   })
// })

app.get('/', (req, res) => {
  // res.json({ message: 'Hola mundo' }) // <--- para trabajar con json, ya hace JSON.stringify() internamente
  res.send('<h1>Mi página</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// Es para tratar todas las acciones(GET, POST, PUT, DELETE, PATCH) por defecto
// Importante !!! ----> Ponerlo al final para que antes compruebe
// si existe el path de los demás métodos creados
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found<h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
