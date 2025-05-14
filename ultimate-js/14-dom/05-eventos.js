let form = document.createElement('form');
form.id = 'mi-formulario'
let input = document.createElement('input');
input.setAttribute('type', 'text');
let btn = document.createElement('button');
btn.innerText = 'Enviar';
form.append(input);
form.append(btn);

document.body.append(form);
// e = event
// Cuando el raton entra al formulario.
form.onmouseenter = e => {
    console.log('entra el mouse', e);
}

// Cuando el ratón sale del formulario.
form.onmouseleave = e => {
    console.log('sale el mouse');
}

// Cuando se clica dentro.
input.onfocus = e => {
    console.log('input con focus');
}

// Cuando se clica fuera.
input.onblur = e => {
    console.log('input perdió el foco');
}

// Se va a ejecutar cada vez que el valor que se encuentre dentro del formulario cambie.
input.onchange = e => {
    console.log('valor cambia', e.target.value); // con .target obtenemos el elemento mismo HTML y
}                                                // para sacar el valor del campo usamos .value

// Realizar una función cada vez que se clicke el botón. 
// btn.onclick = e => {
//     e.preventDefault();  // Se recarga la página si no detenemos con esta función el comportamiento por default del formulario.
//     console.log('botón clickeado');
// }

// Si queremos realizar lo mismo de arriba podemos usar este metodo también.
// Primer argumento es el nombre del evento,
// Segundo argumento es la función del evento.
btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('botón clickeado');
})