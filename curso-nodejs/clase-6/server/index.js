import express from 'express'
import logger from 'morgan'
import 'dotenv/config'
import { createClient } from '@libsql/client'

import { Server } from 'socket.io'
import { createServer } from 'node:http'

const PORT = process.env.PORT ?? 4321

const app = express()
const server = createServer(app)
// io = in out
const io = new Server(server, {
  connectionStateRecovery: {}
})

const db = createClient({
  url: 'libsql://chatdb-araldev.aws-eu-west-1.turso.io',
  authToken: process.env.DB_TOKEN
})

await db.execute(`
  CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT,
  username VARCHAR(100)
  );
  `)

io.on('connection', async (socket) => {
  console.log('Cliente conectado:', socket.id)

  socket.on('disconnect', () => {
    console.log('Cliente desconectado', socket.id)
  })

  socket.on('chat message', async (msg) => {
    let result
    const username = socket.handshake.auth.username ?? 'anonymous'
    console.log({ username })
    try {
      result = await db.execute({
        sql: 'INSERT INTO messages (content, username) VALUES (:msg, :username);',
        args: { msg, username }
      })
    } catch (error) {
      if (error) throw new Error('No se pudo enviar el mensaje')
    }

    io.emit('chat message', msg, result.lastInsertRowid.toString(), username)
  })

  console.log('auth ⇩⇩⇩')
  console.log(socket.handshake.auth)

  if (!socket.recovered) { // <--- recuperar los mensajes sin conexión
    try {
      const results = await db.execute({
        sql: 'SELECT id, content, username FROM messages WHERE id > ?;',
        args: [socket.handshake.auth.serverOffset ?? 0]
      })

      results.rows.forEach(row => {
        socket.emit('chat message', row.content, row.id.toString(), row.username)
      })
    } catch (error) {
      if (error) throw new Error('No se han podido recuperar los mensajes')
    }
  }
})

app.use(logger('dev'))

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/index.html')
})

server.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})
