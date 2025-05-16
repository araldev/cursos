## Enunciado

Crea una aplicación para buscar películas

Consigue la API Key en la propia página web registrando tu email.
API a usar: - https://www.omdbapi.com/
const API_KEY = '871c3212'
const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movies}`

Requerimientos:

- ✅ Necesita mostrar un input para buscar la película y un botón para buscar.

- ✅ Lista las películas y muestra el título, año y poster.

- ✅ Que el formulario funcione.

- Hacer el fetching de datos a la API.

- ✅ Haz que las películas se muestren en un grid responsive.

Primera iteración:

- Evitar que se haga la misma búsqueda dos veces seguidas.

- Haz que la búsqueda se haga automáticamente al escribir.

- Evita que se haga la búsqueda continuamente al escribir (debounce).
