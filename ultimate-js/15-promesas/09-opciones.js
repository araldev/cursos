const url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url, {
    method: 'POST', // PUT, PATCH , DELETE, GET(es el valor por defecto que tiene fetch)
    body: JSON.stringify({ title: 'Hola mundo' }),
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'api key',
    },
    cache: 'no-cache', // default, reload, force-cache, only-if-cached
})
    .then(response => {
        if (response.ok){
            // return response.json();
            return response.text();
        }
        return Promise.reject(response.status);
    })
    .then(data => console.log(data))
    .catch(message => console.log({ message }));