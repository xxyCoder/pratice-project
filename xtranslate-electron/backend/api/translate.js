import { getRandomSalt, MD5 } from '../utils/encryption.js'
import dotenv from 'dotenv'
dotenv.config()

const BAIDU_APP_ID = process.env.BAIDU_APP_ID
const BAIDU_APP_KEY = process.env.BAIDU_APP_KEY

export const baiduTranslate = async ({ q, from, to }) => {
  const salt = getRandomSalt()

  const encodedData = new URLSearchParams({
    q,
    from,
    to,
    appid: BAIDU_APP_ID,
    salt,
    sign: MD5(`${BAIDU_APP_ID}${q}${salt}${BAIDU_APP_KEY}`)
  })
  return await fetch('https://fanyi-api.baidu.com/api/trans/vip/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodedData,
    mode: 'no-cors'
  }).then((res) => {
    if (res.ok) {
      return res.json()
    }
    throw new Error('Failed to translate')
  })
}
