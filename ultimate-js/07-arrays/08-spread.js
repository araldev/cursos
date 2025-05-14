let arr1 = [1, 2];
let arr2 = [5, 6];

//para combinar arrays y añadir elementos a la nueva variable.
let arr3 = [0, ...arr1, 3, 4, ...arr2, 7, 8];
let arr4 = [...arr3];
arr3.pop();

console.log(arr3, arr4);