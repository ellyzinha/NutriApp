const axios = require('axios');

const api = axios.create({
    baseURL: 'https://caloriasporalimentoapi.herokuapp.com/api/'
});

module.exports = api;