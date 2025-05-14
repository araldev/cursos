let el = document.createElement('p');

el.innerText = "Elemento creado";

document.body.append(el);

// el.innerText = "<ul><li>Hola mundo</li></ul>";  // Me genera un texto plano
// el.innerHTML = "<ul><li>Hola mundo</li></ul>";     // Me genera un texto HTML

el.style = 'backround-color: red; font-weight: bold;'
el.className = 'parrafo';
el.id = 'mi-parrafo';
// lo siguiente no sirve
// el.mipropiedad = 'mi propiedad';

// Para agregar una propiedad nueva usar .setAttribute('la propiedad', 'el valor que va a tener la propiedad' );
el.setAttribute('mipropiedad', 'mi propiedad');
el.getAttribute('mipropiedad');  // Para obtener el valor de alguna propiedad.
el.hasAttribute('mipropiedad');  // Para preguntar si es que tiene alguna propiedad en especifico.