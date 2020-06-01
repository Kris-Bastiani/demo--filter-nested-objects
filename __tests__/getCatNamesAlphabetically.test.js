const petsByOwnerGender = require('../__mocks__/petsByOwnerGender');
const catNamesByOwnerGender = require('../__mocks__/catNamesByOwnerGender');
const getCatNamesAlphabetically = require('../lib/helpers/getCatNamesAlphabetically');

describe('getCatNamesAlphabetically()', () => {
	it('Returns the expected array', () => {
		expect(getCatNamesAlphabetically(petsByOwnerGender.male)).toEqual(catNamesByOwnerGender.male);
	});
});
