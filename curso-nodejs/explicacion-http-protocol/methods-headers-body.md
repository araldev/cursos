# Guía rápida: métodos HTTP, headers y body al crear una API con Node.js

> Archivo orientado al uso nativo del módulo `http` (sin Express).

---

## 1. Métodos HTTP (verbos)

| Método      | Propósito típico                                              | Ejemplo de ruta      | Idempotente |
| ----------- | ------------------------------------------------------------- | -------------------- | ----------- |
| **GET**     | Leer/Solicitar un recurso                                     | `GET /usuarios`      | ✅ Sí       |
| **POST**    | Crear un nuevo recurso                                        | `POST /usuarios`     | ❌ No\*     |
| **PUT**     | Reemplazar **totalmente** un recurso (o crearlo si no existe) | `PUT /usuarios/3`    | ✅ Sí       |
| **PATCH**   | Actualizar **parcialmente** un recurso                        | `PATCH /usuarios/3`  | ✅ Sí       |
| **DELETE**  | Eliminar un recurso                                           | `DELETE /usuarios/3` | ✅ Sí       |
| **HEAD**    | Igual que GET, pero sin body (solo headers)                   | `HEAD /usuarios`     | ✅ Sí       |
| **OPTIONS** | Consultar qué métodos/headers admite el endpoint              | `OPTIONS /usuarios`  | ✅ Sí       |

\* POST **normalmente no es idempotente**: cada llamada suele crear un nuevo recurso (p. ej. un nuevo ID y `createdAt`). Sin embargo, **puede serlo** si se diseña con un identificador único proporcionado por el cliente (por ejemplo, POST `/transferencias/123-456` con idempotency-key).

En **Node.js** el método llega en la propiedad `req.method`.

---

## 2. Headers

Los headers viajan en **ambas direcciones**:

- **Request headers** → `req.headers`
- **Response headers** → `res.setHeader(name, value)` o `res.writeHead(status, { name: value })`

### Headers más usados

| Header           | Dirección            | Qué indica                                                                                                                                                     |
| ---------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Content-Type`   | Petición / Respuesta | Formato del body (`application/json`, `text/html; charset=utf-8`, `text/plain; charset=utf-8`, `application/javascript`, `application/pdf`, `image/png`, etc.) |
| `Content-Length` | Petición / Respuesta | Tamaño en bytes del body                                                                                                                                       |
| `Authorization`  | Petición             | Credenciales (Bearer, Basic, etc.)                                                                                                                             |
| `Accept`         | Petición             | Formatos que acepta el cliente (`application/json`)                                                                                                            |
| `Location`       | Respuesta            | URL de un recurso creado (código 201)                                                                                                                          |
| `Cache-Control`  | Respuesta            | Directivas de caché (`no-cache`, `max-age=60`)                                                                                                                 |

### Notas rápidas

1. Siempre que envíes texto (JSON, HTML, etc.) añade ; charset=utf-8 para evitar problemas de acentos/emojis.

2. Para archivos descargables puedes combinar:

```http
Content-Type: application/pdf
Content-Disposition: attachment; filename="doc.pdf"
```

3. La lista oficial completa está en: [IANA Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml)

Ejemplo:

```js
res.writeHead(200, {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-cache",
});
```

## 3. Body (cuerpo de la petición)

El body **NO** se recibe de golpe; hay que escuchar eventos del stream `req`.

### Leer JSON (POST / PUT / PATCH)

```js
let body = "";
req.on("data", (chunk) => {
  body += chunk.toString(); // 👈 recuerda ejecutar toString()
});
req.on("end", () => {
  try {
    const data = JSON.parse(body);
    // …trabajar con data…
  } catch (err) {
    res.statusCode = 400;
    res.end("JSON inválido");
  }
});
```

### Enviar respuesta con body

```js
const payload = { id: 3, name: "Pikachu" };
res.writeHead(201, { "Content-Type": "application/json" });
res.end(JSON.stringify(payload));
```

## 4. Ejemplo mínimo completo

### Node nativo:

```js
const http = require("node:http");

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Hola API");
  }

  if (method === "POST" && url === "/usuarios") {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      const usuario = JSON.parse(body);
      // …guardar en DB…
      res.writeHead(201, { Location: `/usuarios/${usuario.id}` });
      res.end(JSON.stringify(usuario));
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(3000, () => console.log("Escuchando en http://localhost:3000"));
```

### Node con Express:

```js
// === EXPRESS (mismo ejemplo) ===
// 1) Instala primero:
//    npm init -y
//    npm install express

const express = require("express");
const app = express();

// Middleware incorporado para parsear JSON
app.use(express.json());

// GET /
app.get("/", (req, res) => {
  res.type("text/plain").send("Hola API");
});

// POST /usuarios
app.post("/usuarios", (req, res) => {
  const usuario = req.body; // <- ya está parseado
  // …guardar en DB…
  res.status(201).location(`/usuarios/${usuario.id}`).json(usuario);
});

// 404 genérico (al final)
app.use((req, res) => {
  res.status(404).type("text/plain").send("Not Found");
});

app.listen(3000, () => console.log("Escuchando en http://localhost:3000"));
```

## 5. Resumen visual (flujo)

Cliente ---- HTTP Request ----> Node (http.createServer)

- method
- url
- headers
- body (stream)

Node procesa

- req.method / req.url / req.headers / req (stream)
- res.writeHead(status, headers)
- res.end(body)

Cliente <--- HTTP Response -----

- status code
- headers
- body
