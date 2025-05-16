const handleSubmit = (event) => {
    event.preventDefault()

    // Esto y lo de abajo es lo mismo, pero aquí puedo recuperar varios valores
    const { query } = Object.fromEntries(new FormData(event.target))
    // const fields = new FormData(event.target)
    // const query = fields.get('query')
}

//Es necesario que el HTMLElement tenga el atributo name="" para poder
// darle valor a la key de new FormData y acceder a el luego

// En esta línea "const { query } = Object.fromEntries(new FormData(event.target))"
// 1. El evento tendría que venir de un onSubmit de un <form>.
// 2. Por lo cual el event.target es el propio <form>.
// 3. Al hacer "new FormData(event.target)" recuperamos la información del form (inputs...) en un
//    "objeto FormData" que actúa como una colección de pares clave(attr.name)/valor(value)
//    con los datos de un formulario.
// 4. Object.fromEntries(new FormData(event.target)) creamos un objet literal
//    al que accedemos a cualquier valor haciendo una destructuración:
//    "const { query } = Object.fromEntries(new FormData(event.target))"


// En estas líneas:
//    "const fields = new FormData(event.target)"
//    "const query = fields.get('query')"
// 1. El evento tendría que venir de un onSubmit de un <form>.
// 2. Por lo cual el event.target es el propio <form>.
// 3. Al hacer "new FormData(event.target)" recuperamos la información del form (inputs...) en un
//    "objeto FormData" que actúa como una colección de pares clave/valor con los datos de un formulario.
// 4. Guardamos en la constante el "objeto FormData" ---> "const fields = new FormData(event.target)".
// 5. Este objeto tiene el metodo ".get('usar atributo name del input')"
//    que devuelve el valor del HTMLElement que le pasemos. ex:"const query = fields.get('query')"