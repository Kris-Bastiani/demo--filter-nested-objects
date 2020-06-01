module.exports = {
	env: {
		node: true,
		jest: true,
	},
	extends: [
		'airbnb-base',
		'plugin:security/recommended',
	],
	globals: {
		afterEach: true,
		beforeEach: true,
		browser: true,
		by: true,
		console: true,
		describe: true,
		document: true,
		element: true,
		ENV: true,
		expect: true,
		it: true,
		jest: true,
		window: true,
	},
	parserOptions: { ecmaVersion: 10 },
	plugins: [
		'import',
		'jest',
		'security',
	],
	rules: {
		'arrow-parens': ['error', 'as-needed'],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		indent: ['error', 'tab'],
		'no-mixed-operators': [
			'error',
			{
				groups: [
					['+', '-', '*', '/', '%', '**'],
					['&', '|', '^', '~', '<<', '>>', '>>>'],
					['==', '!=', '===', '!==', '>', '>=', '<', '<='],
					['&&', '||'],
					['in', 'instanceof'],
				],
			},
		],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 1,
			},
		],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-unused-expressions': ['error', {
			allowShortCircuit: true,
			allowTernary: true,
		}],
		'security/detect-object-injection': 0,
	},
};
