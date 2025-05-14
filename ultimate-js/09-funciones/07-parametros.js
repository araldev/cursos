/**
 * {
 * url: ...
 * bucket: amazon S3
 * port: 80
 * }
 */
const config = {
    url: 'https://holamundo.io',
}

function configurarAPI(url, bucket = 145, port = 80) {
    return `${url}/${bucket}:${port}`;
}

// console.log(configurarAPI());
console.log(configurarAPI('https://holamundo.io'));