import querystring from 'querystring'

import { baiduTranslate } from '../api/translate.js'
import {
  getInterfaceCallFailData,
  getMethodErrorData,
  getRequestErrorData
} from '../utils/error-response.js'

export default async function handleBaiduTranslate(req, res) {
  const { method } = req
  if (method.toUpperCase() !== 'POST') {
    res.end(getMethodErrorData())
    return
  }
  let body = ''
  req.on('data', (chunk) => {
    body += chunk.toString()
  })
  req.on('end', async () => {
    try {
      const formData = querystring.parse(body)
      const result = await baiduTranslate(formData)
      res.end(
        JSON.stringify({
          code: 0,
          data: result
        })
      )
    } catch (error) {
      console.error('Error parsing form data:', error)
      res.end(getInterfaceCallFailData(error.message))
    }
  })
  req.on('error', (error) => {
    console.error('Error parsing form data:', error)
    res.end(getRequestErrorData(error.message))
  })
}
