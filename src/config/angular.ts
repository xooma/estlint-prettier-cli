import prettierOptions from '../base/prettier.config';

export default {
  extends: [
    'eslint:recommended',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@angular-eslint/directive-selector': [
      'error',
      { type: 'attribute', prefix: 'app', style: 'camelCase' }
    ],
    '@angular-eslint/component-selector': [
      'error',
      { type: 'element', prefix: 'app', style: 'kebab-case' }
    ],
    'prettier/prettier': [
      'error',
      prettierOptions
    ],
  },
};