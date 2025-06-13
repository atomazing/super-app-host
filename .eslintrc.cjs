module.exports = {
	parserOptions: {
		EXPERIMENTAL_useProjectService: true, // Find the tsconfig.json nearest to each source file
	},
	extends: ['@atomazing-org/eslint-config'],
	ignorePatterns: ['.eslintrc.cjs', 'public'],
	settings: {
		'import/resolver': {
			typescript: {
				project: `${__dirname}/tsconfig.json`,
			},
		},
	},
}
