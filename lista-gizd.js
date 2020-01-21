const tomek = require('axios');
const z = tomek.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json',
    headers: {
        'Authorization': 'token c8d4cdcc3e04900bdb9140c90561782a27892912',
        'Accept': 'application/vnd.github.v3+json',
    }
})

z.get('/gists', {

    })
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })