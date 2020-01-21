const tomek = require('axios');
const z = tomek.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json',
    headers: {
        'Authorization': 'token cc7e64e4d189980d3fb41bd5b9a491fac57968c6',
        'Accept': 'application/vnd.github.v3+json',
    }
})


z.delete('/gists/0a5f05e4f17c043c35e44e27a8a68787', {

    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })