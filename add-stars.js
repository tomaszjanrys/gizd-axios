const tomek = require('axios');
const z = tomek.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json',
    headers: {
        'Authorization': 'token c56cd8ed761623ae98d8e6cd6cfa48b0dd1c76e3',
        'Accept': 'application/vnd.github.v3+json',
    }
})


const y = z.put('/gists/88b3e3ed3dd4aba2affb1daca7c926b7/star')
const x = z.delete('/gists/70341ab26fae042b490d85da3cbe5dda/star')

tomek.all([y, x])
    .then(function(y, x) {

    })
    .then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    })