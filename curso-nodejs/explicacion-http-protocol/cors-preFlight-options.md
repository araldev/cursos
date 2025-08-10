# Tutorial: CORS, Pre-Flight y OPTIONS en Express

Cuando desarrollamos APIs y las consumimos desde un navegador, podemos encontrarnos con problemas de **CORS** (Cross-Origin Resource Sharing).  
Esto sucede porque el navegador, por seguridad, bloquea peticiones HTTP desde un origen distinto al del servidor.

Este tutorial te explica cómo manejar **CORS**, las peticiones **Pre-Flight** y el método **OPTIONS**.

---

## 1. ¿Qué es CORS?

**CORS** es un mecanismo que permite que recursos restringidos en una página web sean solicitados desde otro dominio distinto.

Ejemplo:

- Frontend: `http://localhost:8080`
- Backend: `http://localhost:1234`

Sin configurar CORS, el navegador bloqueará la petición.

---

## 2. Métodos simples y métodos complejos

### Métodos simples (no requieren pre-flight)

- `GET`
- `POST`
- `HEAD`

### Métodos complejos (requieren pre-flight)

- `PUT`
- `PATCH`
- `DELETE`
- O cualquier petición con cabeceras personalizadas

Cuando usamos métodos complejos, el navegador envía **antes** de la petición real, una **petición OPTIONS** (Pre-Flight) para preguntar al servidor si está permitido.

---

## 3. Petición Pre-Flight (OPTIONS)

Cuando el navegador envía una petición **OPTIONS**, espera que el servidor responda con cabeceras como:

```http
Access-Control-Allow-Origin: http://localhost:8080
Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE
Access-Control-Allow-Headers: Content-Type
```

Si el servidor responde con estas cabeceras y un código `204 No Content`, entonces el navegador enviará la petición real.

---

## 4. Configuración en Express

Ejemplo de servidor Express que maneja CORS y Pre-Flight:

```js
const express = require("express");
const app = express();

const ACCEPTED_ORIGINS = [
  "http://localhost:8080",
  "http://localhost:1234",
  "https://movies.com",
  "https://midu.dev",
];

app.use(express.json());

// Middleware para CORS
app.use((req, res, next) => {
  const origin = req.header("origin");
  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
  }
  next();
});

// Manejo de OPTIONS para métodos complejos
app.options("*", (req, res) => {
  const origin = req.header("origin");
  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    return res.sendStatus(204);
  }
  return res.status(403).send();
});

app.get("/movies", (req, res) => {
  res.json([{ title: "Matrix" }, { title: "Inception" }]);
});

app.listen(1234, () => console.log("Servidor en http://localhost:1234"));
```

---

## 5. Notas importantes

- El **middleware CORS** debe ir antes que las rutas.
- Para entornos de desarrollo, se puede usar el paquete [`cors`](https://www.npmjs.com/package/cors).
- El método `OPTIONS` **no devuelve datos**, solo indica permisos.

Ejemplo de servidor Express con el paquete [`cors`](https://www.npmjs.com/package/cors) que maneja CORS y Pre-Flight:

```js
const express = require("express");
const cors = require("cors");
const crypto = require("node:crypto");
const { validateMovie, validatePartialMovie } = require("./schemas/movies.js");
const movies = require("./movies.json");

const app = express();
app.disable("x-powered-by");

app.use(express.json());

// Lista de orígenes permitidos
const ACCEPTED_ORIGINS = [
  "http://localhost:8080",
  "http://localhost:1234",
  "https://movies.com",
  "https://midu.dev",
];

// Configuración de CORS con control de origen
app.use(
  cors({
    origin: (origin, callback) => {
      if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        callback(null, true); // Permitir
      } else {
        callback(new Error("Not allowed by CORS")); // Bloquear
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Métodos permitidos
    allowedHeaders: ["Content-Type"], // Cabeceras permitidas
    credentials: true, // Si quieres permitir cookies/autenticación
    optionsSuccessStatus: 204, // Código de respuesta para pre-flight
  })
);

// Rutas
app.get("/movies", (req, res) => {
  const { genre } = req.query;
  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
    return res.json(filteredMovies);
  }
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) return res.json(movie);
  res.status(404).json({ message: "Movie not found" });
});

app.post("/movies", (req, res) => {
  const result = validateMovie(req.body);
  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }
  const newMovie = { id: crypto.randomUUID(), ...result.data };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);
  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }
  movies.splice(movieIndex, 1);
  return res.status(204).end();
});

app.patch("/movies/:id", (req, res) => {
  const result = validatePartialMovie(req.body);
  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }
  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);
  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not Found" });
  }
  const updateMovie = { ...movies[movieIndex], ...result.data };
  movies[movieIndex] = updateMovie;
  return res.json(updateMovie);
});

app.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

const PORT = process.env.PORT ?? 1234;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: http://localhost:${PORT}`);
});
```

> 💡 Ventajas con cors:

- No tienes que escribir manualmente OPTIONS para cada ruta.

- Maneja de forma automática el pre-flight.

- Es más fácil añadir/quitar orígenes permitidos.

---

## 6. Ejemplo visual del flujo

```
[Frontend] ---- OPTIONS ----> [Servidor Express] ---- 204 OK ----> [Frontend]
[Frontend] ---- DELETE ----> [Servidor Express] ---- 200 OK ----> [Frontend]
```

---

✅ **Conclusión:**  
Manejando bien las peticiones **OPTIONS** y configurando las cabeceras adecuadas, evitamos los errores de CORS en el navegador.
