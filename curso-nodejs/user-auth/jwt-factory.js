import jwt from 'jsonwebtoken'

const AT_EXPIRES = '15m'
const RT_EXPIRES = '7d'

export function signAccessToken ({ id, username }) {
  return jwt.sign(
    { id, username },
    process.env.SECRET_KEY,
    {
      expiresIn: AT_EXPIRES
    })
}

export function verifyAccessToken (accessToken) {
  return jwt.verify(
    accessToken,
    process.env.SECRET_KEY
  )
}

export function signRefreshToken ({ id, username }) {
  return jwt.sign(
    { id, username },
    process.env.REFRESH_SECRET_KEY,
    {
      expiresIn: RT_EXPIRES
    })
}

export function verifyRefreshToken (refreshToken) {
  return jwt.verify(
    refreshToken,
    process.env.REFRESH_SECRET_KEY
  )
}
