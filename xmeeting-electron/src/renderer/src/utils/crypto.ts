import CryptoJS from 'crypto-js'

const secrectKey = import.meta.env.RENDERER_VITE_ENCRYPTION_KEY

export const decryptUsingAES128 = (str: string) => {
  const _key = CryptoJS.enc.Utf8.parse(secrectKey)
  const _iv = CryptoJS.enc.Utf8.parse(secrectKey)
  return CryptoJS.AES.decrypt(str, _key, {
    keySize: 16,
    iv: _iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8)
}

export const encryptUsingAES128 = (str: string) => {
  const _key = CryptoJS.enc.Utf8.parse(secrectKey)
  const _iv = CryptoJS.enc.Utf8.parse(secrectKey)
  return CryptoJS.AES.encrypt(str, _key, {
    keySize: 16,
    iv: _iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
}