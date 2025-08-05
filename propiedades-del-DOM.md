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

## 🖱️ Posición del Ratón (Mouse / Puntero)

| **Evento / Propiedad**      | **Descripción**                                                               | **Propiedades útiles**                                                             | **Notas / Ejemplo**                                                              |
| --------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mousemove`                 | Se dispara cada vez que el ratón se mueve sobre el elemento.                  | `clientX`, `clientY`, `pageX`, `pageY`, `screenX`, `screenY`, `offsetX`, `offsetY` | `element.addEventListener('mousemove', e => console.log(e.clientX, e.clientY));` |
| `mousedown`                 | Se dispara al presionar un botón del ratón.                                   | Igual que arriba                                                                   | Útil para detectar inicio de arrastres.                                          |
| `mouseup`                   | Se dispara al soltar un botón del ratón.                                      | Igual que arriba                                                                   | Combinar con `mousedown` para detectar clics completos.                          |
| `click`                     | Se dispara tras un `mousedown` + `mouseup` en el mismo elemento.              | Igual que arriba                                                                   | No se dispara si hay movimiento entre presionar y soltar.                        |
| `dblclick`                  | Doble clic consecutivo.                                                       | Igual que arriba                                                                   | Intervalo entre clics lo define el sistema operativo.                            |
| `contextmenu`               | Clic derecho (menú contextual).                                               | Igual que arriba                                                                   | Puede cancelarse con `e.preventDefault()`.                                       |
| `mouseenter` / `mouseleave` | Entrada / salida del puntero al área del elemento (sin burbuja).              | Igual que arriba                                                                   | No se propagan a elementos hijos.                                                |
| `mouseover` / `mouseout`    | Entrada / salida del puntero al área del elemento (con burbuja).              | Igual que arriba                                                                   | Se propagan; útiles para delegación de eventos.                                  |
| `PointerEvent` (moderno)    | Unifica ratón, táctil y lápiz.                                                | Igual que arriba + `pointerId`, `pressure`, `tiltX`, `tiltY`                       | Reemplaza `mouse*` en apps táctiles; usar `pointermove`, `pointerdown`, etc.     |
| `event.clientX`             | Coordenada X del puntero relativa al **viewport**.                            | `number` (px)                                                                      | No incluye scroll.                                                               |
| `event.clientY`             | Coordenada Y del puntero relativa al **viewport**.                            | `number` (px)                                                                      | No incluye scroll.                                                               |
| `event.pageX`               | Coordenada X del puntero relativa al **documento completo** (incluye scroll). | `number` (px)                                                                      | Útil cuando hay scroll vertical u horizontal.                                    |
| `event.pageY`               | Coordenada Y del puntero relativa al **documento completo** (incluye scroll). | `number` (px)                                                                      | Útil cuando hay scroll vertical u horizontal.                                    |
| `event.screenX`             | Coordenada X del puntero relativa a la **pantalla física**.                   | `number` (px)                                                                      | Incluye espacio fuera del navegador (múltiples monitores).                       |
| `event.screenY`             | Coordenada Y del puntero relativa a la **pantalla física**.                   | `number` (px)                                                                      | Incluye espacio fuera del navegador (múltiples monitores).                       |
| `event.offsetX`             | Coordenada X del puntero relativa al **elemento destino** (incluye padding).  | `number` (px)                                                                      | Se calcula desde el borde interno del elemento.                                  |
| `event.offsetY`             | Coordenada Y del puntero relativa al **elemento destino** (incluye padding).  | `number` (px)                                                                      | Se calcula desde el borde interno del elemento.                                  |

### ✅ Ejemplo Rápido: Mostrar posición del ratón en tiempo real

```js
<div id="info" style="position:fixed;top:0;left:0;background:#111;color:#0f0;padding:4px 8px;font-family:monospace;"></div>

<script>
  const info = document.getElementById('info');
  document.addEventListener('mousemove', e => {
    info.textContent = `client: ${e.clientX}, ${e.clientY} | page: ${e.pageX}, ${e.pageY}`;
  });
