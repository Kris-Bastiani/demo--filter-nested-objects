const petsByOwnerGender = require('../__mocks__/petsByOwnerGender');
const getCatNamesAlphabetically = require('../lib/helpers/getCatNamesAlphabetically');

const EXPECTED_RESULT = ['Garfield', 'Jim', 'Max', 'Tom'];

describe('getCatNamesAlphabetically()', () => {
	it('Returns the expected array', () => {
		expect(getCatNamesAlphabetically(petsByOwnerGender.male)).toEqual(EXPECTED_RESULT);
	});
});
