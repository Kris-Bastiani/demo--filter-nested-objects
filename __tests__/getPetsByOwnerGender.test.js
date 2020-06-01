const mockData = require('../__mocks__/people.json');
const petsByOwnerGender = require('../__mocks__/petsByOwnerGender');
const getPetsByOwnerGender = require('../lib/helpers/getPetsByOwnerGender');

describe('getPetsByOwnerGender()', () => {
	it('Returns the expected object', () => {
		expect(getPetsByOwnerGender(mockData)).toMatchObject(petsByOwnerGender);
	});
});
