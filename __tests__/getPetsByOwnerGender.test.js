const mockData = require('../__mocks__/people.json');
const getPetsByOwnerGender = require('../lib/helpers/getPetsByOwnerGender');

const EXPECTED_RESULT = {
	male: [
		{ name: 'Garfield', type: 'Cat' },
		{ name: 'Fido', type: 'Dog' },
		{ name: 'Tom', type: 'Cat' },
		{ name: 'Max', type: 'Cat' },
		{ name: 'Sam', type: 'Dog' },
		{ name: 'Jim', type: 'Cat' },
	],
	female: [
		{ name: 'Garfield', type: 'Cat' },
		{ name: 'Tabby', type: 'Cat' },
		{ name: 'Simba', type: 'Cat' },
		{ name: 'Nemo', type: 'Fish' },
	],
};

describe('getPetsByOwnerGender()', () => {
	it('Returns the expected object', () => {
		expect(getPetsByOwnerGender(mockData)).toMatchObject(EXPECTED_RESULT);
	});
});
