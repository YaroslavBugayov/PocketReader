import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortExports from 'eslint-plugin-sort-exports';
import reactNativePlugin from 'eslint-plugin-react-native';

export default tseslint.config(
    { ignores: ['dist', 'node_modules', 'android', 'ios', 'build'] },
    {
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
          ...globals.node,
          ...globals.browser,
          ...globals.commonjs,
          __DEV__: true,
        },
        parser: tseslint.parser,
        parserOptions: {
          project: ['./tsconfig.json'],
          tsconfigRootDir: process.cwd(),
        },
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-native': reactNativePlugin,
        'simple-import-sort': simpleImportSort,
        'sort-exports': sortExports,
        '@typescript-eslint': tseslint.plugin,
      },
      rules: {
        ...js.configs.recommended.rules,
        ...tseslint.configs.recommended.rules,
        ...reactHooks.configs.recommended.rules,

        'react-native/no-unused-styles': 'warn',
        'react-native/split-platform-components': 'warn',
        'react-native/no-inline-styles': 'off',
        'react-native/no-color-literals': 'off',
        'react-native/no-single-element-style-arrays': 'warn',

        'no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'semi': ['error', 'always'],
        'object-curly-spacing': ['error', 'always', { arraysInObjects: false }],
        'simple-import-sort/imports': 'error',
        'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],
        'eol-last': ['error', 'always'],
        'quotes': ['error', 'single'],
        'no-extra-boolean-cast': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],

        // TypeScript-специфіка
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
          },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
      },
    }
);
