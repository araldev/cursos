// A esta función le podemos pasar 2 argumentos:
// Primer argumento: URL donde queremos ir.
// Segundo argumento: las opciones que le podemos pasar a esta.
const url = 'https://jsonplaceholder.typicode.com/todos/a';
fetch(url)
    .then(response => {
        if (response.ok) {
            // return response.json()
            return response.text()
        }
        return Promise.reject(response.status);
    })
    .then(data => console.log(data))
    .catch(message => console.log({ message }));