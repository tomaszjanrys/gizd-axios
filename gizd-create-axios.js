const axios = require('axios')
const tomek = axios.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json',
    headers: {
        'Authorization': 'token 66598019ec2a6372a5a2d58461aabdd17463bfbe',
        'Accept': 'application/vnd.github.v3+json',
    }
});

const x = tomek.post('/gists', {
        "description": "Gizd 1",
        "public": true,
        "files": { "j.txt": { "content": "jednocześnie utwożone dwa gizdy" } }
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
        "files": { "j.txt": { "content": "jednocześnie utwożone dwa gizdy" } }

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