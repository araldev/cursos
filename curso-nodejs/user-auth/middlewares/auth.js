import { verifyAccessToken, verifyRefreshToken, signAccessToken } from '../jwt-factory.js'
import { RefreshTokenCacheRepository } from '../user-repository.js'
import { COOKIE_CONFIG, TOKEN_CONFIG } from '../config.js'

export const authMiddleware = (req, res, next) => {
  const { accessToken } = req.cookies
  console.log('🔍 Verificando accessToken:', accessToken ? 'presente' : 'ausente')

  req.session = { user: null }

  if (!accessToken) return next()

  try {
    const data = verifyAccessToken(accessToken)
    req.session = { user: data }
    console.log('✅ Token válido, usuario autenticado:', req.session.user)
    next()
  } catch (error) {
    console.log('⚠️ Access token expirado, intentando renovar...')
    // Token expirado: intentamos renovarlo
    const { refreshToken } = req.cookies
    if (!refreshToken) return next()

    try {
      const payload = verifyRefreshToken(refreshToken)
      const refreshTokenDB = RefreshTokenCacheRepository.findOne({ userId: payload.id })

      if (!refreshTokenDB || refreshTokenDB.revoke) {
        console.log('❌ Refresh token revocado o no encontrado')
        return next()
      }

      // Generamos nuevo access token
      const newAccessToken = signAccessToken({ id: payload.id, username: payload.username })
      console.log('🔄 Nuevo access token generado')

      res.cookie('accessToken', newAccessToken, {
        ...COOKIE_CONFIG,
        maxAge: TOKEN_CONFIG.ACCESS_TOKEN_EXPIRY
      })

      req.session = { user: { id: payload.id, username: payload.username } }
      next()
    } catch (refreshError) {
      console.log('❌ Error con refresh token:', refreshError.message)
      next()
    }
  }
}

export const requireAuth = (req, res, next) => {
  const { user } = req.session
  if (!user) {
    return res.status(403).json({ error: 'Access not authorized' })
  }
  next()
}
