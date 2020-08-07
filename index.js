module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'globalThis': 'readonly',
    'import': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
  },
  'plugins': [],
  'rules': {
    'no-tabs': ['error', {
      'allowIndentationTabs': false,
    }],
    'indent': ['error', 2, {
      'VariableDeclarator': 'first',
      'SwitchCase': 1,
    }],
    'max-len': ['warn', {
      'code': 140,
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {
      'before': false,
      'after': true,
    }],
    'comma-style': ['error', 'last'],
    'brace-style': ['error', 'stroustrup', {
      'allowSingleLine': true,
    }],
    'no-debugger': 'warn',
    'no-case-declarations': 'warn',
    'array-callback-return': 'warn',
    'eqeqeq': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', {
      'allowTemplateLiterals': true,
    }],
    'semi': ['error', 'always', {
      'omitLastInOneLineBlock': false,
    }],
    'block-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never', {
      'enforceForClassMembers': true,
    }],
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'space-in-parens': ['error', 'never'],
    'spaced-comment': ['error', 'always', {
      'exceptions': ['*'],
    }],
    'switch-colon-spacing': ['error', {
      'after': true,
      'before': false,
    }],
    'template-tag-spacing': ['error', 'never'],
    'wrap-regex': 'error',
    'semi-style': ['error', 'last'],
    // TODO: Not quite there yet. Forces you to remove brackets where an arrow function
    // can be a one-liner. That's not exactly what we want.
    'arrow-body-style': ['error', 'as-needed', {
      'requireReturnForObjectLiteral': true,
    }],
    'curly': ['warn', 'all'],
    'no-var': 'error',
    'no-confusing-arrow': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-template': 'error',
    'prefer-spread': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
  },
};