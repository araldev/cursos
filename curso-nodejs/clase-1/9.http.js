const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

// con 0 me da el puerto que esté libre en ese momento, es para Desarrollo
server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`)
})
