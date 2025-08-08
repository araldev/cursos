const net = require('node:net')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }

// Ejemplo de uso
// const http = require('node:http')
// const { findAvailablePort } = require('./10.free-port.js')

// const desiredPort = process.env.PORT ?? 3000
// const server = http.createServer((req, res) => {
//   console.log('request received')
//   res.end('Hola mundo')
// })

// findAvailablePort(desiredPort).then(port => {
//   server.listen(port, () => {
//     console.log(`server listening on port http://localhost:${port}`)
//   })
// })
