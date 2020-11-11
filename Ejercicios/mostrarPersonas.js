// Script en Node.js para hacer un GET con la biblioteca request-promise a una url.
const rp = require('request-promise');

rp('https://reclutamiento-14cf7.firebaseio.com/personas.json').then((response) => {
    console.log(JSON.parse(response));
});