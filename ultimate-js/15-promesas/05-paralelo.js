const p1 = Promise.reject('Fallo en conexión al servidor');
const p2 = Promise.reject(42);
const p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'foo');
});

// Tiene que ser resueltas todas para pasar al .then
// Promise.all([p1, p2, p3])
//     .then(valores => console.log('all', valores))
//     .catch(e => console.log('error en all', e));

// .race va a esperar a que se resuelva o se rechaze una promesa y la primera que cargue es la que se reflejará.
// Promise.race([p1, p2, p3])
//     .then(valor => console.log('race', valor))
//     .catch(e => console.log('error en race', e));

// .any va a pasar el valor a .then con la primera promesa que resuelva, empezando en orden.
// Promise.any([p1, p2, p3])
//     .then(valor => console.log({ valor }))
//     .catch(e => console.log({ e }));

// .allSettled independiente de si las promesas son resueltas o rechazadas se va a envolver en un objeto 
//  con propiedad status y la propiedad de reason(rechazada) o value(resuelta).
Promise.allSettled([p1, p2, p3])
    .then(valores => console.log({ valores }))
    .catch(e => console.log({ e }));