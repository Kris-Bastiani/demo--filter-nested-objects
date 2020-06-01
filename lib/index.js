const { BASE_URI } = require('./constants');
const getData = require('./helpers/getData');
const getPetsByOwnerGender = require('./helpers/getPetsByOwnerGender');

getData(`${BASE_URI}/people.json`)
	.then(response => {
		const petsByOwnerGender = getPetsByOwnerGender(response);
		console.log(petsByOwnerGender);
	})
	.catch(error => error);
