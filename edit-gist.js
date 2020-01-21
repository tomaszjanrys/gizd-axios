const tomek = require('axios');
const z = tomek.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json',
    headers: {
        'Authorization': 'token bc1d98d889b7f959b4c19afdcfad5f89a1a20934',
        'Accept': 'application/vnd.github.v3+json',
    }
})


z.patch('/gists/70341ab26fae042b490d85da3cbe5dda', {
        "files": {
            "gizd.txt": {
                "content": "edit ok."
            }
        }
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })