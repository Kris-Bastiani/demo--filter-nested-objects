const axios = require('axios');

module.exports = uri => axios.get(uri)
	.then(response => response.data)
	.catch(error => error);
