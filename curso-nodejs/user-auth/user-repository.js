import DBLocal from 'db-local'
import crypto from 'node:crypto'
import bcrypt from 'bcrypt'
import { SALT_ROUNDS } from './config.js'

const { Schema } = new DBLocal({ path: './db' })

const User = Schema('User', {
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
})

// Sería para guardar la sesión del usuario con Estados
// !!! Importante: te pueden robar la sesión. No es recomendable.
// const Session = Schema('Session', {
//   _id: { type: String, required: true },
//   user: { type: String, required: true },
//   expires: { type: Date, required: true }
// })

export class UserRepository {
  static async create ({ username, password }) {
    // 1. Validaciones del username (opcional: usar zod)
    Validation.username(username)
    Validation.password(password)
    // 2. ASEGURARSE QUE EL USERNAME NOOOO EXISTE
    const user = User.findOne({ username })
    if (user) throw new Error('username already exists')
    console.log(user)

    const id = crypto.randomUUID()
    // hasSync bloquea el thread principal, usar hash para hacerlo asíncrono
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS) // salt: 2º parámetro es el número de codificación que se le dará

    User.create({
      _id: id,
      username,
      password: hashedPassword
    }).save()

    return id
  }

  static async login ({ username, password }) {
    Validation.username(username)
    Validation.password(password)

    const user = User.findOne({ username })
    if (!user) throw new Error('Username does not exists')

    // Comparar el password que nos pasan en el login con
    // el que está hasheado en la base de datos
    // --> de esta manera no sabemos el password original del usuario
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) throw new Error('password is invalid')

    const { password: _, ...publicUser } = user

    // otra manera de no devolver propiedades que no queramos como password
    // const publicUser = {
    //   id: user._id,
    //   username: user.username,
    // }

    return publicUser
  }
}

// Sacar las validaciones a otro archivo para poder usarlas
// independiente de la bs que usemos
class Validation {
  static username (username) {
    if (typeof username !== 'string') throw new Error('username must be a string')
    if (username.length < 3) throw new Error('username must be at least 3 characters long')
  }

  static password (password) {
    if (typeof password !== 'string') throw new Error('password must be a string')
    if (password.length < 6) throw new Error('password must be at least 6 characters long')
  }
}
