// Inferencia de Funciones Anónimas
// Las funciones anónimas son aquellas que no tienen un nombre y se utilizan como argumentos de otras funciones o se asignan a variables.
// En TypeScript, la inferencia de tipos también se aplica a las funciones anónimas.

const avengers = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Black Widow'];
avengers.forEach((avenger) => {
    // Inferencia de tipo String
    console.log(avenger.toUpperCase);
}) 

// En vez de funciones flecha podriamos usar funciones normales claro esta
avengers.forEach(function (avenger) {
    // Inferencia de tipo String
    console.log(avenger.toUpperCase);
})