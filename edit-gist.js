const tomek = require('axios');
const z = tomek.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json',
    headers: {
        'Authorization': 'token c56cd8ed761623ae98d8e6cd6cfa48b0dd1c76e3',
        'Accept': 'application/vnd.github.v3+json',
    }
})


z.patch('/gists/70341ab26fae042b490d85da3cbe5dda' {
        "gizd.txt": null,
        "new_file.txt": { "content": "Edytacja ok" }
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })