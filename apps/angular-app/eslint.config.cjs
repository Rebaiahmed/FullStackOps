const nx = require('@nx/eslint-plugin');
const tseslint = require('@typescript-eslint/eslint-plugin');

module.exports = [
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': 'warn',
        // Angular-Specific Conventions
      '@angular-eslint/no-empty-lifecycle-method': 'warn', // Warns about empty lifecycle methods

      // General TypeScript/JavaScript Quality
      '@typescript-eslint/explicit-function-return-type': ['warn', { // Requires explicit return types for functions
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      }],
      'prefer-const': 'error', // Enforce 'const' over 'let' where variable is not reassigned
      'eqeqeq': 'error', // Enforce === and !== instead of == and !=
       'no-magic-numbers': ['warn', {
        ignore: [0, 1, -1], // Common numbers to ignore
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      }],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
