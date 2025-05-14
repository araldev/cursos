// let arr = [1, 2];
// arr = [];

// let arr = [1, 2];
// let arr2 = arr;
// arr = [];
// console.log(arr2, arr);

// let arr = [1, 2];
// arr.length = 0;
// console.log(arr);

let arr = [1, 2];
arr.splice(0, arr.length);
console.log(arr);

// let arr= [1, 2];
// while (arr.length > 0) {   //esta manera es la mas lenta, no usar.(es un loop).
//     arr.pop();
// }