export const {
  PORT = 2341,
  SALT_ROUNDS = 10 // Producción = 10, Test = 1 || A más grande mas tarda, pero mejor codificado(bcrypt)
} = process.env
