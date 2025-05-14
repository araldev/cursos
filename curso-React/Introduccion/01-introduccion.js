// Podemos importar React con un CDN sin instalar paquetes.
// SWC transpila el codigo(.jsx) a javascript. SWC es mas rápido que babeljs.

// React es para crear y definir componentes: useState, useEffect, createElement, etc.
import React from 'https://esm.sh/react@18.2.0'

// ReactDom Importa específicamente el módulo client de react-dom.
// API moderna de montaje (createRoot):	Para iniciar/renderizar en el DOM
import ReactDom from 'https://esm.sh/react-dom@18.2.0/client' // client

const appDomElement = document.getElementById('app')
const root = ReactDom.createRoot(appDomElement)

const button1 = React.createElement('button', { 'data-id': 123 }, 'Button 1')
const button2 = React.createElement('button', { 'data-id': 456 }, 'Button 2')
const button3 = React.createElement('button', { 'data-id': 789 }, 'Button 3')

// Como React solo puede renderizar un elemento a la vez "React.Fragment" es una forma de
// envolver un conjunto de elementos en un elemento vacío que no estará en el DOM
const app = React.createElement(React.Fragment, null, [button1, button2, button3])

root.render(app)

// Esto es lo mismo que la manera de crear los botones arriba con "React.createElement".
// Se puede usar <React.Fragment> </React.Fragment>  ó  <> </>
/* JSX
<React.Fragment>
    <button data-id="123">Button 1</button>
    <button data-id="456">Button 2</button>
    <button data-id="789">Button 3</button>
</React.Fragment>
*/

// JSX evita que te injecten código por lo tanto si pones html en un string y lo intentas
// renderizar renderizará texto
const hacker = '<script>alert("Dame tu dinero")</script>'

root.render(hacker) // -----> Esto renderiza un string.
