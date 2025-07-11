import http from 'http'
import handleBaiduTranslate from './router/baidu-translate.js'

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  const { url } = req
  if (/baidu\/translate/.test(url)) {
    handleBaiduTranslate(req, res)
    return
  }
})

server.listen(8000, () => {})
