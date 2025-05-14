// const config =  {
//     url: 'https://holamund.io',
//     direccion: {
//         calle: 'hola mundo',
//         numero: 80,
//     }
// }

// function webserver({ url, direccion: { calle } }) { //de esta manera dentro del objeto de config decimos que queremos la propiedad de url y crea una constante con el mismo nombre.
//     // const { url } = config;
//     console.log(calle);
//     return url;
// }

// console.log(webserver({ url: 'https://holamundo.io' }));


// const config =  [
//     'https://holamundo.io',
//     145,
//     80,
// ]

// function webserver([url, bucket, port]) {
//     // const [url, bucket, port] = configuracion;
//     //const {url} = config;
//     return url;
// }

// console.log(webserver(config));


// const config =  [
//     'https://holamundo.io',
//     145,
//     80,
// ]

// function webserver([url, ...rest]) {
//     console.log(rest);
//     return url;
// }

// console.log(webserver(config));


// const config =  {
//     url: 'https://holamund.io',
//     direccion: {
//         calle: 'hola mundo',
//         numero: 80,
//     }
// }

// function webserver({ url, ...rest }) { 
//     console.log(rest);
//     return url;
// }

// console.log(webserver(config));


const config =  {
    url: 'https://holamund.io',
    direccion: {
        calle: 'hola mundo',
        numero: 80,
    }
}

function webserver(config) { 
    const { url, ...rest} = config;
    console.log(rest);
    return url;
}

console.log(webserver(config));