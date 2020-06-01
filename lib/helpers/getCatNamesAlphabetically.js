module.exports = arr => arr
	.reduce((acc, curr) => (curr.type === 'Cat' ? [...acc, curr.name] : acc), [])
	.sort();
