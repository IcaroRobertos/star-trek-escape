module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jasmine: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'operator-linebreak': 'off',
  },
};
