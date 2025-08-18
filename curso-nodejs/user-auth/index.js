import express from 'express'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import { PORT } from './config.js'
import { UserRepository } from './user-repository.js'

const app = express()
app.disable('x-powered-by')

app.set('view engine', 'ejs')

app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
  const token = req.cookies.access_token
  req.session = { user: null }

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY)
    req.session.user = data
  } catch {}

  next() //  ---> seguir a la siguiente ruta o middleware
})

app.get('/', (req, res) => {
  const { user } = req.session
  res.render('index', user)
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await UserRepository.login({ username, password })
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.SECRET_KEY,
      {
        expiresIn: '1h'
      })
    // Hay que generar una nueva cookie que vaya creando un nuevo
    // access_token mientras se navegue en la página
    // const refreshToken = jwt.sign(
    //   { id: user._id, username: user.username },
    //   process.env.SECRET_KEY,
    //   {
    //     expiresIn: '7d'
    //   })
    if (user) {
      return res
        .cookie('access_token', token, {
          httpOnly: true, // la cookie solo se puede acceder en el servidor, no por javascript
          secure: process.env.NODE_ENV === 'production', // solo se puede acceder a la cookie en HTTPS cuando estemos en producción
          sameSite: 'strict', // la cookie solo se envía en solicitudes del mismo dominio
          maxAge: 1000 * 60 * 60 // la cookie tiene un tiempo de validez de 1 hora
        })
        .send({ user, token })
    }
  } catch (error) {
    res.status(401).send(error.message)
  }
})

app.post('/register', async (req, res) => {
  const { username, password } = req.body

  try {
    const id = await UserRepository.create({ username, password })
    res.send({ id })
  } catch (error) {
    // NORMALMENTE NO ES BUENA IDEA MANDAR EL ERROR DEL REPOSITORIO
    res.status(400).send(error.message)
  }
})
app.post('/logout', (req, res) => {
  res
    .clearCookie('access_token')
    .json({ message: 'Logout successful' })
})

app.get('/protected', (req, res) => {
  const { user } = req.session
  if (!user) {
    return res.status(403).send('Access not authorized')
  }
  res.render('protected', user) //  { _id, username }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
