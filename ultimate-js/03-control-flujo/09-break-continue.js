//se puede usar para for, for in, for of, do while: continue salta la siguiente funcion si cumple la condicion y break para el loop o bucle.

let i = 0
while (i < 6){
    i++;
    if (i === 2) {
        continue;
    }
    if (i === 4) {
        break;
    }
    console.log(i);
}