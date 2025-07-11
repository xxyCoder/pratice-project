import crypto from 'crypto'

export function MD5(str) {
  const md5 = crypto.createHash('md5')
  const sign = md5.update(str).digest('hex')
  return sign
}

export function getRandomSalt() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
