const mockData = require('../__mocks__/people.json');
const { BASE_URI } = require('../lib/constants');
const getData = require('../lib/helpers/getData');

const mockFetch = Promise.resolve({ json: () => Promise.resolve(mockData) });

describe('getData()', () => {
	beforeAll(() => {
		global.fetch = jest.fn().mockImplementation(() => mockFetch);
	});

	afterAll(() => {
		global.fetch.mockClear();
		delete global.fetch;
	});

	it('GETs data and returns the expected response', async () => {
		const response = await getData(`${BASE_URI}/people.json`);
		expect(response).toEqual(mockData);
	});

	it('Returns an Axios error if the request encounters an error', async () => {
		const response = await getData(`${BASE_URI}/foo.json`);
		expect(response.isAxiosError).toEqual(true);
	});
});
