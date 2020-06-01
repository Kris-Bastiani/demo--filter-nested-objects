const getCatNamesAlphabetically = require('./getCatNamesAlphabetically');

module.exports = obj => Object.fromEntries(
	Object.entries(obj).map(([key, value]) => [key, getCatNamesAlphabetically(value)]),
);
