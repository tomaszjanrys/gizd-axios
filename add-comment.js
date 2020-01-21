const tomek = require('axios');
const z = tomek.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json',
    headers: {
        'Authorization': 'token c43019e45a406dd2f5842f70a14025989e26d20f',
        'Accept': 'application/vnd.github.v3+json',
    }
})


z.post('/gists/88b3e3ed3dd4aba2affb1daca7c926b7/comments', {
        "body": "Znasz gita i jest git."
    })
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    })