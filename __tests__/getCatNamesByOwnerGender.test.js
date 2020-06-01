const petsByOwnerGender = require('../__mocks__/petsByOwnerGender');
const catNamesByOwnerGender = require('../__mocks__/catNamesByOwnerGender');
const getCatNamesByOwnerGender = require('../lib/helpers/getCatNamesByOwnerGender');

describe('getCatNamesAlphabetically()', () => {
	it('Returns the expected object', () => {
		expect(getCatNamesByOwnerGender(petsByOwnerGender)).toEqual(catNamesByOwnerGender);
	});
});
