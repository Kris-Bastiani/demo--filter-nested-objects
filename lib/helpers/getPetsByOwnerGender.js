module.exports = arr => arr.reduce((acc, curr) => {
	const { pets } = curr;
	const gender = curr.gender.toLowerCase();
	pets && acc[gender].push(...pets);
	return acc;
}, { male: [], female: [] });
