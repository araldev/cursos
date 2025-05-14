// Las referencias de estos elementos son unicas,
// no puedo agregar el mismo elemento a varias partes del DOM,
// en caso de estar repetido el ultimo llamado es el que va a tomar prioridad.
let el = document.createElement('p');
el.innerText = 'Elemento creado';

// puede recibir texto('hola mundo') y nodos(el), 
// usando este metodo lo agregamos al final del documento HTML.
document.body.append(el);

// Para eliminar el elemento del DOM.
el.remove();

// Usando este metodo lo agregamos al principio del documento HTML.
document.body.prepend(el);

// Para reemplazar elementos HTML.
let div = document.createElement('div');
div.innerText = 'Soy un texto';
// Colocar la referencia seguido de .replaceWith y en el paréntesis por lo que queremos reemplazar.
el.replaceWith(div);  
// Usando un nodo padre tambien podemos reemplazar elementos.
document.body.replaceChild(el, div);  // Primero recibe el nuevo elemento, segundo lo que quieres reemplazar.
document.body.removeChild(el);  // Para eliminar el elemento del DOM.
document.body.appendChild(el);  // Agregar elementos al final, solo recibe nodos, no texto. No tiene prependChild.

// Para insertar el elemento antes de otro.
// document.body.insertBefore(div, el);  // Primero el elemento que insertamos, segundo el elemento delante de donde queremos insertarlo.
document.body.insertAdjacentElement('beforebegin', div); // Lo inserta al comienzo antes de la etiqueta body.
document.body.insertAdjacentElement('afterbegin', div); // Lo inserta al comienzo después de la etiqueta body.
document.body.insertAdjacentElement('beforeend', div); // Lo inserta al final antes de la etiqueta body.
document.body.insertAdjacentElement('afterend', div); // Lo inserta al final después de la etiqueta body.

document.body.insertAdjacentHTML();
document.body.insertAdjacentText();