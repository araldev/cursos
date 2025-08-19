import { UserRepository, RefreshTokenCacheRepository } from '../user-repository.js'
import { signAccessToken, signRefreshToken } from '../jwt-factory.js'
import { Validation } from '../validations.js'
import { COOKIE_CONFIG, TOKEN_CONFIG } from '../config.js'

export class AuthController {
  static async register (req, res) {
    const { username, password } = req.body

    try {
      Validation.credentials(username, password)

      const user = await UserRepository.create({ username, password })

      const accessToken = signAccessToken({ id: user.id, username: user.username })
      const refreshToken = signRefreshToken({ id: user.id, username: user.username })

      RefreshTokenCacheRepository.create({
        userId: user.id,
        username: user.username,
        refreshToken
      })

      return res
        .cookie('accessToken', accessToken, {
          ...COOKIE_CONFIG,
          maxAge: TOKEN_CONFIG.ACCESS_TOKEN_EXPIRY
        })
        .cookie('refreshToken', refreshToken, {
          ...COOKIE_CONFIG,
          maxAge: TOKEN_CONFIG.REFRESH_TOKEN_EXPIRY
        })
        .json({ user, message: 'User registered successfully' })
    } catch (error) {
      console.log('❌ Error en registro:', error.message)
      res.status(400).json({ error: error.message })
    }
  }

  static async login (req, res) {
    const { username, password } = req.body

    try {
      Validation.credentials(username, password)

      const user = await UserRepository.login({ username, password })

      if (!user) throw new Error('Username or password invalid')

      const refreshTokenExists = RefreshTokenCacheRepository.findOne({ userId: user.id })
      const accessToken = signAccessToken({ id: user.id, username: user.username })

      if (refreshTokenExists) {
        return res
          .cookie('accessToken', accessToken, {
            ...COOKIE_CONFIG,
            maxAge: TOKEN_CONFIG.ACCESS_TOKEN_EXPIRY
          })
          .json({ user })
      }

      const refreshToken = signRefreshToken({ id: user.id, username: user.username })
      RefreshTokenCacheRepository.create({
        userId: user.id,
        username: user.username,
        refreshToken
      })

      return res
        .cookie('accessToken', accessToken, {
          ...COOKIE_CONFIG,
          maxAge: TOKEN_CONFIG.ACCESS_TOKEN_EXPIRY
        })
        .cookie('refreshToken', refreshToken, {
          ...COOKIE_CONFIG,
          maxAge: TOKEN_CONFIG.REFRESH_TOKEN_EXPIRY
        })
        .json({ user })
    } catch (error) {
      res.status(401).json({ error: error.message })
    }
  }

  static async logout (req, res) {
    const { refreshToken } = req.cookies

    if (refreshToken) {
      try {
        RefreshTokenCacheRepository.delete({ refreshToken })
      } catch (error) {
        console.log('Error deleting refresh token:', error.message)
      }
    }

    res
      .clearCookie('accessToken')
      .clearCookie('refreshToken')
      .json({ message: 'Logout successful' })
  }
}
