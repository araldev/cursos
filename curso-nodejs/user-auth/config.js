export const {
  PORT = 2341,
  SALT_ROUNDS = 10, // Producción = 10, Test = 1 || A más grande mas tarda, pero mejor codificado(bcrypt)
  SECRET_KEY,
  REFRESH_SECRET_KEY,
  NODE_ENV = 'development'
} = process.env

// Configuración de cookies
export const COOKIE_CONFIG = {
  httpOnly: true,
  secure: NODE_ENV === 'production',
  sameSite: 'strict'
}

// Configuración de tokens
export const TOKEN_CONFIG = {
  ACCESS_TOKEN_EXPIRY: 1000 * 60 * 10, // 10 min
  REFRESH_TOKEN_EXPIRY: 1000 * 60 * 60, // 1 hora
  MAX_SESSIONS_PER_USER: 3
}
