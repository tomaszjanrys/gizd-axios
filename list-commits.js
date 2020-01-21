const tomek = require('axios');
const z = tomek.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json',
    headers: {
        'Authorization': 'token cc7e64e4d189980d3fb41bd5b9a491fac57968c6',
        'Accept': 'application/vnd.github.v3+json',
    }
})


z.get('/gists/70341ab26fae042b490d85da3cbe5dda/commits', {

    })
    .then(function(response) {
        console.log(response.status);
    })
    .catch(function(error) {
        console.log(error);
    })