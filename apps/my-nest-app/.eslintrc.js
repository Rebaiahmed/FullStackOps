module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
   tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  env: {
    node: true,
    es2020: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    // Add or customize rules here
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [
    {
      files: ['webpack.config.js'],
      env: {
        node: true,
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'script',
      },
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        'no-undef': 'off',
      },
    },
    {
      files: ['*.spec.ts', '*.test.ts'],
      env: {
        jest: true,
      },
    },
  ],
};
