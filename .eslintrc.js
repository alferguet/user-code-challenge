module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/prefer-readonly': ['error'],
    '@typescript-eslint/promise-function-async': ['error'],
    '@typescript-eslint/no-useless-constructor': ['warn'],
    '@typescript-eslint/prefer-for-of': ['warn'],
    eqeqeq: ['error', 'smart'],
    semi: ['error', 'never'],
  },
}
