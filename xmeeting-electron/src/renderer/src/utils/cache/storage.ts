import { decryptUsingAES128, encryptUsingAES128 } from "../crypto"

const prefixKey = 'xmeeting'

export const storageKey = {
  TOKEN: 'token',
  USER_INFO: 'userInfo'
}

export const localStorage = {
  getCache<T = string>(key: string): T | '' {
    try {
      const value = window.localStorage.getItem(`${prefixKey}_${key}`) ?? ''
      return JSON.parse(value)
    } catch(err) {
      return ''
    }
  },
  setCache(key: string, value: unknown) {
    try {
      window.localStorage.setItem(`${prefixKey}_${key}`, JSON.stringify(value))
    } catch(err) {}
  },
  decryptAndGetCache<T = ''>(key: string): T | '' {
    try {
      const encryptValue = window.localStorage.getItem(`${prefixKey}_${key}`) ?? ''
      const value = decryptUsingAES128(encryptValue)
      return JSON.parse(value)
    } catch (err) {
      return ''
    }
  },
  setCacheAndEncrypt(key: string, value: unknown) {
    try {
      const stringfyValue = JSON.stringify(value)
      const encryptValue = encryptUsingAES128(stringfyValue)
      window.localStorage.setItem(`${prefixKey}_${key}`, encryptValue)
    } catch(err) {}
  },
  removeCache(key: string) {
    try {
      window.localStorage.removeItem(`${prefixKey}_${key}`)
    } catch(err) {}
  }
}

