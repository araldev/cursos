# 📐 Propiedades del DOM: Posición, Dimensiones y Visibilidad

## 📍 Posición y Dimensiones de Elementos

| **Método / Propiedad**            | **Descripción**                                                                        | **Retorno**   | **Notas**                                                              |
| --------------------------------- | -------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------- |
| `element.getBoundingClientRect()` | Obtiene las dimensiones y posición relativa al viewport.                               | `DOMRect`     | Incluye `top`, `left`, `right`, `bottom`, `width`, `height`, `x`, `y`. |
| `element.offsetTop`               | Distancia desde el borde superior del elemento al borde superior del `offsetParent`.   | `number` (px) | No incluye márgenes.                                                   |
| `element.offsetLeft`              | Distancia desde el borde izquierdo del elemento al borde izquierdo del `offsetParent`. | `number` (px) | No incluye márgenes.                                                   |
| `element.offsetWidth`             | Ancho total del elemento (incluye padding, bordes y scrollbar).                        | `number` (px) | No incluye márgenes.                                                   |
| `element.offsetHeight`            | Altura total del elemento (incluye padding, bordes y scrollbar).                       | `number` (px) | No incluye márgenes.                                                   |
| `element.clientTop`               | Ancho del borde superior del elemento.                                                 | `number` (px) | Útil para calcular área interna.                                       |
| `element.clientLeft`              | Ancho del borde izquierdo del elemento.                                                | `number` (px) | Útil para calcular área interna.                                       |
| `element.clientWidth`             | Ancho interno del elemento (incluye padding, excluye bordes y scrollbar).              | `number` (px) | No incluye márgenes.                                                   |
| `element.clientHeight`            | Altura interna del elemento (incluye padding, excluye bordes y scrollbar).             | `number` (px) | No incluye márgenes.                                                   |
| `element.scrollTop`               | Cantidad de píxeles desplazados verticalmente.                                         | `number` (px) | Solo lectura en elementos no desplazables.                             |
| `element.scrollLeft`              | Cantidad de píxeles desplazados horizontalmente.                                       | `number` (px) | Solo lectura en elementos no desplazables.                             |
| `element.scrollWidth`             | Ancho total del contenido desplazable (incluye área oculta).                           | `number` (px) | Incluye padding.                                                       |
| `element.scrollHeight`            | Altura total del contenido desplazable (incluye área oculta).                          | `number` (px) | Incluye padding.                                                       |

## 👁️ Visibilidad en el Viewport

| **Método / Propiedad**            | **Descripción**                                       | **Retorno**            | **Notas**                                                      |
| --------------------------------- | ----------------------------------------------------- | ---------------------- | -------------------------------------------------------------- |
| `element.getBoundingClientRect()` | Verifica si el elemento está dentro del viewport.     | `DOMRect`              | Combinar con `window.innerHeight` y `window.innerWidth`.       |
| `window.innerHeight`              | Altura interna del viewport del navegador.            | `number` (px)          | No incluye barras de herramientas ni barras de desplazamiento. |
| `window.innerWidth`               | Ancho interno del viewport del navegador.             | `number` (px)          | No incluye barras de herramientas ni barras de desplazamiento. |
| `window.scrollY`                  | Posición actual del scroll vertical.                  | `number` (px)          | Alias de `window.pageYOffset`.                                 |
| `window.scrollX`                  | Posición actual del scroll horizontal.                | `number` (px)          | Alias de `window.pageXOffset`.                                 |
| `IntersectionObserver`            | Detecta cuando un elemento entra o sale del viewport. | `IntersectionObserver` | Ideal para lazy loading y animaciones al hacer scroll.         |

## 🔗 Métodos para Trabajar con la URL

| **Método / Propiedad**      | **Descripción**                                      | **Sintaxis de Uso**                       | **Notas**                                          |
| --------------------------- | ---------------------------------------------------- | ----------------------------------------- | -------------------------------------------------- |
| `window.location.href`      | Obtiene o establece la URL completa.                 | `window.location.href = "url"`            | Provoca una recarga de página.                     |
| `window.location.assign()`  | Navega a una nueva URL.                              | `window.location.assign("url")`           | Similar a cambiar `href`, pero más explícito.      |
| `window.location.replace()` | Reemplaza la URL actual sin guardar en el historial. | `window.location.replace("url")`          | No permite retroceder con el botón "atrás".        |
| `window.location.reload()`  | Recarga la página actual.                            | `window.location.reload()`                | Puede forzar recarga desde el servidor con `true`. |
| `history.pushState()`       | Añade una nueva entrada al historial sin recargar.   | `history.pushState(state, title, url)`    | Útil para SPA y navegación sin recargar.           |
| `history.replaceState()`    | Reemplaza la entrada actual del historial.           | `history.replaceState(state, title, url)` | No añade nueva entrada al historial.               |
| `history.back()`            | Navega a la página anterior en el historial.         | `history.back()`                          | Equivalente al botón "atrás" del navegador.        |
| `history.forward()`         | Navega a la página siguiente en el historial.        | `history.forward()`                       | Equivalente al botón "adelante" del navegador.     |
| `history.go()`              | Navega a una posición específica en el historial.    | `history.go(-2)`                          | Número positivo adelante, negativo atrás.          |

### ✅ Ejemplo de Uso

```js
// Obtener posición y dimensiones
const rect = document.querySelector("#miElemento").getBoundingClientRect();
console.log(rect.top, rect.left, rect.width, rect.height);

// Verificar si está en el viewport
const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

// Cambiar URL sin recargar
history.pushState({ page: "home" }, "Home", "/home");
```
