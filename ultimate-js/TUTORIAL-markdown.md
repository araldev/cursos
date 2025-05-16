# 📑 Reglas básicas para archivos Markdown

## 1. Títulos y encabezados

- Se usan `#` para marcar títulos.
- La cantidad de `#` define el nivel del título (de 1 a 6).
- Debe haber un espacio entre los `#` y el texto.

Ejemplos:

```md
# Título nivel 1

## Título nivel 2

### Título nivel 3

#### Título nivel 4

##### Título nivel 5

###### Título nivel 6
```

---

## 2. Énfasis (cursivas, negritas, tachado)

- _Cursiva_: usar `*texto*` o `_texto_`
- **Negrita**: usar `**texto**` o `__texto__`
- ~~Tachado~~: usar `~~texto~~`

Ejemplos:

```md
Esto es _cursiva_ y esto es **negrita**. Esto es **negrita** y esto es _cursiva_. Esto está ~~tachado~~.
```

---

## 3. Listas

- Listas con viñetas (sin orden):  
  Usar `-`, `*` o `+` seguido de espacio.

```md
- Primer elemento

* Segundo elemento

- Tercer elemento
```

- Listas numeradas:

```md
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
```

- Anidación de listas con indentación (espacios o tabulación):

```md
- Primer elemento
  - Sub-elemento
  - Otro sub-elemento
- Segundo elemento
```

---

## 4. Enlaces e imágenes

- Enlace:

```md
[texto visible](https://url.com)
```

- Imagen:

```md
![texto alternativo](https://url.com/imagen.jpg)
```

---

## 5. Citas (blockquotes)

- Usar `>` al inicio de la línea.

```md
> Esta es una cita.
> Puede tener varias líneas.
```

---

## 6. Código

- Código en línea: usar `` `código` `` (una sola comilla invertida).
- Bloques de código multilínea: usar triple backticks ``` con opcional especificación de lenguaje.

````md
```js
console.log("Hola mundo");
```
````

````

---

## 7. Líneas horizontales

- Usar `---`, `***` o `___` en una línea sola para separar secciones.

```md
---
````

---

## 8. Tablas

- Crear tablas con `|` y `-` para dividir encabezados y columnas.

```md
| Columna 1 | Columna 2 |
| --------- | --------- |
| Texto A   | Texto B   |
| Texto C   | Texto D   |
```

---

## 9. Espacios y saltos de línea

- Un solo salto de línea se ignora (se junta texto).
- Para un salto de línea visible, termina la línea con dos o más espacios y presiona Enter.

---

## 10. Comentarios (no estándar, pero en GitHub)

- Usar `<!-- comentario -->`

```md
<!-- Esto es un comentario invisible en GitHub -->
```
