const tomek = require('axios');
const z = tomek.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json',
    headers: {
        'Authorization': 'token c962ab7bf9ee61450c802ced2935bfafb1ca760b',
        'Accept': 'application/vnd.github.v3+json',
    }
})


z.post('/gists/70341ab26fae042b490d85da3cbe5dda/comments', {
        "body": "Znasz gita i jest git."
    })
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })