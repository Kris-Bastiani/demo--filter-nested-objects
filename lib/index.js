const { BASE_URI } = require('./constants');
const getData = require('./helpers/getData');

getData(`${BASE_URI}/people.json`)
	.then(console.log)
	.catch(error => error);
