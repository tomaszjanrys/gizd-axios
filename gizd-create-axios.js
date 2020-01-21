const axios = require('axios')
const tomek = axios.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json',
    headers: {
        'Authorization': 'token 21f1853c04aa27b80c236b65571f7c1a7dfa1ada',
        'Accept': 'application/vnd.github.v3+json',
    }
});

const x = tomek.post('/gists', {
        "description": "Gizd 1",
        "public": true,
        "files": { "gizd.txt": { "content": "jednocześnie utworzone dwa gizdy." } }
    })
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })

const y = tomek.post('/gists', {
        "description": "Gizd 2",
        "public": true,
        "files": { "gizd.txt": { "content": "jednocześnie utworzone dwa gizdy." } }

    })
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })
axios.all([x, y])
    .then(axios.spread(function(x, y) {

    }))
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })