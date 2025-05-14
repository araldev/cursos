function callback(fn, ...rest) {
    fn(...rest);
}

// function log(...args) {
//     console.log(args);
// }

// callback(log, 1, 2, 3, 4);

callback((...args) => {
    console.log(args);
}, 1, 2, 3, 4);