</script>
```

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

## 👁️ Observadores nativos del navegador (Observers)

Tabla resumida de todos los Observers disponibles hoy en los motores modernos: uso, qué observan, principales métodos y opciones.

| Clase / Observer                                                                  | ¿Qué observa?                                                                                            | Constructor / Opciones clave                                                                                | Métodos principales                                                                                               | Ejemplo rápido de uso                                                                                           | Soporte\*           |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------- |
| **IntersectionObserver**                                                          | Cuánto un elemento (o sus proporciones) **entra o sale del viewport** o de otro elemento contenedor.     | `new IntersectionObserver(callback, { root, rootMargin, threshold })`                                       | `.observe(target)` ‑ `.unobserve(target)` ‑ `.disconnect()` ‑ `.takeRecords()`                                    | `const io = new IntersectionObserver(cb, { threshold: 0.5 }); io.observe(el);`                                  | 🟢 94 %             |
| **ResizeObserver**                                                                | **Cambios de tamaño** en cualquier elemento (caja de contenido o caja de borde).                         | `new ResizeObserver(callback)` (opciones futuras en spec)                                                   | `.observe(target, {box:'content-box'})` ‑ `.unobserve(target)` ‑ `.disconnect()`                                  | `new ResizeObserver(([e]) => console.log(e.contentRect)).observe(box);`                                         | 🟢 94 %             |
| **MutationObserver**                                                              | **Mutaciones del DOM**: nodos agregados/eliminados, cambios de atributos, texto, etc.                    | `new MutationObserver(callback)`                                                                            | `.observe(target, { childList, attributes, subtree, attributeOldValue, … })` ‑ `.disconnect()` ‑ `.takeRecords()` | `new MutationObserver(console.log).observe(list, {childList:true});`                                            | 🟢 97 %             |
| **PerformanceObserver** (Performance Timeline)                                    | Nuevas entradas de rendimiento: `navigation`, `resource`, `paint`, `largest-contentful-paint`, etc.      | `new PerformanceObserver(callback)` → opciones en `entryTypes` o en `type`/`buffered`                       | `.observe({entryTypes:['navigation']})` ‑ `.disconnect()`                                                         | `new PerformanceObserver(list => list.getEntries().forEach(console.log)).observe({type:'lcp', buffered:true});` | 🟢 95 %             |
| **ReportingObserver**                                                             | **Informes generados por el navegador**: _deprecations_, _interventions_, _crash_, _CSP-violation_, etc. | `new ReportingObserver(callback, {types:['deprecation'], buffered:true})`                                   | `.observe()` ‑ `.disconnect()` ‑ `.takeRecords()`                                                                 | `new ReportingObserver(r => console.warn(r[0].body), {types:['deprecation'], buffered:true}).observe();`        | 🟡 Chromium 70 +    |
| **IdleObserver** _(proposal — “requestIdleCallback” no es un Observer, se omite)_ | Estado de **idle** del usuario (tiempo sin interacción). Aún experimental.                               | `new IdleObserver(callback, {threshold:60000})` → **no está implementado nativamente**; se listan polyfills | (propuesto) `.observe()` / `.unobserve()`                                                                         | —                                                                                                               | 🔴 Solo polyfills   |
| **FileSystemObserver** _(Chrome Origin Trial 2024)_                               | Cambios en el **sistema de ficheros local** cuando se usa la File System Access API.                     | `new FileSystemObserver(callback)`                                                                          | `.observe(fileHandle)` ‑ `.unobserve(fileHandle)` ‑ `.disconnect()`                                               | `const fso = new FileSystemObserver(changes => …); fso.observe(fileHandle);`                                    | 🟡 Chrome 125+ OT   |
| **Sensor-based observers** _(no DOM, pero mención breve)_                         |                                                                                                          |                                                                                                             |                                                                                                                   |                                                                                                                 |                     |
| ‑ `Accelerometer`, `Gyroscope`, `Magnetometer`, etc.                              | Lecturas de sensores del dispositivo (movimiento, orientación).                                          | `new Accelerometer({frequency:60})` → heredan de `Sensor`                                                   | `.start()` ‑ `.stop()` ‑ eventos `onreading`, `onactivate`, `onerror`                                             | `const acl = new Accelerometer(); acl.addEventListener('reading', () => console.log(acl.x)); acl.start();`      | 🟡 HTTPS + permisos |

### 🧪 Notas rápidas de uso

```js
// IntersectionObserver – lazy-loading
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        target.src = target.dataset.src;
        io.unobserve(target);
      }
    });
  },
  { rootMargin: "100px" }
);
io.observe(document.querySelector("img.lazy"));

// ResizeObserver – gráficos responsivos
new ResizeObserver(([entry]) => {
  chart.resize(entry.contentRect.width, entry.contentRect.height);
}).observe(canvas);

// MutationObserver – reaccionar a nuevos nodos
new MutationObserver((muts) =>
  muts.forEach((m) => {
    if (m.type === "childList") console.log("nuevos nodos:", m.addedNodes);
  })
).observe(document.body, { childList: true, subtree: true });

// PerformanceObserver – monitorear LCP
new PerformanceObserver((list) => {
  const last = list.getEntries().slice(-1)[0];
  console.log("LCP:", last.startTime);
}).observe({ type: "largest-contentful-paint", buffered: true });
```
