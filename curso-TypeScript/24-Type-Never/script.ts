// Bueno esto es un ejemplo para ver el tipo never

function fn(x:string | number) {
    if (typeof x === 'string') {
        console.log(x.toUpperCase());
    } else if (typeof x === 'number') {
        console.log(x.toFixed(2));
    } else {
        // Aquí el tipo de x es never
        x
    }
}