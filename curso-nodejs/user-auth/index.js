import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import 'dotenv/config'
import { PORT } from './config.js'
import { AuthController } from './controllers/auth.js'
import { authMiddleware, requireAuth } from './middlewares/auth.js'

const app = express()
app.disable('x-powered-by')

app.set('view engine', 'ejs')

// Morgan para desarrollo
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

// Middleware de autenticación global
app.use(express.json())
app.use(cookieParser())
app.use(authMiddleware)

// Rutas públicas
app.get('/', (req, res) => {
  const { user } = req.session
  console.log('🏠 Ruta /: user =', user)
  res.render('index', { user, username: user?.username })
})

// Rutas de autenticación
app.post('/register', AuthController.register)
app.post('/login', AuthController.login)
app.post('/logout', AuthController.logout)

// Rutas protegidas
app.get('/protected', requireAuth, (req, res) => {
  const { user } = req.session
  res.render('protected', { user, username: user.username, id: user.id })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
