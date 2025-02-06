import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist', 'node_modules'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.browser,
            },
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
        },
        plugins: ['react', 'react-hooks'],
        rules: {
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react/react-in-jsx-scope': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            'no-unused-vars': 'warn',
            'no-console': 'warn',
            eqeqeq: 'error',
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
        },
    },
);
