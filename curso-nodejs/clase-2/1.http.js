const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234
const fs = require('node:fs')

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.statusCode = 200 // OK es por defecto

  if (req.url === '/') {
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/imagen') {
    fs.readFile('./placa.png', (err, data) => {
      if (err) {
        res.statusCpde = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>Error 404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`)
})
