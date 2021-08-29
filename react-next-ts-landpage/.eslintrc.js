module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		'react/jsx-indent': [1, 'tab'],
		'react/jsx-indent-props': [2, 0],
		'no-tabs': 0,

		'jsx-quotes': [2, 'prefer-double'],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],

		'jsx-a11y/anchor-is-valid': ['off'], // allow <a> without href on nextjs. Important to use <Link>
		'react/jsx-props-no-spreading': ['off'],
		'linebreak-style': 0,
		'no-console': 0,
		'no-alert': 0,
		'arrow-body-style': 0,
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: false,
				optionalDependencies: false,
				peerDependencies: false,
				packageDir: './',
			},
		],
		'react/require-default-props': ['off'], // default props error on ? props
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		// nextjs
		'react/react-in-jsx-scope': 'off',
		'import/extensions': 'off', // allow every code in every extension
		// 'operator-linebreak': ['error', 'before'],
		'no-use-before-define': 'off',
		'operator-linebreak': ['off'], // linebreak prettier error of || && ? :
		'@typescript-eslint/no-use-before-define': ['error'],
		'import/no-unresolved': ['off'], // typescript error
		'import/prefer-default-export': ['off'], // no need to create default export
	},
};
