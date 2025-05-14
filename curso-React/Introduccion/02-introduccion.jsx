// Los componenetes son PascalCase (Button), no camelCase (button) y se exportan de una carpeta a parte
// Esta es la manera que tiene React de detectar que no es un elemento HTML original.

// Expresiones en JSX:
// Añadimos expresiones poniendo la constante entre llaves: {constante}
// Entre {llaves} solo podemos poner EXPRESIONES ¡NO! declaraciones,
// es decir poner algo que devuelva un valor.
const name = 'Arturo';
const element = <strong>Numero aleatorio: {Math.random}</strong>

<h1>"Hola", {name}. Te tocó el número {element}.</h1>

// Los atributos los escribimos en camelCase porque es javascript no html:✔️dataId | ❌data-id
<butotn tabIndex='1'></butotn>
