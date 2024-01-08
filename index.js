module.exports = {
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'no-tabs': ['error', {
      allowIndentationTabs: false,
    }],
    'indent': ['error', 2, {
      VariableDeclarator: 'first',
      SwitchCase: 1,
    }],
    'max-len': ['warn', {
      code: 140,
    }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline', // do not require in multiline function calls, but do allow
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'comma-style': ['error', 'last'],
    'brace-style': ['error', 'stroustrup', {
      allowSingleLine: false,
    }],
    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    'no-unused-vars': ['warn', {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'none',
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    }],
    'no-debugger': 'off',
    'no-case-declarations': 'warn',
    'array-callback-return': 'warn',
    'eqeqeq': ['error', 'always', {
      // Allow usage of != null
      null: 'ignore',
    }],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', {
      allowTemplateLiterals: true,
    }],
    'semi': ['error', 'always', {
      omitLastInOneLineBlock: false,
    }],
    'no-multi-spaces': ['warn', {
      ignoreEOLComments: true,
      exceptions: {
        BinaryExpression: false,
        ImportDeclaration: true,
        Property: true,
        VariableDeclarator: true,
      },
    }],
    'block-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never', {
      enforceForClassMembers: true,
    }],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
    }],
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'space-in-parens': ['error', 'never'],
    'spaced-comment': ['warn', 'always', {
      exceptions: ['*', '/'],
    }],
    'switch-colon-spacing': ['error', {
      after: true,
      before: false,
    }],
    'template-tag-spacing': ['error', 'never'],
    'wrap-regex': 'error',
    'semi-style': ['error', 'last'],
    'arrow-body-style': 'off',
    'curly': ['warn', 'all'],
    'no-var': 'error',
    'no-confusing-arrow': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', {
      object: true,
      array: false,
    }],
    'prefer-template': 'error',
    'prefer-spread': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'no-fallthrough': ['error', {
      commentPattern: 'fallthrough',
    }],
  },
};
